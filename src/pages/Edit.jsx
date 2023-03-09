import { createRef, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Text } from "../components"
import { exportComponentAsJPEG } from "react-component-export-img"

export const Edit = () => {
  const [params] = useSearchParams()
  const url = params.get("url")
  const [count, setCount] = useState(0)

  const addText = () => {
    setCount(count + 1)
  }

  const memeRef = createRef()
  return (
    <div className="relative gradient3 h-screen">
      <h1 className="text-4xl font-bold text-white p-8">Meme Generator</h1>
      <div className="flex flex-col items-center">
        <div ref={memeRef} className="mx-12 mt-12 w-[50%] p-2">
          <img className="w-[50%]" src={url} alt=".." />
          {Array(count)
            .fill(0)
            .map((e) => (
              <Text />
            ))}
        </div>
        <div className="">
          <button
            onClick={addText}
            className="text-xl bg-blue-600 text-white px-4 py-2 font-bold rounded-lg hover:bg-blue-700"
          >
            Add Text
          </button>
          <button
            onClick={(e) => {
              exportComponentAsJPEG(memeRef)
            }}
            className="ml-10 text-xl bg-green-600 text-white font-bold px-4 py-2 mt-4 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
      <div className="fixed bottom-5 left-4 px-4 py-2 text-2xl bg-blue-500 hover:bg-blue-700 transition duration-200 font-bold text-white rounded-xl">
        <Link to={"/memes"}>◄</Link>
      </div>
    </div>
  )
}
