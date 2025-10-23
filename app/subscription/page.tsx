import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Subscription = () => {
  return (
    <div className='flex justify-between gap-4 p-4'>
      <PricingTable/>
    </div>
  )
}

export default Subscription