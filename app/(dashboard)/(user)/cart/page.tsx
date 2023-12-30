'use client'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '@/app/store'
import { decrement, increment } from '@/features/counter/counterSlice'
import { close, open } from '@/features/confetti/confettiSlice'



type Props = {}

const CartPage = (props: Props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const confetti = useSelector((state: RootState) => state.confetti.isOpen)
  const dispatch = useDispatch()

  const decrementCount=()=>{
    dispatch(decrement());
    dispatch(open())

  }

  return (
<div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => decrementCount()}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default CartPage