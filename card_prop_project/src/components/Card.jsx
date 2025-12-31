import React from 'react'

const Card = (props) => {
  console.log(props.company)
  return (
    <div>

      <div className="card">
        <img src= {props.img} alt= {props.company} />
        <br />
        <h1>{props.company}</h1>
        <p>{props.role}</p>
        <p><span>Part-time</span> <span>Senior level</span></p>

        <br />
        <br />
        <hr />

        <div className="bottom">
          <p>{props.amount}</p>
          <button>Apply now</button>
        </div>

      </div>

    </div>
  )
}

export default Card
