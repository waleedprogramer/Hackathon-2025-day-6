import React from 'react'

interface type{
  text:string
}

function Button({text}:type) {
  return (
    <div>
       <button className="mt-8 px-6 py-3 lg:w-[163px] lg:h-[50px]  bg-pink-500 text-white font-semibold hover:bg-pink-600 text-1 transition ease duration-300">
             {text}
            </button>
    </div>
  )
}

export default Button
