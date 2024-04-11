import React from 'react'
import { HeaderComponent } from './HeaderComponent'
import seatList from './danhSachGhe.json'
import { SeatComponent } from './SeatComponent'
import { ContentComponent } from './ContentComponent'

export const TicketMovie = () => {
  return (
    <div>
        <HeaderComponent />
        <ContentComponent seatList={seatList} />
    </div>
  )
}
