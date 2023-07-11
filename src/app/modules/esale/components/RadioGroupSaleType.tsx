import { FC } from "react"

interface IProps {
    onChange: any
}

const RadioGroupSaleType:FC<IProps> = ({onChange}) => {
  return (
    <div onChange={onChange} className='nav-group nav-group-fluid'>
      <label>
        <input type='radio' className='btn-check' name='type' value={0}  />
        <span className='btn btn-sm btn-color-muted btn-active btn-active-primary'>عادی</span>
      </label>

      <label>
        <input type='radio' className='btn-check' name='type' value={1} />
        <span className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4'>جوانی</span>
      </label>

      <label>
        <input type='radio' className='btn-check' name='type' value={-1} defaultChecked />
        <span className='btn btn-sm btn-color-muted btn-active btn-active-primary px-4'>همه</span>
      </label>
    </div>
  )
}

export default RadioGroupSaleType
