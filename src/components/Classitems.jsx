
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const Classitems = ({item}) => {
    const {classname, image , instructor ,available_seat, price , popularity , total_students ,_id} = item;
    const {user} = useAuth();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
      console.log(item);
      if(user && user.email){
          const cartItem = {menuItemId: _id, classname, image, price, instructor,   email: user.email}
          fetch('http://localhost:5000/carts', {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(cartItem)
          })
          .then(res => res.json())
          .then(data => {
              if(data.insertedId){
                  refetch(); // refetch cart to update the number of items in the cart
                  Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Class added on dashboard',
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
          })
      }
      else{
          Swal.fire({
              title: 'Please login to order the food',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now!'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state: {from: location}})
              }
            })
      }
  }
    return (
        <div className="font-mono card w-96 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{classname}</h2>
    <p>Instructor : {instructor}</p>
    <p>Price :$ {price}</p>
    <p>Popularity :{popularity}</p>
    <p>Available Seat :  {available_seat}</p>
    <p>Students enrolled:  {total_students}</p>
    <div className="justify-end card-actions">
      <button onClick={() => handleAddToCart(item)} className="text-white btn bg-fuchsia-700">Add course</button>
    </div>
  </div>
</div>
    );
};

export default Classitems;