// import React from 'react'
// import {Routes, Route} from 'react-router-dom'
// import Home from './Pages/Home'
// import Form from './Pages/Form'
// import Account from './Pages/Account'
// import Shop from './Pages/Shop'
// import Sale from './Pages/Sale'
// import About from './Pages/About'
// import Nav from './Component/Nav'
// import Explore from './Pages/Explore'
// import Men from './Pages/Men'
// import Women from './Pages/Women'

// const App = () => {
//   return (
//     <div className='bg-[#D8DCDF]'>
//     <div className='max-w-[1300px]  mx-auto  min-h-screen '>
      
//        <div className='bg-[#FFFFFF] w-full'>
//      <Nav />
//      <Routes>
//        <Route path='/' element={<Home />}/>
//           <Route path='/form' element={<Form />}/>
//                    <Route path='/account' element={<Account />}/>
//        <Route path='/shop' element={<Shop />}/>
//               <Route path='/sale' element={<Sale />}/>
//                      <Route path='/about' element={<About/>}/>
//                      <Route path='/explore' element={<Explore/>}>
//                       <Route path='/men' element={<Men/>} />
//                        <Route path='/women' element={<Women/>} />
// </Route>
//      </Routes>
     
//      </div>
     
//     </div>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Form from './Pages/Form'  // <-- fixed
import Account from './Pages/Account'
import Shop from './Pages/Shop'
import Sale from './Pages/Sale'
import About from './Pages/About'
import Nav from './Component/Nav'
import Explore from './Pages/Explore'
import Men from './Pages/Men'
import Women from './Pages/Women'

const App = () => {
  return (
    <div className='bg-[#D8DCDF]'>
      <div className='max-w-[1300px] mx-auto min-h-screen'>
        <div className='bg-[#FFFFFF] w-full'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/account' element={<Account />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/sale' element={<Sale />} />
            <Route path='/about' element={<About />} />
            <Route path='/explore' element={<Explore />}>
              <Route path='men' element={<Men />} />
              <Route path='women' element={<Women />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App