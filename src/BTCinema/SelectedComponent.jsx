import React from 'react'
import { Cart } from './Cart'

export const SelectedComponent = () => {
  return (
    <div><h3 className='text-white text-center'>Thông tin chi tiết</h3>
      <div className='d-flex align-items-center mb-3'>
        <p className='gheDuocChon my-0'></p>
        <span className="text-white ms-4">Đã bán</span>
      </div>
      <div className='d-flex align-items-center mb-3'>
        <p className='gheDangChon my-0'></p>
        <span className="text-white ms-4">Đã chọn</span>
      </div>
      <div className='d-flex align-items-center mb-3'> 
      <p className='ghe bg-white ms-0 my-0'></p>
      <span className="text-white ms-4">Ghế trống</span>
      </div>
       <Cart />
    </div>
  )
}
