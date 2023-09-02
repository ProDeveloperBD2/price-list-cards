import './App.css'
import Dashboard from './components/Dahsboard/Dashboard'
import Navbar from './components/Navbar/Navbar'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-4xl text-orange-500 mt-4 font-semibold'>Hallo I am Nahid Hasan and I am a Developer!!!</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </>
  )
}

export default App
