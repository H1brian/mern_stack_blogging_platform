import React from 'react'
import { Button } from 'flowbite-react'

export default function Home() {
  return (
    <div>
    <div className='text-blue-400 text-xl border-b-2'>Home</div>
    <Button className='text-red-600 text-3xl' color={'failure'} pill gradientDuoTone="tealToLime">Click me</Button>
    </div>
  )
}
