import {useMutation, useQuery} from '@tanstack/react-query'
import * as api from './_requests'
import { SaleByProductPriorityReportRequest, SaleByProductReportRequest, SaleReportRequest } from './_models'

const useGetSaleTotalTypes = () => {
  return useQuery(['saleTotalTypes'], api.getSaleTotalTypes)
}

const useGetSaleTotalTypeDetails = () => {
  return useMutation((id: number) => {
    return api.getSaleTotalTypeDetails(id)
  })
}

const useGetDeliverDates = () => {
  return useQuery(['deliverDates'], api.getDeliverDates)
}

const useGetWinnerTypes = () => {
  return useQuery(['winnerTypes'], api.getWinnerTypes)
}

const useGetSaleReport = () => {
  return useMutation((formData: SaleReportRequest) => {
    return api.getSaleReport(formData)
  })
}

const useGetSaleByProductReport = () => {
  return useMutation((formData: SaleByProductReportRequest) => {
    return api.getSaleByProductReport(formData)
  })
}
const useGetSaleByProductPriorityReport = () => {
  return useMutation((formData: SaleByProductPriorityReportRequest) => {
    return api.getSaleByProductPriorityReport(formData)
  })
}
const useGetSaleByProductPriorityAndSaleDetailReport = () => {
  return useMutation((isJavani: number) => {
    return api.getSaleByProductPriorityAndSaleDetailReport(isJavani)
  })
}

export {
  useGetSaleTotalTypes,
  useGetSaleTotalTypeDetails,
  useGetDeliverDates,
  useGetWinnerTypes,
  useGetSaleReport,
  useGetSaleByProductReport,
  useGetSaleByProductPriorityReport,
  useGetSaleByProductPriorityAndSaleDetailReport
}
