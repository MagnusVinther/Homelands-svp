
import React, { useEffect, useState } from 'react'
import serviceBot from '../../App/Auth/Service';
import { Link } from 'react-router-dom';

export const HouseList = () => {
    const [ data, setData] = useState([])

      useEffect(() => {
        const getFavs = async () => {
          try {
            const result = await serviceBot.getList('homes')
            if(result.data) {
              setData(result.data.items);
              // console.log(result.data.items);
            }
          }
          catch(error) {
            console.log(error)
          }
        } 
        getFavs()
      }, [])

      return (
        <section className="housesContainer">
            {data && data.map((favs, i) => {
              if(i<3) {
                return (
                  <figure key={favs.id}>
                    <Link to={`/boliger/${favs.id}`}>
                      {favs && favs.images.map((items, i) => {
                        if(i<1) {
                          return (
                            <img src={items.filename.medium} alt="#" />
                          )
                        }
                        else {
                          return null
                        }
                      })}

                      <figcaption>
                        <article>
                          <h4>{favs.address}</h4>

                          <span>
                            <p><b>{favs.zipcode} {favs.city}</b></p>
                            <p>{favs.type}</p>
                          </span>

                          <span className="horiSpan">
                            <p>{favs.energy_label_name}</p>
                            <p>{favs.num_rooms} værelser, {favs.floor_space} &#13217;</p>
                            <p><b>{favs.price}</b> DKK</p>
                          </span>
                        </article>
                      </figcaption>
                    </Link>
                  </figure>
                )
              }
              else {
                return null
              }
            })}
        </section>
      )

}
