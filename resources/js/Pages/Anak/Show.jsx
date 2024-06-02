import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

import {
  ScaleIcon,
  EyeDropperIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

export default function Show({ auth, anak }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          {`Statistik "${anak.nama}"`}
        </h2>
      }
    >
      <Head title={`Data Anak "${anak.nama}"`} />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <img
              src={anak.image_path}
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <p className="font-bold text-lg text-center">{anak.nama}</p>
              <p className="font-bold text-lg text-center">
                {anak.tanggal_lahir}
              </p>
            </div>

            <div className=" p-6 flex flex-wrap gap-4 mt-4">
              <div className="flex-auto">
                <Link
                // href={route("berat.index", { anak_id: anak.id })}
                // active={route().current("berat.index")}
                >
                  <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-4 text-center">
                    <ScaleIcon className="w-20 h-20 mx-auto mb-2" />
                    <p className="font-bold text-lg">Berat Badan</p>
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link
                // href={route("imunisasi.index", { anak_id: anak.id })}
                // active={route().current("imunisasi.index")}
                >
                  <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-4 text-center">
                    <EyeDropperIcon className="w-20 h-20 mx-auto mb-2" />
                    <p className="font-bold text-lg">Imunisasi</p>
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="#">
                  <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-4 text-center">
                    <HeartIcon className="w-20 h-20 mx-auto mb-2" />
                    <p className="font-bold text-lg">Vitamin</p>
                  </div>
                </Link>
              </div>
              <div className="flex-auto">
                <Link href="#">
                  <div className="bg-white dark:bg-gray-500 rounded-lg shadow-md p-4 text-center">
                    <MagnifyingGlassIcon className="w-20 h-20 mx-auto mb-2" />
                    <p className="font-bold text-lg">Pemeriksaan Neonatus</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="p-3">
              <Link
                onClick={() => window.history.back()}
                className="block text-center mt-4 underline text-blue-500"
              >
                Kembali
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
