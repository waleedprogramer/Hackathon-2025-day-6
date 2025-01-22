import React from 'react'

interface type{
  text:string
}

function Heading({text}:type) {
  return (
    <>
       <h1 className="text-4xl text-center text-1 font-bold text-indigo-950">
       {text}
      </h1>
    </>
  )
}

export default Heading
