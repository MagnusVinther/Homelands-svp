import React from 'react'
import { useEffect } from 'react'

export const Layout = props => {

    useEffect(() => {
        document.title = props.title

        if(props.description) {
            document.querySelector('meta[name="description"]')
            .setAttribute('content', props.description)
        }
    }, [props.title, props.desription])

  return (
    <>
        <h1>{props.title}</h1>
        <section>{props.children}</section>
    </>
  )
}
