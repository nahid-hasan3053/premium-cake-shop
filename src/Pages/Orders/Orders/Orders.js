import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Loading from '../../SharedPages/Loading/Loading';
import OrdersRow from './OrdersRow';

const Orders = () => {

    const {user} = useContext(AuthContext)
    const [ordersItem, setOrdersItems] = useState()

    const {data: orders = [], isLoading, refetch} = useQuery({
        queryKey: ['orders'],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`)
            const data = res.json()
            return data
        }
    })

    const handleDelete = id =>{
        const proceed = window.confirm('are you sure to delete this item')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount >0){
                    alert('item deleted successfully')
                    refetch()
                    // const remaining = ordersItem.filter(odr => odr._id === id)
                    // setOrdersItems(remaining)
                }
            })
        }
    }

     if(isLoading){
        return <Loading></Loading>
     }

    return (
        <div>
            <div className="text-3xl my-8 font-semibold ms-4">Your all orders are here</div>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Order Items:</th>
                    <th>Name, Address</th>
                    <th>Price</th>
                    <th>Delete Order</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                        {
                            orders.map(order => <OrdersRow handleDelete={handleDelete} order={order} key={order._id}></OrdersRow>)
                        }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Orders;