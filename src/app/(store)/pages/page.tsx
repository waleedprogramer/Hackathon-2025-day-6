import React from 'react'
import FilterSection from "../filter/page";
import ContactForm from '../../components/Form';
import Demoside from '../../components/Demoside';

function Demo() {
  return (
    <>
       <FilterSection
        textTitle="Hecto Demo"
        textNavigation="Home . Pages ."
        pageName="Hecto Demo"
        className="hidden"
      />
      <div className='px-6 mt-10'>
      <h1 className='font-bold text-4xl'>Hekto Demo</h1>
      <p className='text-sm'>Cart/ Information/ Shipping/ Payment</p>

      </div>
     <div className='flex flex-col lg:flex-row items-center gap-4 p-5'>
     <ContactForm/>
     <Demoside/>
     </div>
     
    </>
  )
}

export default Demo
