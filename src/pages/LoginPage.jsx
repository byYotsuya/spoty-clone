import React from 'react'
import { useRecoilValue } from 'recoil'
import { tokenState } from '../recoil/atoms'

import { useLocation, Navigate } from 'react-router-dom'

import Login from '../components/Login'
export default function LoginPage () {
  const token = useRecoilValue(tokenState)
  const location = useLocation()
  if (token) return <Navigate to='/' state={{ from: location }} replace />
  return (
    <>
      <Login />

    </>
  )
}
