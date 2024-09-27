import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData()
  console.log(data);
  
  return (
    <div className='bg-gray-500 text-center m-4 p-4 text-white text-3xl'>
        GitHub Followers: {data.followers}
        <img src={data.avatar_url} alt='Git Avatar URL' width={300}/>
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    let res = await fetch('https://api.github.com/users/Omkar-t06')
    return await res.json();
}