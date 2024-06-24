import { data } from 'autoprefixer'
import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'
import { useLoaderData, useRouteLoaderData } from 'react-router-dom'

function Github(){
    const data =useLoaderData()
    // const [data ,setData] =useState([])
    // useEffect( () =>{
    //   fetch('https://api.github.com/users/krishnanandtutu')
    // .then(response => response.json())
    // .then(data =>{
    //     console.log(data);
    //     setData(data);
    // })
    // },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
        <img className='text-center' src={data.avatar_url}></img>
        </div>
    )
}

export default Github

export const githubInfoLoader =async()=>{
    const response = await fetch('https://api.github.com/users/krishnanandtutu')
    return response.json()
}