import React from 'react'

export default function Orders({ordersList}) {
    
  return (
    <div id="orderlist">
        <ul>
         {ordersList.map((item,index) => {
            const [customerName, orderDescription, status] = item;
            return <li> {customerName} has ordered {orderDescription}<span>{status}</span></li>
         })}
        </ul>
    </div>
  )
}
