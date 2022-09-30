import React from 'react'
import ExperiencesPrint from './ExperiencesPrint'

export default function Overview( {experiences} ) {
    if (experiences!=[]){
    return (
    experiences.map(experience => {
        return <ExperiencesPrint experience={experience} />
    })
  )
}
}
