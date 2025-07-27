// For useRef Hook practice
import { useState, useEffect, useRef } from 'react'

const Dummy = () => {
 const [x, setX] = useState(0)
  const i = useRef(null) ;
  // let i = {
  //   current: null
  // }
  useEffect(() => {
    i.current = setInterval(() => {
      console.log('hi there', (Math.floor(Math.random()*10))+1, i)
    }, 3000)
  }, [])
  return (
    <div>Cart
    <div>
      <button onClick={() => setX(x+1)}>Increment X</button>
      <span>X = {x}</span>
    </div>
    <br/>
    <div>
      <button onClick={() => clearInterval(i.current)}>Stop Interval</button>
    </div>
    </div>
  )
}

export default Dummy

/**
 * When let i is used it looses reference of serInterval after updating the state x (increment btn);
 * hence interval not stopped on click of Stop Interval Btn
 * 
 * useRef Hook lets you reference a value that’s not needed for rendering. useRef creates object as {current : initialValue}
 * When const i created with useRef it does not loose the reference of setInterval on re-rendering i.e. state updation on increment btn.
 * hence interval stopped on click of Stop Interval Btn
 */