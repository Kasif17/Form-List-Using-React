import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as XLSX from 'xlsx';

const Table = ({ onCreateUserClick }) => {
  const data = useSelector((state) => state.tableData.data);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig) {
      const { key, direction } = sortConfig;
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'data.xlsx');
  };

  const paginatedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4 space-x-2">
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 border rounded">List</button>
          <button
            onClick={onCreateUserClick}
            className="p-2 bg-blue-500 text-white border rounded"
          >
            Create User
          </button>
        </div>
        <button
          onClick={downloadExcel}
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 border"
        >
          Download
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded flex-grow"
        />
        <button className="p-2 bg-gray-200 border rounded">Show All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th
                  key={key}
                  onClick={() => requestSort(key)}
                  className="border p-2 cursor-pointer bg-gray-100 hover:bg-gray-200"
                >
                  {key} {sortConfig && sortConfig.key === key && (
                    sortConfig.direction === 'ascending' ? '↑' : '↓'
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                {Object.values(item).map((val, i) => (
                  <td key={i} className="border p-2">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`p-2 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;


