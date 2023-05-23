import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [state1, setState1] = useState(0)
    const [state2, setState2] = useState(0)


useEffect(() => {
    console.log('Me pinto');
},[state1])

  return (
    <div>
        {state1}
        <button onClick={() => setState1(state1 + 1)}>Añadir</button>
        <button onClick={() => setState1(state1 - 1)}>Añadir</button>

        {state2}
        <button onClick={() => setState2(state2 + 1)}>Añadir</button>
        <button onClick={() => setState2(state2 - 1)}>Añadir</button>
    
    </div>
  )
}

export default Effect