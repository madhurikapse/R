import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Link, useParams, useNavigate } from 'react-router-dom';
import { AiTwotoneLike } from 'react-icons/ai'
import Home from './Home';
import Bollywood from './Bollywood';
import Technology from './Technology';
import Hollywood from './Hollywood';
import Fitness from './Fitness';
import Food from './Food';
import PageNotFound from './PageNotFound';
import "../style.css"
import ContextAPI from './ContextAPI';
import DetailDescription from './DetailDescription';

const RouterFile = () => {
  return (
    <>
    <div className="comps"> 
    <ContextAPI>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Bollywood" element={<Bollywood/>}/>
        <Route path="/Technology" element={<Technology/>}/>
        <Route path="/Hollywood" element={<Hollywood/>}/>
        <Route path="/Fitness" element={<Fitness/>}/>
        <Route path="/Food" element={<Food/>}/>
        <Route path="/detaildescription/:id" element={<DetailDescription/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
      </ContextAPI>
    </div>
    </>
  )
}

export default RouterFile
