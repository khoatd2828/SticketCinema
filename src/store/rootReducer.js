import {combineReducers} from 'redux'
import {btTicketReducer} from './CinemaTicket/slice'

export const rootReducer = combineReducers({
    btTicketReducer,
})