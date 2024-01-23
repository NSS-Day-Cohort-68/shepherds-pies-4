import React from "react";
import { useState } from "react";

export const OrderFilterBar = () => {
  return (
    <div>
      <select className="btn btn-primary brn-dropwdown">
        Filter by...
        <option>Newest First...</option>
        <option>Oldest First...</option>
      </select>
    </div>
  );
};

// const [data, setData] = useState([...]); // Your data array
// const [sortBy, setSortBy] = useState('oldest'); // Initial sort order

//   const handleSortChange = (value) => {
//     setSortBy(value);
//     // Sort the data based on the selected value
//     const sortedData = value === 'oldest'
//       ? [...data].sort((a, b) => a.date - b.date)
//       : [...data].sort((a, b) => b.date - a.date);

//     setData(sortedData);
//   };

//   return (
//     <div>
//       <label>Sort By:</label>
//       <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
//         <option value="oldest">Oldest to Newest</option>
//         <option value="newest">Newest to Oldest</option>
//       </select>

//       {/* Render your data here */}
//       {data.map(item => (
//         <div key={item.id}>
//           {/* Render your item content */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourComponent;
