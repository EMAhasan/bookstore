
import { RootState } from '@/app/store'
import {  ShoppingCart } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
   
    <div className="relative mr-4 ">
  <div className="top-0 absolute left-5">
    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">{count}</p>
  </div>
  <ShoppingCart/>
</div>

  )
}

export default CartIcon


  