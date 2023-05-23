import React, { useContext } from 'react'
import MiContexto from '../shared/MiContexto'

const Input2 = () => {
    const  {setName2} = useContext(MiContexto)
  return (
    <div>
        <input onChange={(e) => setName2(e.target.value)} />
    </div>
  )
}

export default Input2