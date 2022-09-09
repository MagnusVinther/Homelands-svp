import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../App/Layout/Layout'
import axios from 'axios'

export const HouseDetails = () => {
    const { house_id } = useParams()
    const [ houseData, setHouseData ] = useState({})

    useEffect(() => {
        const getHouseData = async () => {
            try {
                const result = await axios.get(`https://api.mediehuset.net/homelands/homes/{{id}}`)

                if(result.data) {
                    setHouseData(result.data.item)
                }
            }

            catch(error) {
                console.log(error)
            }
        }
        getHouseData();
    }, [house_id])

    return (
        <Layout title="Bolig Detaljer">
            {houseData ? (
                <div>
                    <h2>{houseData.address}, {houseData.zipcode}</h2>
                    <p>
                        By: {houseData.city}<br />

                    </p>
                </div>
            ) : null}
        </Layout>
    )
}
