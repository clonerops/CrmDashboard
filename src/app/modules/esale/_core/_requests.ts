import {esaleHttp} from '../../../../_cloner/helpers/axiosConfig'
import {
  SaleByProductPriorityReportRequest,
  SaleByProductReportRequest,
  SaleReportRequest,
} from './_models'

const getSaleTotalTypes = async () => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetSaleTotalTypes')
  return data
}
const getSaleTotalTypeDetails = async (id: number) => {
  const {data} = await esaleHttp.get(
    `LotteryWinnerReport/GetSaleTotalTypeDetails?saleTotalTypeId=${id}`
  )
  return data
}

const getDeliverDates = async () => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetDeliverDates')
  return data
}

const getWinnerTypes = async () => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetWinnerTypes')
  return data
}

// Reports
const getSaleMountReport = async () => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetSaleStatisticsReport', {
    headers: {
      saletypeId: 2,
      saleTotalTypeDetailId: 0,
      isJavani: -1,
    },
  })
  return data
}
const getSaleReport = async (formData: SaleReportRequest) => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetSaleStatisticsReport', {
    headers: {
      saletypeId: formData.saletypeId,
      saleTotalTypeDetailId: formData.saleTotalTypeDetailId,
      isJavani: formData.isJavani,
    },
  })
  return data
}

const getSaleByProductReport = async (formData: SaleByProductReportRequest) => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetSaleStatisticsByCarTypeReport', {
    headers: {
      saletypeId: formData.saletypeId,
      saleTotalTypeDetailId: formData.saleTotalTypeDetailId,
      isJavani: formData.isJavani,
      WinnerType: formData.winnerType,
    },
  })
  return data
}
const getSaleByProductPriorityReport = async (formData: SaleByProductPriorityReportRequest) => {
  const {data} = await esaleHttp.get(
    'LotteryWinnerReport/GetSaleStatisticsByPriorityProductReport',
    {
      headers: {
        saletypeId: formData.saletypeId,
        saleTotalTypeDetailId: formData.saleTotalTypeDetailId,
        priority: formData.priority,
        isJavani: formData.isJavani,
        winnerType: formData.winnerType,
      },
    }
  )
  return data
}
const getSaleByProductPriorityAndSaleDetailReport = async (isJavani: number = -1) => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetSaleStatByDeliverDate', {
    headers: {
      isJavani,
    },
  })
  return data
}

// Tables Details
const getSaleDetailsReport = async (formData: SaleReportRequest) => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetSaleReportByCar', {
    headers: {
      saletypeId: formData.saletypeId,
      saleTotalTypeDetailId: formData.saleTotalTypeDetailId,
      isJavani: formData.isJavani,
    },
  })
  return data
}
const getSaleTotalDetailReport = async (isJavani: number = -1) => {
  const {data} = await esaleHttp.get('LotteryWinnerReport/GetSaleReportBySaleTotalType', {
    headers: {
      isJavani,
    },
  })
  return data
}

// Download Excel
const downloadTotalTypeExcel = async (formData: SaleReportRequest) => {
  const {data} = await esaleHttp.get('LotteryWinnerFileReport/GetSaleExcelReportByCar', {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'blob',
      saletypeId: formData.saletypeId,
      saleTotalTypeDetailId: formData.saleTotalTypeDetailId,
      isJavani: formData.isJavani,
    },
  })
  return data
}
const downloadTotalTypeDetailExcel = async (isJavani: number = -1) => {
  const {data} = await esaleHttp.get('LotteryWinnerFileReport/GetSaleExcelReportBySaleTotalType', {
    responseType: 'arraybuffer',
    headers: {
      isJavani,
      'Content-Type': 'blob',
    },
  })
  return data
}

export {
  getSaleTotalTypes,
  getSaleTotalTypeDetails,
  getDeliverDates,
  getWinnerTypes,
  getSaleReport,
  getSaleMountReport,
  getSaleByProductReport,
  getSaleByProductPriorityReport,
  getSaleByProductPriorityAndSaleDetailReport,
  getSaleDetailsReport,
  getSaleTotalDetailReport,
  downloadTotalTypeExcel,
  downloadTotalTypeDetailExcel,
}
