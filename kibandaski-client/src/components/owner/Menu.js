import React, {useState} from 'react'

export default function FoodMenu({saveMenu, callBackFn}) {
    const [formData,setFormData] = useState({
        name: "",
        description:"",
        price:null,
    })
    const [menuList, setMenuList] = useState([])
    function addMenuItem(){
        callBackFn(formData)
        setMenuList([...menuList, formData])
        return menuList; 
        
    }
    function DisplayMenu (){
        return (
            <ul>
                {saveMenu.map((item,index) => (<li key="index">item</li>))}
            </ul>
        )
    }
  return (
    <>
    <form>
        <div className="form-group">
            <label>Food Name</label>
            <input type='text' placeholder='eg. Rice & Beef'  value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value})}/>
        </div>
        <div className="form-group">
            <label>Food Description</label>
            <input type='text' placeholder='provide a brief description of the meal' value={formData.description} onChange={(e)=> setFormData({...formData, description: e.target.value})}/>
        </div>
        <div className="form-group">
            <label>Food Price</label>
            <input type="number" placeholder='eg. 100'  value={formData.price} onChange={(e)=> setFormData({...formData, price: e.target.value})}/>
        </div>
        <input type='reset' />
        <input type='submit' onClick={addMenuItem()}/>
    </form>
    <DisplayMenu/>

    </>
   
  )
}
