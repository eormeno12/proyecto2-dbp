import { BackButton } from "../../Components/BackButton";
import { LineDivider } from "../../Components/LineDivider";
import { ProfileInfo } from "../../Components/ProfileInfo";
import { OrdersCardList } from "../../Components/OrdersCardList";

import './MyProfile.css';
import { useContext, useEffect, useState } from "react";
import { getOrderById, getUserById } from "../../utils/request";
import { HomeContext } from "../../Context/HomeContext";
import { OrderCard } from "../../Components/OrderCard";

function MyProfile() {
  const {signInUserId} = useContext(HomeContext)
  const [user, setUser] = useState({orders: []});

  useEffect(() => {
    getUserById(signInUserId)
      .then( async (response) => {
        const userComplete = {...response};

        if(userComplete.orders){
          const orders = userComplete.orders.split(',');
          const ordersResponses = []
          
          for(let orderID in orders){
            if(orders[orderID])
              await getOrderById(signInUserId, orders[orderID]).then(order => ordersResponses.push(order))
          }
          
          userComplete.orders = ordersResponses;
        }

        setUser(userComplete);
        console.log(user)
      });
  }, []) 

  return (
    <>
      <BackButton to={'/'}/>
      <div className="profile-container">
        <ProfileInfo name={user.name} dni={user.dni} email={user.email}/>
        <LineDivider />
        <OrdersCardList>
          {user.orders.map(order => 
            <li key={order.id}>
              <OrderCard id={order.id} products={order.products} totalPrice={order.totalPrice} date={order.date}/>
            </li>
          )}
        </OrdersCardList>
      </div>
    </>
  )
}

export { MyProfile }; 