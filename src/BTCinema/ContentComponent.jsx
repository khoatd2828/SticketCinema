import React from 'react'
import { SeatComponent } from './SeatComponent'
import { SelectedComponent } from './SelectedComponent'

export const ContentComponent = ( { seatList } ) => {
  return (
    <div className='container'>
        <div className="row ms-auto mt-5">
            <div className="col-6" >
                <SeatComponent seatList={seatList} />
            </div>
            <div className="col-6 mt-5">
                <SelectedComponent />
            </div>
        </div>
    </div>
  )
}
