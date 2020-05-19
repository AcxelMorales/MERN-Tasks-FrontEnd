import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const CreateAccount = () => {
  const [accountUser, setAccountUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = accountUser

  const handleChange = evt => {
    setAccountUser({
      ...accountUser,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una cuenta</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              autoComplete="off"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@gmail.com"
              autoComplete="off"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="*********************"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password2">Repetir password</label>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="*********************"
              value={password2}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarse"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">
          Login
        </Link>
      </div>
    </div>
  )
}

export default CreateAccount
