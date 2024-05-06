import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth }) {
  // Data contoh wawasan dan edukasi
  const contents = [
    {
      title: "Pentingnya Imunisasi pada Balita",
      link: "https://example.com/imunisasi",
    },
    {
      title: "Pola Makan Sehat untuk Anak",
      link: "https://example.com/pola-makan-sehat",
    },
    {
      title: "Pentingnya Gizi Seimbang",
      link: "https://example.com/gizi-seimbang",
    },
    {
      title: "Panduan Pemberian Makanan Pendamping ASI (MP-ASI)",
      link: "https://example.com/mp-asi",
    },
    {
      title: "Peran Orang Tua dalam Meningkatkan Kualitas Tidur Anak",
      link: "https://example.com/tidur-anak",
    },
    {
      title: "Teknik Efektif dalam Mengelola Konflik dengan Anak",
      link: "https://example.com/konflik-anak",
    },
    {
      title: "Tips Mengajarkan Kemandirian pada Anak",
      link: "https://example.com/kemandirian-anak",
    },
    {
      title: "Pentingnya Aktivitas Fisik untuk Tumbuh Kembang Anak",
      link: "https://example.com/aktivitas-fisik",
    },
    {
      title: "Strategi Mengatasi Kecemasan pada Anak",
      link: "https://example.com/kecemasan-anak",
    },
  ];

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Wawasan dan Edukasi
        </h2>
      }
    >
      <Head title="Wawasan dan Edukasi" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4">
            {" "}
            {/* Ganti grid-cols menjadi 2 */}
            {contents.map((content, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
              >
                <div className="p-6 text-gray-900 dark:text-gray-100">
                  <h3 className="text-2xl font-semibold">{content.title}</h3>
                  <p className="text-xl mt-4">
                    Kunjungi link{" "}
                    <Link
                      href={content.link}
                      className="text-blue-600 underline"
                    >
                      {content.link}
                    </Link>{" "}
                    untuk informasi lebih lanjut.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
