import React, {useState} from 'react'

export default function Bio({ savedBio,callBackfn}) {
    const [formData, setFormData] = useState({
        restaurantName : "",
        restaurantLocation: "",
        workingHours: ""
    })
    const bio = formData;
    function handleSubmit(){
        alert('Submitted successfully');
        callBackfn(formData);
    }
   
  return (
    <>
        <form onSubmit= {(e)=>{e.preventDefault(); return handleSubmit()}}>
        <div id="bio" className='form-group'>
            <label>Restaurant Name</label>
            <input type="text" placeholder="Enter restaurant's name here" value={formData.restaurantName} onChange={(e)=> setFormData({...formData, restaurantName: e.target.value})}/>
            <label>Restaurant Location</label>
            <input type="text" placeholder="Enter restaurant's location here" value={formData.restaurantLocation} onChange={(e)=> setFormData({...formData, restaurantLocation: e.target.value})}/>
            <label>Working Hours</label>
            <input type="text" placeholder="e.g Mon-fri, 6am - 6pm" value={formData.workingHours} onChange={(e)=> setFormData({...formData, workingHours: e.target.value})}/>            
        </div>
        .<div class="form-group">
          <input type="reset"/>
          <input type="submit"/>
        </div>
    </form>
    <div id="kibandaskiBio">
        <h4>Restaurant's Name : <span> {bio.restaurantName}</span></h4>
        <h4>Location Address: <span> {bio.restaurantLocation}</span></h4>
        <h4>Working Hours <span>{bio.workingHours}</span></h4>
    </div>
    </>
    
  )
}
