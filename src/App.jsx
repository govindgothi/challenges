import React from 'react'
import { useState } from 'react'
import './App.css'
import ChipsInput from './component/chips-input/ChipsInput'



const App = () => {
  return (
    <div className='w-full h-screen bg-gray-100'>
      <ChipsInput />
    </div>
  )
}

export default App
