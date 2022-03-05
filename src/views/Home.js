import songs from 'components/data/songs'
import Section from 'components/Section'
import React from 'react'

function Home() {
  
  return (
    <div className='grid gap-y-8'> 
      <Section title="Recently played" more="/djjsdf" items={songs}/> 
      <Section title="Shows to try" more="/djjsdf" items={songs}/>
      <Section title="Made for Ayşe İlkay" more="/djjsdf" items={songs}/>
 
      </div>
      
  )
}

export default Home