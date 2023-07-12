import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import * as api from './_requests'
import {
  SaleByProductPriorityReportRequest,
  SaleByProductReportRequest,
  SaleReportRequest,
} from './_models'

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
const useGetSaleMountReport = () => {
  return useQuery(['saleReport'], api.getSaleMountReport)
}

const useGetSaleReport = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (formData: SaleReportRequest) => {
      return api.getSaleReport(formData)
    },
    {
      onSuccess: () => {
        const saleReport = queryClient.getQueryData(['saleReport'])
        queryClient.setQueriesData(["saleReport"], saleReport);
      },
    }
  )
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

// Tables
const useGetSaleDetailsReport = () => {
  return useMutation((formData: SaleReportRequest) => {
    return api.getSaleDetailsReport(formData)
  })
}

const useGetSaleTotalDetailsReport = () => {
  return useMutation((isJavani: number) => {
    return api.getSaleTotalDetailReport(isJavani)
  })
}


export {
  useGetSaleTotalTypes,
  useGetSaleTotalTypeDetails,
  useGetDeliverDates,
  useGetWinnerTypes,
  useGetSaleReport,
  useGetSaleMountReport,
  useGetSaleByProductReport,
  useGetSaleByProductPriorityReport,
  useGetSaleByProductPriorityAndSaleDetailReport,
  useGetSaleDetailsReport,
  useGetSaleTotalDetailsReport
}
