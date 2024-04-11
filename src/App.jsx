import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch, useSelector} from 'react-redux'
import { TicketMovie } from './BTCinema/TicketMovie'

function App() {
  return (
    <div>
        <TicketMovie/>
    </div>
  )
}

export default App
