import ReactApexChart from 'react-apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {FC} from 'react'

interface IProps {
  data: any
  isLoading: boolean
  isError: boolean
}

const ChartSaleProductAndDate: FC<IProps> = ({data, isLoading, isError}) => {
  const labelColor = getCSSVariableValue('--kt-gray-500')
  const borderColor = getCSSVariableValue('--kt-gray-200')
  const baseColor = getCSSVariableValue('--kt-primary')
  const secondaryColor = getCSSVariableValue('--kt-gray-300')

  if (isLoading) {
    return <div>درحال بارگزاری...</div>
  }

  if (isError) {
    return <div>Error fetching chart data</div>
  }

  const options: any = {
    chart: {
      fontFamily: 'Yekan_reqular',
      type: 'bar',
      height: 350,
      width: '100%',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
        distributed: true,
        borderRadius: 5,
        marginLeft: 20,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
      fontFamily: 'Yekan_reqular',
      formatter: function (val: any) {
        // return '$' + val + ' thousands'
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: data?.map((item: any) => item.deliverdatE_DESC),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontFamily: 'Yekan_reqular',
          fontSize: '12px',
          padding: '200px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
          fontFamily: 'Yekan_reqular',
          margin: '200px',
        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val: any) {
          // return '$' + val + ' thousands'
          return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        },
      },
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ['#546E7A', '#d4526e', '#13d8aa', '#A5978B'],
  }

  const series = [
    {
      name: 'امکان واریز',
      data: data?.map((item: any) => item.emkanevariz),
    },
    {
      name: 'منتظر واریز',
      data: data?.map((item: any) => item.montazer),
    },
    {
      name: 'غیر مجاز',
      data: data?.map((item: any) => item.motaghazi),
    },
    {
      name: 'کل',
      data: data?.map((item: any) => item.cnT_ALL),
    },
  ]

  return <ReactApexChart options={options} series={series} type='bar' height={350} />
}

export default ChartSaleProductAndDate
