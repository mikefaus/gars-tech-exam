
import React from 'react'
import AppRoutes from '../../AppRoutes'
import { Outlet } from 'react-router-dom'

const PageContent = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default PageContent