import React from 'react'
import { useState } from 'react'
import './App.css'
import ChipsInput from './component/chips-input/ChipsInput'
import Counter from './component/counter/Counter'
import LeapYear from './component/leap-year/LeapYear'



const App = () => {
  return (
    <div className='w-full h-screen bg-gray-100'>
      {/* <ChipsInput /> */}
      {/* <Counter ></Counter> */}
      <LeapYear></LeapYear>
    </div>
  )
}

export default App
