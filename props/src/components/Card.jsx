import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="child">
        <img src={props.img} alt="profile picture" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, unde.</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
