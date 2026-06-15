// import { Routes, Route } from "react-router-dom";

// import GuidesPage from "./pages/GuidesPage";
// import GuideProfilePage from "./pages/GuideProfilePage";
// import GuideMessagePage from "./pages/GuideMessagePage";

// function App() {
//   return (
//     <div className='w-full h-screen '>
//       <Toaster position='top-right'/>
//         <Routes>
//           <Route path='/*'  element={<HomePage/>}  />

//           <Route path="/guidespage" element={<GuidesPage />} />

//           <Route path="/guide/:id"  element={<GuideProfilePage />} />

//           <Route  path="/guide/:id/message" element={<GuideMessagePage />} />

//         </Routes>
//       <Toaster/>
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

import AdminPage from './pages/AdminPage'

import GuidesPage from './pages/GuidesPage'
import GuideProfilePage from './pages/GuideProfilePage'
import GuideMessagePage from './pages/GuideMessagePage'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='w-full h-screen '>
      <Toaster position='top-right'/>
      <Routes>
        <Route path='/*' element={<HomePage/>} />

        <Route path='/signin' element={<LoginPage/>}/>

        

        <Route path='/admin/*' element={<AdminPage/>}/>

        

        {/* Guide routes - these will be accessible without the HomePage layout if needed */}
        <Route path='/guidespage' element={<GuidesPage/>} />
        <Route path='/guide/:id' element={<GuideProfilePage/>} />
        <Route path='/guide/:id/message' element={<GuideMessagePage/>} />
      </Routes>
    </div>
  )
}

export default App