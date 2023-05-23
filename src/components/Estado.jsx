import React, { useState } from 'react'

const Estado = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div>
        {counter}
        {console.log("Me pinto")}
        <button onClick={() => setCounter(counter + 1)}>Añadir</button>
        <button onClick={() => setCounter(counter - 1)}>Añadir</button>

    </div>
  )
}

export default Estado