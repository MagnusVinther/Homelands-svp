import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
    <div>HouseList</div>
  )
}
