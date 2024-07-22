// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// export default function Read() {
//   const [student, setStudent] = useState();
//   const {id} = useParams();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:9001/Read/${id}`)
//       .then((res) => setStudent(res.data))
//       .catch((err) => console.log(err));
//   }, [id]);

//   return (
   
//     <div className="container mt-5">
//       <h2>Student Details</h2>
//       {student && student.map((item) => (
//         <div key={item._id}>
//           <h3>Email: {item.email}</h3>
//           <h3>Username: {item.name}</h3>
//           <h3>Phone Number: {item.phone} </h3>

//           <Link to="/" className="btn btn-primary me-2">
//         Back
//       </Link>

//       <Link to={`/edit/${item._id}`} className="btn btn-success">
//         Edit
//       </Link>
//         </div>
        
//       )
//       )}

      
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Read() {
  const [student, setStudent] = useState(null); // Initialize as null, not an empty array
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9001/Read/${id}`)
      .then((res) => setStudent(res.data)) // Set student as an object, not an array
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5">
      <h2>Student Details:</h2>
      {student && (
        <div>
          <h3>Email: {student.email}</h3>
          <h3>Username: {student.name}</h3>
          <h3>Phone Number: {student.phone} </h3>

          <Link to="/" className="btn btn-primary me-2">
            Back
          </Link>

          <Link to={`/edit/${student._id}`} className="btn btn-success">
            Edit
          </Link>
        </div>
      )}
    </div>
  );
}
