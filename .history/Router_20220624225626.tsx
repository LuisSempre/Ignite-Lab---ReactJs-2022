import { Route, Routes } from "react-router-dom";
import { Event } from './pages/Event'
import { Subscribe } from './pages/Subscribe'
export function Router() {
    return(
      <Routes>
           <Route path="/" element={<h1 className="text-white">Home</h1>}/> 
           <Route path="/event" element={<Event />}/>
           <Route path="/event/lesson/:slug" element={<Event />}/>
           <Route path="/subscribe" element={<Subscribe />}/>
      </Routes>
    )
}