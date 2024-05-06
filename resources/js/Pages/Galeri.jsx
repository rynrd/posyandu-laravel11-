import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Galeri({ auth }) {
  const photos = [
    "VXZzCnUlVEuvHBCGf7NisejTjWULhB3yinoijVYSTWIJgw6zUGrJjMQ.jpg",
    "NGTOHqLdayDE1dd0\GjCzuxlPklX6rjYhEHDfVnwxusXEzpnDgrfrgvwG.jpg",
    "c0JNkacAD3AeRP8i/ZUYkrBL2eJr3gfSoRPQtJ7CVXaHLWP0iw4F5M3iN.jpg", // Rubah dengan nama foto yang diinginkan
    // Masukkan foto lainnya jika ada
  ];

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Galeri Foto
        </h2>
      }
    >
      <Head title="Galeri Foto" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
              >
                <img
                  src={`/storage/anak/${photo}`}
                  alt={`Foto ${index}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
