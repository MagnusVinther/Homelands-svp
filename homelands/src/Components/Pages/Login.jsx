import React from 'react'
import { Layout } from '../App/Layout/Layout'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useAuth } from '../App/Auth/Auth'

export const Login = () => {
  const { register, handleSubmit, formState: { errors }} = useForm()
  const { loginData, setLoginData } = useAuth()
  const sendLoginRequest = async data => {
    const formData = new FormData();
    formData.append("username", data.username)
    formData.append("password", data.password)
    const result = await axios.post('https://api.mediehuset.net/token', formData)
    handleSessionData(result.data);
  }

    const handleSessionData = data => {
      if(data) {
        sessionStorage.setItem('token', JSON.stringify(data));
        setLoginData(data)
      }
    }

    const logOut = () => {
      sessionStorage.removeItem('token')
      setLoginData('')
    }

    return (
      <Layout title="Login" description="Loginside">
        {/* Laver en ternary operator som holder øje med om man er logget ind. */}
        {!loginData && !loginData.username ? (
          // loginform
          <form onSubmit={handleSubmit(sendLoginRequest)}>
            <div>
                <label htmlFor="username">Brugernavn: </label>
                <input type="text" id="username" placeholder="Indtast Brugernavn"
                {...register("username", { required: true})} />
                {errors.username && (
                  <span>Du skal indtaste dit brugernavn</span>
                )}
            </div>
            <div>
                <label htmlFor="password">Adgangskode: </label>
                <input type="password" id="password" placeholder="Indtast Adgangskode"
                {...register("password", { required: true})} />
                {errors.password && (
                  <span>Du skal indtaste din adgangskode!</span>
                )}
            </div>
            <div>
              <button>Send</button>
            </div>

          </form>

        ) : (
          //viser dette hvis man er logget ind.
            <div>
              <p>
                Du er logget ind som {loginData.username}
              </p>
              <button onClick={logOut}>Log ud</button>
            </div>
        )}
      </Layout>
    )
  }

