import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors } = useForm({
    tanggal: "",
    jenis_imunisasi: "",
    umur: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("imunisasi.store"), { data });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Tambah Data Imunisasi Badan
          </h2>
        </div>
      }
    >
      <Head title="Tambah Data Imunisasi Badan" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div>
                <InputLabel htmlFor="tanggal" value="Tanggal Imunisasi" />
                <input
                  id="tanggal"
                  type="date"
                  name="tanggal"
                  value={data.tanggal}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("tanggal", e.target.value)}
                />
                <InputError message={errors.tanggal} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="jenis_imunisasi" value="Jenis Imunisasi" />
                <select
                  id="jenis_imunisasi"
                  name="jenis_imunisasi"
                  value={data.jenis_imunisasi}
                  onChange={(e) => setData("jenis_imunisasi", e.target.value)}
                  className="mt-1 block w-full"
                >
                  <option value="">Pilih Jenis Imunisasi</option>
                  <option value="Hepatitis B">Hepatitis B</option>
                  <option value="BCG">BCG</option>
                  <option value="Polio tetes 1">Polio tetes 1</option>
                  <option value="DPT-HB-Hib 1">DPT-HB-Hib 1</option>
                  <option value="Polio tetes 2">Polio tetes 2</option>
                  <option value="PCV 1">PCV 1</option>
                  <option value="DPT-HB-Hib 2">DPT-HB-Hib 2</option>
                  <option value="Polio tetes 3">Polio tetes 3</option>
                  <option value="PCV 2">PCV 2</option>
                  <option value="DPT-HB-Hib 3">DPT-HB-Hib 3</option>
                  <option value="Polio tetes 4">Polio tetes 4</option>
                  <option value="Polio Suntik(IPV)">Polio Suntik(IPV)</option>
                  <option value="Campak-Rubella">Campak-Rubella</option>
                  <option value="JE">JE</option>
                  <option value="PCV 3">PCV 3</option>
                </select>
                <InputError message={errors.jenis_imunisasi} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="umur" value="Umur (bulan)" />
                <input
                  id="umur"
                  type="number"
                  name="umur"
                  value={data.umur}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("umur", e.target.value)}
                />
                <InputError message={errors.umur} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("imunisasi.index")}
                  className="bg-gray-100 py-1 px-4 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Batal
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
