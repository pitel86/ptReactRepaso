import React, { useContext } from 'react'
import MiContexto from '../shared/MiContexto'
import Input from '../components/Input'

const Pagina1 = () => {
    const {name} = useContext(MiContexto)
  return (
    <div>
        <Input />
        {name}
    </div>
  )
}

export default Pagina1