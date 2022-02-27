import categories from 'components/data/categories'
import Title from 'components/Title'
import React from 'react'

function Category ({category}){
  return (
   
    
    <div style={{'background': category.color}}
    className='rounded-md before:pt-[100%] before:block relative'>
     <div className='absolute inset-0 overflow-hidden'>
          <h3 className='p-4 text-2xl tracking-tighter font-semibold'> {category.title}</h3>
          <img className='shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0 ' src={category.cover}></img>
     </div>
    </div>
  )
}

function Search() {
  return (
    <>
   <section>
   <Title title={"En çok dinlediğin Türler"}/>
   </section>
    
    <section>
    <Title title={"Hepsine göz at"}/>
    <div className='grid grid-cols-5 gap-6'>
      {categories.map(category =>
        <Category category={category} key={category.id}/>)}
    </div>
    </section>
    </>
    
  )
}

export default Search