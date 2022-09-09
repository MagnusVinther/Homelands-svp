import React from 'react'
import { Layout } from '../../App/Layout/Layout'
import image1 from '../../../Assets/Images/homelandshero.jpg'
import { HouseList } from './HouseList'

export const Home = () => {
  return (
    <div className='homeContainer'>
      <img src={image1} alt="heroimg" className='heroImg' />
      <div className='innerContainer'>
        <Layout title="Forside" description="Forside til HomeLands">

          <HouseList />
          <p>her er min homepage!</p>

        </Layout>
      </div>


    </div>
  )
}
