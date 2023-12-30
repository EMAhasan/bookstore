import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LoginBtn = () => {
  return (
    <Link href="/login">
    <Button size="sm" variant="default">
        Login
    </Button>
  </Link>
  )
}

export default LoginBtn