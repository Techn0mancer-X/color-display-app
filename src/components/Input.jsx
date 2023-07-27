import React from 'react'

const Input = ({color, handleColorChange, isDarkText, setIsDarkText}) => {
  return (
    <div>
    <form action="" onSubmit={(e) => e.preventDefault()}>
    {/* <label htmlFor="">add color Name</label> */}
      <input
        type="text"
        value={color}
        onChange={handleColorChange}
        placeholder="Enter a color name/value"
        autoFocus
        required
        maxLength="21"
      />
      </form>
      <button type="button" onClick={() => setIsDarkText(!isDarkText)} className="toggleBtn">Toggle Text Color</button>
    </div>
  )

}

export default Input
