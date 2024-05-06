import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
  auth,
  totalAnak,
  totalLaki,
  totalPerempuan,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Total Anak
              </h3>
              <p className="text-xl mt-4">{totalAnak}</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-500 text-2xl font-semibold">
                Total Anak Laki-laki
              </h3>
              <p className="text-xl mt-4">{totalLaki}</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-pink-500 text-2xl font-semibold">
                Total Anak Perempuan
              </h3>
              <p className="text-xl mt-4">{totalPerempuan}</p>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
