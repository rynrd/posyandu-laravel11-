import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Layanan({ auth }) {
  

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Daftar  nomor WhatsApp Kader Posyandu yang dapat di akses untuk melakukan konsultasi online
        </h2>
      }
    >
      <Head title="Layanan" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4"> {/* Ganti grid-cols menjadi 2 */}
            <div
              className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
            >
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <h3 className="text-2xl font-semibold">Layanan WhatsApp</h3>
                <p className="text-xl mt-4">
                  Kunjungi link{" "}
                  <Link href="https://wa.me/6282199271026" className="text-blue-600 underline">
                    Nadila
                  </Link>{" "}
                  untuk mengakses layanan WhatsApp kami.
                </p>
              </div>
            </div>
            <div
              className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
            >
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <h3 className="text-2xl font-semibold">Layanan WhatsApp</h3>
                <p className="text-xl mt-4">
                  Kunjungi link{" "}
                  <Link href="https://wa.me/6282199271026" className="text-blue-600 underline">
                    Nadila
                  </Link>{" "}
                  untuk mengakses layanan WhatsApp kami.
                </p>
              </div>
            </div>
            <div
              className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
            >
              <div className="p-6 text-gray-900 dark:text-gray-100">
                <h3 className="text-2xl font-semibold">Layanan WhatsApp</h3>
                <p className="text-xl mt-4">
                  Kunjungi link{" "}
                  <Link href="https://wa.me/6282199271026" className="text-blue-600 underline">
                    Nadila
                  </Link>{" "}
                  untuk mengakses layanan WhatsApp kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
