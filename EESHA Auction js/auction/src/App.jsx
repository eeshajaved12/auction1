import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AuctionCardComponent from './views/home/AuctionCardComponent'
import BidFormComponent from './views/home/BidFormComponent'
import BidHistoryComponent from './views/home/BidHistoryComponent'
import CountdownTimerComponent from './views/home/CountdownTimerComponent'
import SidebarComponent from './views/home/SidebarComponent'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuctionCardComponent/>
      <BidFormComponent/>
      <BidHistoryComponent/>
      <CountdownTimerComponent/>
      <SidebarComponent/>
    </>
  )
}

export default App

