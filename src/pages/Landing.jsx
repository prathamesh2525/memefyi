import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./style.css"

export const Landing = () => {
  return (
    <div className="relative h-screen gradient">
      <motion.div
        animate={{}}
        className="h-screen flex flex-col items-center justify-center gap-16"
      >
        <div>
          <motion.h1
            transition={{ x: { duration: 0.5 } }}
            initial={{ x: -500 }}
            animate={{ scale: 2, x: 0 }}
            className="text-2xl lg:text-4xl text-white font-bold"
          >
            Meme Generator
          </motion.h1>
        </div>
        <motion.div
          initial={{ y: -600 }}
          animate={{ y: 0 }}
          transition={{ y: { duration: 0.8 } }}
          className="text-white"
        >
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="text-left group">
            <li className="text-xl text-white">100 meme templates</li>
            <li className="text-xl text-white">Edit the meme</li>
            <li className="text-xl text-white">Download as an image</li>
          </ul>
        </motion.div>
        <motion.div
          animate={{ scale: 1.5 }}
          className=" px-4 py-2 text-xl lg:text-2xl bg-blue-500 hover:bg-blue-700 font-bold text-white rounded-lg cursor-pointer transition duration-200"
        >
          <Link to={"/memes"}>To Meme Template Page</Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
