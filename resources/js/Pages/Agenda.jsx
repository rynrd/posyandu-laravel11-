import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Agenda({ auth }) {
  // Data contoh kegiatan
  const events = [
    { name: "Pelayanan di posyandu", date: "2024-05-10" },
    { name: "Sosialisasi", date: "2024-05-15" },
    { name: "Pelaksanaan Bulan Imunisasi Nasional (BIAN)", date: "2024-05-20" },
    { name: "Pelaksanaan BIAN dan Vitamin A", date: "2024-05-25" },
  ];

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Agenda Kegiatan
        </h2>
      }
    >
      <Head title="Agenda Kegiatan" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4"> {/* Ganti grid-cols menjadi 2 */}
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
              >
                <div className="p-6 text-gray-900 dark:text-gray-100">
                  <h3 className="text-2xl font-semibold">{event.name}</h3>
                  <p className="text-xl mt-4">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
