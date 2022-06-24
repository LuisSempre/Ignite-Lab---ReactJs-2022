import { Route, Routes } from "react-router-dom";

export function Router() {
    return(
      <Routes>
           <Route path="/" element={<h1 className="text-white">Home</h1>}/> 
           <Route path="/" element={<h1>Event</h1>}/> 
      </Routes>
    )
}