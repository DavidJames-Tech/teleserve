import './App.css'

import WebApp from '@twa-dev/sdk'
import RequestModal from './components/RequestModal'


function App() {
  


  return (
    <>
      <div className='px-4 py-3 bg-gray-300 rounded-full'>
          Welcome to Teleserve
      </div>

      <RequestModal />
    </>
  )
}

export default App
