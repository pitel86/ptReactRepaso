
import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
const Pagina2 = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()

    const result = async(data) => {
        console.log(data)
        const res = await axios('http://localhost:5500/')
    }
  return (
    <div>
        <form onSubmit={handleSubmit(result)}>
            <input type='text' placeholder='name' {...register('name', {
                required: "El nombre no puede estar vacío"
            })}/>
            {errors.name && <p>{errors.name.message}</p>}
            <input type='text' placeholder='firstname' {...register('firstname')}/>
            <input type='text' placeholder='age' {...register('age')}/>
            <input type='text' placeholder='email' {...register('email', {
                pattern: {
                    message: "no cumple el patron",
                    value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
                }
            })}/>
            {errors.email && <p>{errors.email.message}</p>}
            <input type='text' placeholder='phone' {...register('phone')}/>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Pagina2