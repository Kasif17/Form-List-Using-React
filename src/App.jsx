import { useState, useEffect, useRef } from 'react';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const formRef = useRef(null);

  const handleCreateUserClick = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      handleCloseForm();
    }
  };

  useEffect(() => {
    if (isFormVisible) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isFormVisible]);

  return (
    <div>
      <Table onCreateUserClick={handleCreateUserClick} />
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={formRef}
            className="bg-white p-8 rounded shadow-lg w-full max-w-5xl h-full max-h-screen overflow-auto mx-12 my-12"
          >
            <Form onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

// import { useState, useEffect, useRef } from 'react';
// import Table from './components/Table';
// import Form from './components/Form';

// function App() {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const formRef = useRef(null);

//   const handleCreateUserClick = () => {
//     setIsFormVisible(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormVisible(false);
//   };

//   const handleClickOutside = (event) => {
//     if (formRef.current && !formRef.current.contains(event.target)) {
//       handleCloseForm();
//     }
//   };

//   useEffect(() => {
//     if (isFormVisible) {
//       document.addEventListener('mousedown', handleClickOutside);
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }
//   }, [isFormVisible]);

//   return (
//     <div>
//       <Table onCreateUserClick={handleCreateUserClick} />
//       {isFormVisible && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//           <div
//             ref={formRef}
//             className="bg-white p-8 rounded shadow-lg w-1/2"
//           >
//             <Form onClose={handleCloseForm} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;



