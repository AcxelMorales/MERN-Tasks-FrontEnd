import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const handleChange = evt => {
    setUser({
      ...user,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={'/create-account'} className="enlace-cuenta">
          Obtener cuenta
        </Link>
      </div>
    </div>
  )
}

export default Login
