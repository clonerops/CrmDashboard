import {useEffect, useState} from 'react'
import {Card6} from '../../../../_cloner/partials/content/cards/Card6'
import ProfessionalSelect from './ProfessionalSelect'
import {
  dropdownSaleTotalType,
  dropdownSaleTotalTypeDetails,
  dropdownSaleTotalWinnerType,
  dropdownTotalDate,
} from '../helpers/dropdownSaleTotalType'
import RadioGroupSaleType from './RadioGroupSaleType'
import {
  useGetDeliverDates,
  useGetSaleByProductPriorityReport,
  useGetSaleByProductReport,
  useGetSaleTotalTypeDetails,
  useGetSaleTotalTypes,
  useGetWinnerTypes,
} from '../_core/_hooks'
import ChartSaleProductReport from '../../../../_cloner/partials/widgets/charts/ChartSaleProductReport'
import ChartSaleProductPriorityReport from '../../../../_cloner/partials/widgets/charts/ChartSaleProductPriorityReport'

const SaleByProductPriorityReport = () => {
  const [radioSelect, setRadioSelect] = useState(-1)
  const [totalTypesSelect, setTotalTypesSelect] = useState<any>({value: 2, label: 'فروش یکپارچه'})
  const [totalTypeDetailSelect, setTotalTypeDetailSelect] = useState<any>({value: 0, label: 'همه'})
  const [totalDateSelect, setTotalDateSelect] = useState<any>({value: -1, label: 'همه'})
  const [totalWinnerTypeSelect, setTotalwinnerTypeSelect] = useState<any>({value: -1, label: 'همه'})

  const {data: saleTotalTypes} = useGetSaleTotalTypes()
  const {data: saleWinnerType} = useGetWinnerTypes()
  const {data: saleTotalDate} = useGetDeliverDates()

  const {mutate: totalDetails, data: saleTotalTypeDetails} = useGetSaleTotalTypeDetails()
  const {
    mutate: saleProductPriorityReport,
    data: saleProductPriority,
    isLoading,
    isError,
  } = useGetSaleByProductPriorityReport()

  useEffect(() => {
    const formData = {
      saletypeId: 2,
      saleTotalTypeDetailId: 0,
      priority: 0,
      isJavani: -1,
      winnerType: -1,
    }
    totalDetails(totalTypesSelect?.value)
    saleProductPriorityReport(formData)
  }, [])

  const onChangeTotalTypes = (selectOption: any) => {
    setTotalTypesSelect(selectOption)
    totalDetails(selectOption?.value)
    const formData = {
      saletypeId: selectOption?.value,
      saleTotalTypeDetailId: 0,
      priority: 0,
      isJavani: radioSelect,
      winnerType: -1,
    }
    saleProductPriorityReport(formData)
  }
  const onChangeTotalTypeDetail = (selectOption: any) => {
    setTotalTypeDetailSelect(selectOption)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: selectOption?.value,
      isJavani: radioSelect,
      priority: 0,
      winnerType: -1,
    }
    saleProductPriorityReport(formData)
  }
  const onChangeTotalDate = (selectOption: any) => {
    setTotalDateSelect(selectOption)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: totalTypeDetailSelect?.value,
      isJavani: radioSelect,
      priority: selectOption?.value,
      winnerType: -1,
    }
    saleProductPriorityReport(formData)
  }
  const onChangeTotalWinnerType = (selectOption: any) => {
    setTotalwinnerTypeSelect(selectOption)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: totalTypeDetailSelect?.value,
      isJavani: radioSelect,
      priority: totalDateSelect?.value,
      winnerType: selectOption?.value,
    }
    saleProductPriorityReport(formData)
  }

  const onChangeRadioSelect = (event: any) => {
    setRadioSelect(event.target.value)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: 0,
      priority: totalDateSelect?.value,
      isJavani: event.target.value,
      winnerType: totalWinnerTypeSelect?.value,
    }
    saleProductPriorityReport(formData)
  }

  return (
    <Card6 image='' title='گزارش آماری براساس محصول اولویت'>
      <div className='flex flex-col'>
        <div className='md:grid md:grid-cols-3 md:gap-4'>
          <ProfessionalSelect
            options={dropdownSaleTotalType(saleTotalTypes)}
            onChange={onChangeTotalTypes}
            value={totalTypesSelect}
            defaultValue={{value: 2, label: 'فروش یکپارچه'}}
            placeholder=''
          />
          <ProfessionalSelect
            options={dropdownSaleTotalTypeDetails(saleTotalTypeDetails)}
            onChange={onChangeTotalTypeDetail}
            value={totalTypeDetailSelect}
            defaultValue={{value: 0, label: 'همه'}}
            placeholder=''
          />
          <ProfessionalSelect
            options={dropdownTotalDate(saleTotalDate)}
            onChange={onChangeTotalDate}
            value={totalDateSelect}
            defaultValue={{value: 0, label: 'همه'}}
            placeholder=''
          />
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-4 my-2'>
          <div>
            <RadioGroupSaleType onChange={onChangeRadioSelect} />
          </div>
          <div>
            <ProfessionalSelect
              options={dropdownSaleTotalWinnerType(saleWinnerType)}
              onChange={onChangeTotalWinnerType}
              value={totalWinnerTypeSelect}
              defaultValue={{value: 0, label: 'همه'}}
              placeholder=''
            />
          </div>
        </div>
        <div>
          <ChartSaleProductPriorityReport
            data={saleProductPriority}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </Card6>
  )
}

export default SaleByProductPriorityReport
