import React , {useState} from 'react'
import Bio from './Bio'
import Orders from './Orders'
import Menu from './Menu'

export default function Dashboard() {
const navlinks = [
    {
        name: "restaraunt bio",
        icon: "fa fa-home",
        component: <Bio/>
    },
    {
        name: "Food Menu",
        icon: "fa fa-hamburger",
        component: <Menu/>
    },
    {
        name: "Food Orders",
        icon: "fa fa-file-invoice-dollar",
        component: <Orders/>
    }
]
const [main, setMain] = useState(<Bio/>)
  return (
   <>
   <aside>
    <ul>
        {navlinks.map((item, index)=> {
           return <li style={{listStyle: "none", backgroundColor:"seagreen", padding: "5px"}} key={index} onClick={()=>{setMain(item.component)}}>
                <i className= {item.icon}/>
                <span>{item.name}</span>
            </li>
        })}
    </ul>
   </aside>
   {main}
   </> 
)
}
