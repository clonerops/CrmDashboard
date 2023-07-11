import ReactApexChart from 'react-apexcharts'
import {getCSSVariableValue} from '../../../assets/ts/_utils'
import {FC} from 'react'

interface IProps {
  data: any
  isLoading: boolean
  isError: boolean
}

const ChartSaleReport2: FC<IProps> = ({data, isLoading, isError}) => {
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
      enabled: true,
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
      categories: data?.map((item: any) => item.applicantTypeDesc),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
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
  // const options: any = {
  //   fontFamily: 'Yekan_reqular',
  //   type: 'bar',
  //   height: 350,
  //   width: '100%',
  //   toolbar: {
  //     show: false,
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       columnWidth: '20%',
  //       distributed: true,
  //       borderRadius: 5,
  //       marginLeft: 20,
  //     },
  //   },

  //   // plotOptions: {
  //   //     bar: {
  //   //       distributed: true,
  //   //       horizontal: true,
  //   //       barHeight: "85%"
  //   //     }
  //   //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   xaxis: {
  //     position: 'top',
  //   },
  //   yaxis: {
  //     show: false,
  //   },
  //   grid: {
  //     padding: {
  //       top: 0,
  //       right: 0,
  //       bottom: 0,
  //       left: 0,
  //     },
  //   },
  //   colors: [
  //     '#33b2df',
  //     '#546E7A',
  //     '#d4526e',
  //     '#13d8aa',
  //     '#A5978B',
  //     '#2b908f',
  //     '#f9a3a4',
  //     '#90ee7e',
  //     '#f48024',
  //     '#69d2e7',
  //   ],
  // }

  const series = [
    {
      name: 'تعداد متقاضیان',
      data: data?.map((item: any) => item.count),
    },
  ]

  return <ReactApexChart options={options} series={series} type='bar' height={350} />
}

export default ChartSaleReport2
