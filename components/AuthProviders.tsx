'use client'

import {useState, useEffect} from 'react'
import { getProviders, signIn } from 'next-auth/react'

type Providers = {
   
}

const AuthProviders = () => {
  const [providers, setProviders] = useState<Providers | null>(null)
  return (
    <div>AuthProviders</div>
  )
}

export default AuthProviders