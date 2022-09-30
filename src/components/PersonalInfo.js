import React, {useState} from 'react'

export default function PersonalInfo() {
    const [toggleEdit, setToggleEdit] = useState(true)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    
    let handleSubmit = (e) => {
        e.preventDefault()
        setToggleEdit(!toggleEdit)
    }

    if (toggleEdit){
        return (
            <form className='container' onSubmit={handleSubmit}>
                    <div className="input">
                        <input id="firstName" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required></input>
                        <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required></input>
                        <input placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <button type="submit">Submit</button> 
            </form>
              
        )
            
    }else{
        return (
            <>
                <div className="container">
                    <div className="flex-start">
                        <label>First Name: {firstName}</label>
                        <label>Last Name: {lastName}</label>
                        <label>E-mail: {email}</label>
                    </div>
                
                    <div className='flex-end'>
                        <button onClick={(e)=>{setToggleEdit(!toggleEdit)}}>Edit</button>
                    </div>
                </div>
            </>
        )
        
    }
    
      
}
