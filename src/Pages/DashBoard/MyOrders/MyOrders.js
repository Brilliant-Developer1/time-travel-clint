import React from 'react';
import useAuth from './../../../hooks/useAuth';
import MyOrdersCard from './MyOrdersCard/MyOrdersCard';


const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = React.useState([])

    React.useEffect( () => {  
        fetch(`https://pure-springs-17814.herokuapp.com/myOrders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data))
    },[user.email])

    
    return (
        <div style={{marginBottom:'350px'}}>
            <h2>My Orders</h2>
            {
                myOrders.map(myOrder => <MyOrdersCard
                  key={myOrder.order} 
                  myOrder={myOrder}
                  setMyOrders={setMyOrders}
                  myOrders={myOrders} 
                    ></MyOrdersCard>)
            }
        </div>
    );
};

export default MyOrders;