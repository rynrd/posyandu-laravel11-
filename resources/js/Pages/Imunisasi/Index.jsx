import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import ImunisasisTable from "./ImunisasisTable";

export default function Index({ auth, imunisasis, queryParams = null, success }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Data Imunisasi
          </h2>

          <Link
            href={route("imunisasi.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Tambah Data
          </Link>
        </div>
      }
    >
      <Head title="Data Imunisasi" />

      {success && (
        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
          {success}
        </div>
      )}

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <ImunisasisTable imunisasis={imunisasis} queryParams={queryParams} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}