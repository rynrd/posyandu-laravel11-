import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors } = useForm({
    tanggal: "",
    berat: ""
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("berat.store"), { data }); // Menambahkan properti data ke dalam panggilan post
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Tambah Data Berat Badan
          </h2>
        </div>
      }
    >
      <Head title="Tambah Data Berat Badan" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div>
                <InputLabel htmlFor="tanggal" value="Tanggal" />
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
                <InputLabel htmlFor="berat" value="Berat (kg)" />
                <input
                  id="berat"
                  type="number"
                  name="berat"
                  value={data.berat}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("berat", e.target.value)}
                />
                <InputError message={errors.berat} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("berat.index")}
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
