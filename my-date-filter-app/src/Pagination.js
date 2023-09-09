// import React, { useState } from 'react';

// function Pagination({ items, itemsPerPage }) {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   // Calculate the index range for the current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Get the items to display on the current page
//   const currentItems = items.slice(startIndex, endIndex);

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div>
//       <ul>
//         {currentItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <div>
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>{currentPage}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Pagination;
import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, onPageChange }) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
}

export default Pagination;
