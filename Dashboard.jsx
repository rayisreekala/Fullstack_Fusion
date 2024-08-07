// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // const Dashboard = () => {
// //   const [data, setData] = useState([]);
// //   const [editingIndex, setEditingIndex] = useState(null);
// //   const [editCommentValue, setEditCommentValue] = useState('');
// //   const [editDemoUrlValue, setEditDemoUrlValue] = useState('');
// //   const [editingDemoUrlIndex, setEditingDemoUrlIndex] = useState(null);

// //   // Handle focus for comments
// //   const handleCommentFocus = (index, value) => {
// //     setEditingIndex(index);
// //     setEditCommentValue(value); // Set the value for editing comments
// //   };

// //   // Handle blur for comments
// //   const handleCommentBlur = () => {
// //     const updatedData = data.map((item, index) => 
// //       index === editingIndex ? { ...item, comments: editCommentValue } : item
// //     );
// //     setData(updatedData);
// //     setEditingIndex(null);
// //   };

// //   // Handle change for comment input
// //   const handleCommentChange = (e) => {
// //     setEditCommentValue(e.target.value);
// //   };

// //   // Handle focus for demo URLs
// //   const handleDemoUrlFocus = (index, value) => {
// //     setEditingDemoUrlIndex(index);
// //     setEditDemoUrlValue(value); // Set the value for editing demo URLs
// //   };

// //   // Handle blur for demo URLs
// //   const handleDemoUrlBlur = () => {
// //     const updatedData = data.map((item, index) => 
// //       index === editingDemoUrlIndex ? { ...item, demoUrls: editDemoUrlValue } : item
// //     );
// //     setData(updatedData);
// //     setEditingDemoUrlIndex(null);
// //   };

// //   // Handle change for demo URL input
// //   const handleDemoUrlChange = (e) => {
// //     setEditDemoUrlValue(e.target.value);
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:9000/get');
// //         setData(response.data);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-20">
// //       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
// //         <thead className="text-xs text-white uppercase bg-gray-800 dark:bg-gray-700 dark:text-gray-400">
// //           <tr>
// //             <th scope="col" className="px-6 py-3">EmplId</th>
// //             <th scope="col" className="px-6 py-3">Username</th>
// //             <th scope="col" className="px-6 py-3">Type</th>
// //             <th scope="col" className="px-6 py-3">Title</th>
// //             <th scope="col" className="px-6 py-3">Description</th>
// //             <th scope="col" className="px-6 py-3">Urls</th>
// //             <th scope="col" className="px-6 py-3">Demo URL</th>
// //             <th scope='col' className='px-6 py-3'>Status</th>
// //             <th scope="col" className="px-6 py-3">Comments</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.map((item, index) => (
// //             <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
// //               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
// //                 {item.empId}
// //               </th>
// //               <td className="px-6 py-4">{item.userName}</td>
// //               <td className="px-6 py-4">{item.typeId === 1 ? "Blog" : "Video"}</td>
// //               <td className="px-6 py-4">{item.title}</td>
// //               <td className="px-6 py-4">{item.description}</td>
// //               <td className="px-6 py-4">{item.doc_pptUrls}</td>
// //               <td 
// //                 className="px-6 py-4"
// //                 tabIndex={0} // Make the td element focusable
// //                 onFocus={() => handleDemoUrlFocus(index, item.demoUrls)}
// //                 onBlur={handleDemoUrlBlur}
// //                 style={{
// //                   borderRadius: editingDemoUrlIndex === index ? '5px' : '0px',
// //                   borderColor:editingDemoUrlIndex === index ? 'black' : 'transparent',
                
// //                 }}
// //               >
// //                 {editingDemoUrlIndex === index ? (
// //                   <textarea
// //                     rows={3}
// //                     type="text"
// //                     value={editDemoUrlValue}http://localhost:9000/get
// //                     onChange={handleDemoUrlChange}
// //                     onBlur={handleDemoUrlBlur}
// //                     autoFocus
// //                     className="w-full px-2 py-1 border rounded outline:black"
// //                   />
// //                 ) : (
// //                   item.demoUrls
// //                 )}
// //               </td>
// //               <td className='px-6 py-4'>{item.status}</td>
// //               <td 
// //                 className="px-6 py-4"
// //                 tabIndex={0} // Make the td element focusable
// //                 onFocus={() => handleCommentFocus(index, item.comments)}
// //                 onBlur={handleCommentBlur}
// //                 style={{ 
// //                   borderRadius: editingIndex === index ? '5px' : '0px',
                  
// //                 }}
// //               >
// //                 {editingIndex === index ? (
// //                   <textarea 
// //                     rows={3}
                  
// //                     value={editCommentValue}
// //                     onChange={handleCommentChange}
// //                     onBlur={handleCommentBlur}
// //                     autoFocus
// //                     className="w-full px-2 py-1 border-gray-500 rounded"
// //                   />
// //                 ) : (
// //                   item.comments
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Dashboard;
