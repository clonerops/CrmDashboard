import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {LayoutProvider, LayoutSplashScreen} from '../_cloner/layout/core'
import {MasterInit} from '../_cloner/layout/MasterInit'
import {AuthInit} from './modules/auth'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
        <LayoutProvider>
          <AuthInit>
            <Outlet />
            <MasterInit />
          </AuthInit>
        </LayoutProvider>
    </Suspense>
  )
}

export {App}
