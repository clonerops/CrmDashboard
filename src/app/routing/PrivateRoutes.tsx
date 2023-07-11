import {lazy} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_cloner/layout/MasterLayout'
import {MenuTestPage} from '../pages/MenuTestPage'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import DashboardEsale from '../modules/esale/DashboardEsale'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='dashboard-esale' element={<DashboardEsale />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

export {PrivateRoutes}
