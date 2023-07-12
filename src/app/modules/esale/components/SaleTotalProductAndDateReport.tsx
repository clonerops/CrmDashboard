import  {useEffect, useState} from 'react'
import {Card6} from '../../../../_cloner/partials/content/cards/Card6'
import RadioGroupSaleType from './RadioGroupSaleType'
import ChartSaleReport2 from '../../../../_cloner/partials/widgets/charts/ChartSaleReport2'
import {useGetSaleByProductPriorityAndSaleDetailReport} from '../_core/_hooks'
import ChartSaleProductAndDate from '../../../../_cloner/partials/widgets/charts/ChartSaleProductAndDateReport'
import { ChartsWidget1 } from '../../../../_cloner/partials/widgets'

const SaleTotalProductAndDateReport = () => {
  const [radioSelect, setRadioSelect] = useState(-1)


  const {mutate: saleReport, data: saleReportData, isLoading, isError} = useGetSaleByProductPriorityAndSaleDetailReport()

  useEffect(() => {
    saleReport(-1)
  }, [])


  const onChangeRadioSelect = (event: any) => {
    setRadioSelect(event.target.value)
    saleReport(event.target.value)
  }

  return (
    <Card6 image='' title='گزارش آماری فروش اولویت تحویل و منتخبین'>
      <div className='flex flex-col'>
        <RadioGroupSaleType onChange={onChangeRadioSelect} />
        <div>
          <ChartSaleProductAndDate data={saleReportData} isLoading={isLoading} isError={isError} />
        </div>
      </div>
    </Card6>
  )
}

export default SaleTotalProductAndDateReport
