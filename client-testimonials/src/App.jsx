import React from 'react'
import './App.css'
import TestimonialCrd from './components/TestimonialCard'
function App() {


  return (
    <div className='Aman'>
      <TestimonialCrd customerName="Emily Watson" reviewText="This service was amazing! Highly recommended" />
      <TestimonialCrd customerName=" Watson" reviewText="This service was amazing! Highly recommended" />
    </div>
  )
}

export default App
