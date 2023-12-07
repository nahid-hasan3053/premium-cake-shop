import React from 'react';

const OrdersRow = ({order, handleDelete}) => {

    const {product_name, customer, email, address, phone, _id} = order

    return (
        <tr>
            <td>
            <div className="flex items-center gap-3">
                <div>
                    <div className="font-bold">{product_name}</div>
                    <div className="text-sm opacity-50">{customer}</div>
                </div>
            </div>
            </td>
            <td>
                {email}
                <br/>
                <span className="badge badge-ghost badge-sm">{address}</span>
            </td>
            <td>{phone}</td>
            <th>
            <button onClick={()=> handleDelete(_id)} className='btn'>X</button>
            </th>
        </tr>
    );
};

export default OrdersRow;