import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-cyan-500 p-4 text-white font-bold m-9 text-2xl'>User: {userid}</div>
  )
}

export default User