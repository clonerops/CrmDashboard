import {Card6} from '../../../_cloner/partials/content/cards/Card6'
import {Dropdown1} from '../../../_cloner/partials'
import SaleTotalTypeReport from './components/SaleTotalTypeReport'

const DashboardEsale = () => {
  return (
    <>
      <div className='md:grid md:grid-cols-1 md:gap-4'>
        <div className=''>
          <SaleTotalTypeReport />
        </div>
        <Card6 image='' title='گزارش آماری به تفکیک محصول'>
          {/* <SaleTotalTypeReport /> */}
        </Card6>
      </div>
    </>
  )
}

export default DashboardEsale
