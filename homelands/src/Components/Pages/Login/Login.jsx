import React from 'react'
import { Layout } from '../../App/Layout/Layout'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useAuth } from '../../App/Auth/Auth'
import { Adminpage } from './Adminpage'

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
      <div className="loginContainer">

        {/* Laver en ternary operator som holder øje med om man er logget ind. */}
        {!loginData && !loginData.username ? (
          // loginform

      <Layout title="Login" description="Loginside">
          <>
          <p>Indtast dit brugernavn og din adgangskode for at logge ind</p>

          <form onSubmit={handleSubmit(sendLoginRequest)}>

            <div>
                <input type="text" id="username" placeholder="Brugernavn"
                {...register("username", { required: true})} />
                {errors.username && (
                  <span>Du skal indtaste dit brugernavn</span>
                )}
            </div>

            <div>
                <input type="password" id="password" placeholder="Adgangskode"
                {...register("password", { required: true})} />
                {errors.password && (
                  <span>Du skal indtaste din adgangskode!</span>
                )}
            </div>

            <div>
              <button>Send</button>
            </div>

          </form>
        </>
      </Layout>

        ) : (
          //viser dette hvis man er logget ind.
            <div>
              <Layout title="Administration" description="en side til admin">
                <Adminpage />
                  <hr />
                  <p><i>du er logget ind som {loginData.username}</i></p>
                  <button className="btnStyle" onClick={logOut}>Log ud</button>
              </Layout>
            </div>
        )}

      </div>
    )
  }

