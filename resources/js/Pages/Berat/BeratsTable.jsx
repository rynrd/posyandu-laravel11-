export default function BeratsTable({ berats, }) {
  return (
    <div className="overflow-auto max-h-80">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-200">
          <tr className="no-wrap">
            <th className="px-3 py-3">ID</th>
            <th className="px-3 py-3">Tanggal</th>
            <th className="px-3 py-3">Berat</th>
          </tr>
        </thead>
        <tbody>
          {berats.data &&
            berats.data.map((berat) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-7000"
                key={berat.id}
              >
                <td className="px-3 py-2">{berat.id}</td>
                <td className="px-3 py-2">{berat.tanggal}</td>
                <td className="px-3 py-2">{berat.berat}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
