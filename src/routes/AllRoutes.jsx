import { Routes, Route } from "react-router-dom"
import { Edit, Home } from "../pages"
import { Landing } from "../pages/Landing"

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/memes" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  )
}
