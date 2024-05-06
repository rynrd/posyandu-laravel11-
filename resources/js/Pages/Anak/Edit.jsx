import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, anak }) {
  const { data, setData, post, errors, reset } = useForm({
    image_path: anak.image_path || "",
    nama: anak.nama || "",
    nik: anak.nik || "",
    tanggal_lahir: anak.tanggal_lahir || "",
    usia: anak.usia || "",
    jk: anak.jk || "",
    nama_ibu: anak.nama_ibu || "",
    _method: "put",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("anak.update", anak.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Edit Data Anak "{anak.nama}"
          </h2>
        </div>
      }
    >
      <Head title="Edit Data Anak" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              {anak.image_path && (
                <div className="mb-4">
                  <img src={anak.image_path} className="w-64" />
                </div>
              )}
              <div>
                <InputLabel htmlFor="image_path" value="Foto Anak" />
                <TextInput
                  id="image_path"
                  type="file"
                  name="image_path"
                  className="mt-1 block w-full"
                  onChange={(e) => setData("image_path", e.target.files[0])}
                />
                <InputError message={errors.image_path} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="nama" value="Nama Anak" />

                <TextInput
                  id="nama"
                  type="text"
                  name="nama"
                  value={data.nama}
                  className="mt-1 block w-full"
                  isFocused={true}
                  onChange={(e) => setData("nama", e.target.value)}
                />

                <InputError message={errors.nama} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="nik" value="NIK Anak" />

                <TextInput
                  id="nik"
                  type="text"
                  name="nik"
                  value={data.nik}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("nik", e.target.value)}
                />

                <InputError message={errors.nik} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="tanggal_lahir"
                  value="Tanggal Lahir Anak"
                />

                <TextInput
                  id="tanggal_lahir"
                  type="date"
                  name="tanggal_lahir"
                  value={data.tanggal_lahir}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("tanggal_lahir", e.target.value)}
                />

                <InputError message={errors.tanggal_lahir} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="usia" value="Usia Anak" />

                <TextInput
                  id="usia"
                  type="text"
                  name="usia"
                  value={data.usia}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("usia", e.target.value)}
                />

                <InputError message={errors.usia} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="jk" value="Jenis Kelamin Anak" />
                <div className="mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="jk"
                      value="Laki-laki"
                      checked={data.jk === "Laki-laki"}
                      onChange={(e) => setData("jk", e.target.value)}
                    />
                    <span className="ml-2">Laki-laki</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio"
                      name="jk"
                      value="Perempuan"
                      checked={data.jk === "Perempuan"}
                      onChange={(e) => setData("jk", e.target.value)}
                    />
                    <span className="ml-2">Perempuan</span>
                  </label>
                </div>
                <InputError message={errors.jk} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="nama_ibu" value="Nama Ibu Anak" />

                <TextInput
                  id="nama_ibu"
                  type="text"
                  name="nama_ibu"
                  value={data.nama_ibu}
                  className="mt-1 block w-full"
                  onChange={(e) => setData("nama_ibu", e.target.value)}
                />

                <InputError message={errors.nama_ibu} className="mt-2" />
              </div>
              <div className="mt-4 text-right">
                <Link
                  href={route("anak.index")}
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
