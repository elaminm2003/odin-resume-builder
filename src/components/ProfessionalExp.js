import React, {useState} from 'react'
// import {useNavigate} from 'react-router-dom';
import {v1 as uuid} from "uuid"
import Experience from './Experience'

export default function ProfessionalExp() {
   const [addClicked, setAddClicked] = useState(false)
   const [companyName, setCompanyName] = useState()
   const [from, setFrom] = useState()
   const [to, setTo] = useState()

   const [experiences, setExperiences] = useState([])
   const [key, setKey] = useState()
   
   const addExperince = (e) => {
    //    console.log('hi')
    //    console.log(companyName,from,to)
        e.preventDefault()
        setKey(experiences.length)
        const data = {key, companyName, from, to}
        setExperiences((prevExperinces) => [...prevExperinces, data] )
        setAddClicked(!addClicked)
   }
  
    if (addClicked){
        return (
            <div className='container'>
                {<Experience experiences={experiences}/>}
                <form onSubmit={addExperince} >
                    <div className='input'>
                        <input id="companyName" placeholder='Company Name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} required></input>
                        <input placeholder='From' type="date" value={from} onChange={(e) => setFrom(e.target.value)} required></input>
                        <input placeholder='To' type="date" value={to} onChange={(e) => setTo(e.target.value)} required></input>
                        
                    </div>
                    <button type="submit" >Submit</button>  
                </form>
                
            </div>
            )
    }else{
        return(
            <div className='container'>
                {<Experience experiences={experiences}/>}
                <button onClick={(e) => {setAddClicked(!addClicked)}}>Add-Experince</button>
                
            </div>
            
        )
        
    }
    
}
