import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import TableHeading from "@/Components/TableHeading";
import { Link, router } from "@inertiajs/react";

export default function AnaksTable({ anaks, queryParams = null }) {
  queryParams = queryParams || {};

  const searchFieldChanged = (nama, value) => {
    if (value) {
      queryParams[nama] = value;
    } else {
      delete queryParams[nama];
    }

    router.get(route("anak.index"), queryParams);
  };

  const onKeyPress = (nama, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(nama, e.target.value);
  };

  const sortChanged = (nama) => {
    if (nama === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = nama;
      queryParams.sort_direction = "asc";
    }
  };

  const deleteData = (anak) => {
    if (!window.confirm("Apakah anda yakin ingin menghapus data ini?")) {
      return;
    }
    router.delete(route("anak.destroy", anak.id));
  };

  return (
    <>
      <div className="overflow-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-200">
            <tr className="no-wrap">
              <TableHeading
                name="id"
                sort_field={queryParams.sort_field}
                sort_direction={queryParams.sort_direction}
                sortChanged={sortChanged}
              >
                ID
              </TableHeading>

              <TableHeading
                name="nama"
                sort_field={queryParams.sort_field}
                sort_direction={queryParams.sort_direction}
                sortChanged={sortChanged}
              >
                Nama Anak
              </TableHeading>

              <th className="px-3 py-3">NIK</th>
              <th className="px-3 py-3">Tanggal Lahir</th>
              <th className="px-3 py-3">Usia</th>
              <th className="px-3 py-3">JK</th>
              <th className="px-3 py-3">Nama Ibu</th>
              <th className="px-3 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-200">
            <tr className="no-wrap">
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3">
                <TextInput
                  className="w-full"
                  placeholder="Cari Nama Anak"
                  onBlur={(e) => searchFieldChanged("nama", e.target.value)}
                  onKeyPress={(e) => onKeyPress("nama", e)}
                />
              </th>
              <th className="px-6 py-3">
                <TextInput
                  className="w-full"
                  defaultValue={queryParams.nik}
                  placeholder="Cari NIK"
                  onBlur={(e) => searchFieldChanged("nik", e.target.value)}
                  onKeyPress={(e) => onKeyPress("nik", e)}
                />
              </th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3">
                <SelectInput
                  className="w-full"
                  value={queryParams.jk || ""}
                  onChange={(e) => searchFieldChanged("jk", e.target.value)}
                >
                  <option value="">Cari Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </SelectInput>
              </th>
              <th className="px-6 py-3"></th>
              <th className="px-6 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {anaks.data &&
              anaks.data.map((anak) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-7000"
                  key={anak.id}
                >
                  <td className="px-3 py-2">{anak.id}</td>
                  <th className="px-3 py-2 hover:underline cursor-pointer text-white text-nowrap">
                    <Link href={route("anak.show", anak.id)}>{anak.nama}</Link>
                  </th>
                  <td className="px-3 py-2">{anak.nik}</td>
                  <td className="px-3 py-2">{anak.tanggal_lahir}</td>
                  <td className="px-3 py-2">{anak.usia}</td>
                  <td className="px-3 py-2">{anak.jk}</td>
                  <td className="px-3 py-2">{anak.nama_ibu}</td>
                  <td className="px-3 py-2 text-nowrap">
                    <Link
                      href={route("anak.edit", anak.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={(e) => deleteData(anak)}
                      className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Pagination links={anaks.meta.links} />
      </div>
    </>
  );
}
