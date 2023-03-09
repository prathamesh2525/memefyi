import { useState } from "react"
import Draggable from "react-draggable"

export const Text = () => {
  const [editMode, setEditMode] = useState(false)
  const [value, setValue] = useState("Double Click to Edit")

  return (
    <Draggable>
      {editMode ? (
        <div>
          <input
            onDoubleClick={(e) => setEditMode(false)}
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <h3 className="text-xs font-bold">*Double click to return</h3>
        </div>
      ) : (
        <h1
          onDoubleClick={(e) => setEditMode(true)}
          className="text-xl lg:text-2xl xl:text-3xl font-bold cursor-pointer"
        >
          {value}
        </h1>
      )}
    </Draggable>
  )
}
