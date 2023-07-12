import {FC, useEffect, useState} from 'react'
import Modal from './Modal'
import ProfessionalSelect from './ProfessionalSelect'
import RadioGroupSaleType from './RadioGroupSaleType'
import {
  useGetSaleDetailsReport,
  useGetSaleTotalTypeDetails,
  useGetSaleTotalTypes,
} from '../_core/_hooks'
import {dropdownSaleTotalType, dropdownSaleTotalTypeDetails} from '../helpers/dropdownSaleTotalType'
import {TablesWidget1, TablesWidget9} from '../../../../_cloner/partials/widgets'
import {SaleTotalTable} from './SaleTotalTable'

interface IProps {
  isOpen: boolean
  setIsOpen: any
  data?: any
}

const SaleTotalModal: FC<IProps> = ({isOpen, setIsOpen}) => {
  const [tableData, setTableDate] = useState([])
  const [radioSelect, setRadioSelect] = useState(-1)
  const [totalTypesSelect, setTotalTypesSelect] = useState<any>({value: 2, label: 'فروش یکپارچه'})
  const [totalTypeDetailSelect, setTotalTypeDetailSelect] = useState<any>({value: 0, label: 'همه'})

  const {data: saleTotalTypes} = useGetSaleTotalTypes()

  const {mutate: totalDetails, data: saleTotalTypeDetails} = useGetSaleTotalTypeDetails()
  const {mutate: saleReport, data: saleReportData, isLoading, isError} = useGetSaleDetailsReport()

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

  useEffect(() => {
    const formData = {
        saletypeId: 2,
        saleTotalTypeDetailId: 0,
        isJavani: -1,
      }
      saleReport(formData)
  
  }, [])

//   useEffect(() => {
//     const newObject = {
//       caR_TYPE_DESC: 'جمع کل',
//       calltopaY_CNT: data.reduce((accumulator: any, currentValue: any) => {
//         return accumulator + currentValue.calltopaY_CNT
//       }, 0),
//       paymentwaitinG_CNT: data.reduce((accumulator: any, currentValue: any) => {
//         return accumulator + currentValue.paymentwaitinG_CNT
//       }, 0),
//       unverifiedapplicanT_CNT: data.reduce((accumulator: any, currentValue: any) => {
//         return accumulator + currentValue.unverifiedapplicanT_CNT
//       }, 0),
//       payedcount: data.reduce((accumulator: any, currentValue: any) => {
//         return accumulator + currentValue.payedcount
//       }, 0),
//       counT_ALL: data.reduce((accumulator: any, currentValue: any) => {
//         return accumulator + currentValue.counT_ALL
//       }, 0),
//     }

//     const dataObject: any = [...data]
//     data.unshift(newObject)
//     setTableDate(dataObject)
//   }, [])

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className='container mt-4 mb-4'>
        <div className='md:grid md:grid-cols-2 md:gap-4 text-start'>
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
        </div>
        <RadioGroupSaleType onChange={onChangeRadioSelect} />

        <SaleTotalTable className='' data={saleReportData} isError={isError} isLoading={isLoading} />
      </div>
    </Modal>
  )
}

export default SaleTotalModal