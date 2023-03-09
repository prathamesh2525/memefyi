import { useEffect, useState } from "react"
import { Card } from "../components"
import { getAllMemes } from "../api/memes"
import { Link } from "react-router-dom"
import "./style.css"

export const Home = () => {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    getAllMemes().then((memes) => setMemes(memes.data.memes))
  }, [])
  return (
    <div className="gradient-two">
      <div className="w-[80%]">
        <h1 className="text-4xl font-bold pt-8 text-white">Meme Generator</h1>
        <div className="flex justify-center items-center relative">
          <div className="fixed bottom-5 left-4 px-4 py-2 text-2xl bg-blue-500 transition duration-200  hover:bg-blue-700 font-bold text-white rounded-xl">
            <Link to={"/"}>◄</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-4 p-8">
            {memes && memes.map((meme) => <Card meme={meme} key={meme.id} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
