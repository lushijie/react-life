import React, { useState, useEffect } from 'react'
import Utils from '../../utils'

export default function(props) {
  let [counter, setCounter] = useState(0);
  let [color, setColor] = useState(props.color);

  function handleAddCounter () {
    setCounter(prevState => prevState + 1)
  }

  function handleChangeColor() {
    const color = `c_${Utils.createColor()}`
    setColor(color);
    props.onChange(color);
  }

  useEffect(() => {
    setColor(props.color);
  }, [props.color])

  return <div style={{ border : 'red 1px solid'}}>
    <p><button onClick={handleAddCounter}>addCounter：{counter}</button></p>
    <p><button onClick={handleChangeColor}>changeColor：{color}</button></p>
  </div>
}