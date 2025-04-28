import React from 'react'

const TestimonialCard = (props) => {
  return (
    <div className='Container'>
        <div className='Cards-Container'>
<div className='cards'>
<h1>Customer name: {props.customerName}</h1>
<br />
<br />
<h1>Review text: {props.reviewText}</h1>
</div>
        </div>
        
    </div>
  )
}

export default TestimonialCard