import React from 'react'

export default function Experience( {experience} ) {
                return (
                    <div>
                        <label>Company Name: {experience.companyName}</label>
                        
                        <label>From: {experience.from}</label>
                        <label>To: {experience.to}</label>
                    </div>
                )  
     }
