import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Layout } from '../../App/Layout/Layout';

export const HouseList = () => {
    const [ houseList, setHouseList] = useState([]);

    useEffect(() => {
        const getHouseList = async () => {
            const result = await axios.get('https://api.mediehuset.net/homelands/homes')
            console.log(result.items);
        }
        getHouseList()
    })

  return (
    <Layout title="Boliger til salg" description="her kan du finde boliger">
      
    </Layout>
  )
}
