import React, { useState } from "react";
import colorNames from "colornames";
import "./App.css";
import Square from "./components/Square";
import Input from "./components/Input";

function App() {
	const [color, setColor] = useState("");
	const [hexValue, setHexValue] = useState("");
	const [isDarkText, setIsDarkText] = useState(true);

	const handleColorChange = (event) => {
		setColor(event.target.value);
		setHexValue(colorNames(event.target.value));
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Color Display App</h1>
				<Square color={color} hexValue={hexValue} isDarkText={isDarkText} />
				<Input
					color={color}
					handleColorChange={handleColorChange}
					setHexValue={setHexValue}
					setIsDarkText={setIsDarkText}
					isDarkText={isDarkText}
				/>
			</header>
		</div>
	);
}

export default App;
