import Section from 'components/Section'
import React from 'react'

function Home() {
  const items =[
    {
      id:1,
      title:"Ortamlarda Satılacak Bilgi",
      description:"Ortamlarda Satılacak Bilgi",
      image:"https://i.scdn.co/image/ab67656300005f1f70c6a230165c8127208b0841",
      type:"podcast"

    },
    {
      id:2,
      title:"Ortamlarda Satılacak Bilgi",
      description:"Ortamlarda Satılacak Bilgi",
      image:"https://i.scdn.co/image/ab6765630000ba8a95b865ec21506d852ad3bba8",
      type:"artist"

    },
    {
      id:3,
      title:"Ortamlarda Satılacak Bilgi",
      description:"Ortamlarda Satılacak Bilgi",
      image:"https://i.scdn.co/image/ab6765630000ba8a4d61c7339c440798bf1c095f",
      type:"album"

    },
    {
      id:4,
      title:"Piano Study",
      description:"Music to help you concentrate during your homework.",
      image:"https://i.scdn.co/image/ab67706f000000039cf07006203e941cb469c681",
      type:"artist"

    },
    {
      id:5,
      title:"Ortamlarda Satılacak Bilgi",
      description:"Ortamlarda Satılacak Bilgi",
      image:"https://i.scdn.co/image/ab6765630000ba8a004c6808daf9b88cf4a67661",
      type:"album"

    }
  ]
  return (
    <div className='grid gap-y-8'> 
      <Section title="Recently played" more="/djjsdf" items={items}/> 
      <Section title="Shows to try" more="/djjsdf" items={items}/>
      <Section title="Made for Ayşe İlkay" more="/djjsdf" items={items}/>
 
      </div>
      
  )
}

export default Home