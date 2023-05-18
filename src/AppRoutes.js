import { Navigate, Route, Routes } from "react-router-dom";

// Pages
import Dashboard from "./Pages/Dashboard/Dashboard";
import Upload from "./Pages/Upload/Upload";
import Download from "./Pages/Download/Download";
import PageContent from "./Components/PageContent/PageContent";
import Data1 from "./Pages/Eras5/Data_1";
import Data2 from "./Pages/Eras5/Data_2";


import React from 'react'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element ={<PageContent/>} />
        <Route path='/' element={<Navigate to = "Dashboard" />}/>
        <Route path='Dashboard' element={<Dashboard/>} />
        <Route path='Data_access/Upload' element={<Upload/>} />
        <Route path='Data_access/Download' element={<Download/>} />
        <Route path='Eras5/Data_1' element={<Data1/>} />
        <Route path='Eras5/Data_2' element={<Data2/>} />
        <Route path="*" element={<Navigate to="/" />}
    />
    </Routes>
  )
}
export default AppRoutes