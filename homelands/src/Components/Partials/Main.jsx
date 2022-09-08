import React from 'react'
import { AppRouter } from '../App/Router/Router'

export const Main = props => {
  return (
    <main className='mainContainer'>
        <AppRouter>
            {props.children}
        </AppRouter>
    </main>
  )
}
