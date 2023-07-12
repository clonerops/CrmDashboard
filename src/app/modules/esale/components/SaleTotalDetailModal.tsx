import {FC, useEffect, useState} from 'react'
import Modal from './Modal'
import RadioGroupSaleType from './RadioGroupSaleType'
import {
  useGetSaleTotalDetailsReport,
} from '../_core/_hooks'
import { SaleTotalDetailTable } from './SaleTotalDetailTable'

interface IProps {
  isOpen: boolean
  setIsOpen: any
  data?: any
}

const SaleTotalDetailModal: FC<IProps> = ({isOpen, setIsOpen}) => {
  const [radioSelect, setRadioSelect] = useState(-1)

  const {mutate: saleReport, data: saleReportData, isLoading, isError} = useGetSaleTotalDetailsReport()


  const onChangeRadioSelect = (event: any) => {
    setRadioSelect(event.target.value)
    saleReport(event.target.value)
  }

  useEffect(() => {
      saleReport(-1)
  
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <div className='container mt-4 mb-4'>
        <RadioGroupSaleType onChange={onChangeRadioSelect} />
        <SaleTotalDetailTable className='' data={saleReportData} isError={isError} isLoading={isLoading} />
      </div>
    </Modal>
  )
}

export default SaleTotalDetailModal
