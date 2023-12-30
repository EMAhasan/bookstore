'use client'
import React from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { close } from '@/features/confetti/confettiSlice'
type Props = {}

const ConfettiProvider = (props: Props) => {
    const confetti = useSelector((state: RootState) => state.confetti.isOpen)
    const dispatch = useDispatch()
    const { width, height } = useWindowSize()
    if(!confetti) return null
    return (
      <Confetti
      className='pointer-events-none z-[100]'
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={400}
        onConfettiComplete={()=>dispatch(close())}
        
      />
    )
}

export default ConfettiProvider