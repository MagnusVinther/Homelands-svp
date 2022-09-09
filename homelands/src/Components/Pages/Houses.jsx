import React from 'react'
import { Layout } from '../App/Layout/Layout'
import { HouseList } from './Homepage/HouseList'


export const Houses = () => {
  return (
    <div>
        <Layout title="Boliger" description="Boliger til salg">

          <p>Her er min boligside</p>
          <HouseList />

        </Layout>
    </div>
  )
}
