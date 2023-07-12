import {useEffect, useState} from 'react'
import {Card6} from '../../../../_cloner/partials/content/cards/Card6'
import ProfessionalSelect from './ProfessionalSelect'
import {dropdownSaleTotalType, dropdownSaleTotalTypeDetails} from '../helpers/dropdownSaleTotalType'
import RadioGroupSaleType from './RadioGroupSaleType'
import ChartSaleReport2 from '../../../../_cloner/partials/widgets/charts/ChartSaleReport2'
import {useGetSaleDetailsReport, useGetSaleReport, useGetSaleTotalTypeDetails, useGetSaleTotalTypes} from '../_core/_hooks'
import { KTSVG } from '../../../../_cloner/helpers'
import Modal from './Modal'
import SaleTotalModal from './SaleTotalModal'

const SaleTotalTypeReport = () => {

  const [radioSelect, setRadioSelect] = useState(-1)
  const [totalTypesSelect, setTotalTypesSelect] = useState<any>({value: 2, label: 'فروش یکپارچه'})
  const [totalTypeDetailSelect, setTotalTypeDetailSelect] = useState<any>({value: 0, label: 'همه'})

  const [isOpen, setIsOpen] = useState(false)

  const {data: saleTotalTypes} = useGetSaleTotalTypes()

  const {mutate: totalDetails, data: saleTotalTypeDetails} = useGetSaleTotalTypeDetails()
  const {mutate: saleReport, data: saleReportData, isLoading, isError} = useGetSaleReport()
  const {mutate: saleDetailReport, data: saleDetail} = useGetSaleDetailsReport()

  useEffect(() => {
    const formData = {
      saletypeId: 2,
      saleTotalTypeDetailId: 0,
      isJavani: -1,
    }
    totalDetails(totalTypesSelect?.value)
    saleReport(formData)
  }, [])

  const onChangeTotalTypes = (selectOption: any) => {
    setTotalTypesSelect(selectOption)
    totalDetails(selectOption?.value)
    const formData = {
      saletypeId: selectOption?.value,
      saleTotalTypeDetailId: 0,
      isJavani: radioSelect,
    }
    saleReport(formData)
  }
  const onChangeTotalTypeDetail = (selectOption: any) => {
    setTotalTypeDetailSelect(selectOption)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: selectOption?.value,
      isJavani: radioSelect,
    }
    saleReport(formData)
  }

  const onChangeRadioSelect = (event: any) => {
    setRadioSelect(event.target.value)
    const formData = {
      saletypeId: totalTypesSelect?.value,
      saleTotalTypeDetailId: 0,
      isJavani: event.target.value,
    }
    saleReport(formData)
  }

  const handleModal = () => {
    setIsOpen(true)

  }


  return (
    <>
      <Card6 image='' title='گزارش آماری فروش اینترنتی'>
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
            <div className='flex justify-center items-center'>
              <button onClick={handleModal}>مشاهده جزئیات</button>
            </div>
          </div>
          <RadioGroupSaleType onChange={onChangeRadioSelect} />
          <div>
            <ChartSaleReport2 data={saleReportData} isLoading={isLoading} isError={isError} />
          </div>
        </div>
      </Card6>
      <SaleTotalModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default SaleTotalTypeReport
