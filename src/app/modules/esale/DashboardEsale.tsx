import { Dropdown1 } from '../../../_cloner/partials'
import {Card6} from '../../../_cloner/partials/content/cards/Card6'
import { ChartSaleReport } from '../../../_cloner/partials/widgets/charts/ChartSaleReport'
import { useGetSaleTotalTypes } from './_core/_hooks'

const DashboardEsale = () => {
    const { data: saleTotalTypes } = useGetSaleTotalTypes()



  return (
    <>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        <Card6 image='' title='گزارش آماری فروش اینترنتی'>
          <div className='flex justify-center items-center'>
            <Dropdown1 />
            <ChartSaleReport className='' />
          </div>
        </Card6>
        <Card6 image='' title='گزارش آماری به تفکیک محصول'></Card6>
      </div>
    </>
  )
}

export default DashboardEsale
