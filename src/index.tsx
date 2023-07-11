import {createRoot} from 'react-dom/client'
// Axios
import axios from 'axios'
import {Chart, registerables} from 'chart.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// Apps
import './_cloner/assets/sass/plugins.scss'
import './_cloner/assets/sass/style.scss'
import './_cloner/assets/sass/style.react.scss'
import './_cloner/assets/css/tailwind.css'
import './_cloner/assets/css/style.rtl.css'

import {AppRoutes} from './app/routing/AppRoutes'
import {AuthProvider, setupAxios} from './app/modules/auth'
import {ThemeModeProvider} from './_cloner/partials/layout/theme-mode/ThemeModeProvider'

setupAxios(axios)
Chart.register(...registerables)

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
        <ThemeModeProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </ThemeModeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
