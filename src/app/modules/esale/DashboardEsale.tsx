import SaleTotalTypeReport from './components/SaleTotalTypeReport'
import SaleByProductReport from './components/SaleByProductReport'
import SaleByProductPriorityReport from './components/SaleByProductPriorityReport'
import SaleTotalProductAndDateReport from './components/SaleTotalProductAndDateReport'

const DashboardEsale = () => {
  return (
    <>
      <div className='md:grid md:grid-cols-1 md:gap-4'>
        <div className='mt-2 mb-2 shadow-lg'>
          <SaleTotalTypeReport />
        </div>
        <div className='mt-2 mb-2 shadow-lg'>
          <SaleByProductReport />
        </div>
        <div className='mt-2 mb-2 shadow-lg'>
          <SaleByProductPriorityReport />
        </div>
        <div className='mt-2 mb-2 shadow-lg'>
          <SaleTotalProductAndDateReport />
        </div>
      </div>
    </>
  )
}

export default DashboardEsale
