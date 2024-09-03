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
    <div className="p-6 bg-gray-800 text-gray-200 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="p-3 bg-gray-700 text-gray-200 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out">
            List
          </button>
          <button
            onClick={onCreateUserClick}
            className="p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-400 transition duration-300 ease-in-out"
          >
            Create User
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={downloadExcel}
            className="p-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-400 transition duration-300 ease-in-out"
          >
            Download
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border border-gray-600 bg-gray-700 text-gray-200 rounded-lg shadow-sm flex-grow focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
          />
          <button className="p-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out">
            Show All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-gray-700 rounded-lg shadow-lg">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-600 border-b border-gray-700">
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th
                  key={key}
                  onClick={() => requestSort(key)}
                  className="border p-3 text-left cursor-pointer hover:bg-gray-500 transition duration-300 ease-in-out text-gray-300"
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
              <tr key={index} className="hover:bg-gray-600 transition duration-300 ease-in-out">
                {Object.values(item).map((val, i) => (
                  <td key={i} className="border p-3 text-gray-200">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center mt-6">
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`p-3 rounded-lg shadow-md transition duration-300 ease-in-out ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-600 text-gray-200 hover:bg-gray-500'}`}
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
