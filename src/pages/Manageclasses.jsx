import React, { useEffect, useState } from 'react';

const Manageclasses = () => {
    const [classes, setClasses] = useState([]);
    const upadtedUser = {status};

    useEffect(() => {
      // Fetch the classes from the server
      fetch('http://localhost:5000/newins')
        .then((response) => response.json())
        .then((data) => setClasses(data))
        .catch((error) => console.log('Error fetching classes:', error));
    }, []);
  
    const handleApproval = async (_id) => {
      try {
        // Send a PUT request to the server to update the class status to "approved"
        const response = await fetch(`http://localhost:5000/newins/${_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(upadtedUser),
        });
  
        if (response.ok) {
          // Class approved successfully
          console.log('Class approved!');
          // You can perform additional actions here, such as updating the UI
        } else {
          // Error occurred while approving the class
          console.log('Error approving class:', response.status);
        }
      } catch (error) {
        console.log('Error approving class:', error.message);
      }
    };
  
    const handleDenial = async (_id) => {
      try {
        // Send a DELETE request to the server to delete the class
        const response = await fetch(`http://localhost:5000/newins/${_id}`, {
          method: 'DELETE',
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remaining = classes.filter(user => user._id !== _id);
                setClasses(remaining); 
            }
        })
  
        if (response.ok) {
          // Class denied and deleted successfully
          console.log('Class denied!');
          // You can perform additional actions here, such as updating the UI
        } else {
          // Error occurred while denying the class
          console.log('Error denying class:', response.status);
        }
      } catch (error) {
        console.log('Error denying class:', error.message);
      }
      
    };
  
    return (
      <div>
        <h1>Admin Page</h1>
        {classes.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Available Seats</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem) => (
                <tr key={classItem._id}>
                  <td>{classItem.className}</td>
                  <td>{classItem.name}</td>
                  <td>{classItem.email}</td>
                  <td>{classItem.available_seats}</td>
                  <td>{classItem.price}</td>
                  <td>
                    <button onClick={() => handleApproval(classItem._id)}>
                      Approve
                    </button>
                    <button onClick={() => handleDenial(classItem._id)}>
                      Deny
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No classes to display.</p>
        )}
      </div>
    );
  }
export default Manageclasses;