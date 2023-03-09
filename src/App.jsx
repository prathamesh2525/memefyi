import { useState } from "react"
import "./App.css"
import { AllRoutes } from "./routes/AllRoutes"
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="h-screen text-center ">
      <AllRoutes />
    </div>
  )
}

export default App
