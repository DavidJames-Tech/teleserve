import './App.css'

import WebApp from '@twa-dev/sdk'

import Logo from "./assets/teleserve.png"
import ProfileCard from './components/ProfileCard'


function App() {
  
  return (
    <>
      <div className=''>
          
          <div className="mt-4 grid grid-cols-1 gap-2">

            <ProfileCard imageUrl={Logo} jobTitle="Errand" latestComment="I am very impressed by your hardwork" name="Cole Annas" rating={7} />
            <ProfileCard imageUrl={Logo} jobTitle="Errand" latestComment="I am very impressed by your hardwork" name="Cole Annas" rating={7} />
           
          </div>
      </div>

      {/* <RequestModal /> */}
    </>
  )
}

export default App
