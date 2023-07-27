import React from "react";

const Square = ({ color, hexValue, isDarkText }) => {
	return (
		<>
			<div
				className="square"
				placeholder="Empty Value"
				style={{
					width: "200px",
					height: "200px",
					backgroundColor: color,
					margin: "20px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					color: isDarkText ? "#000" : "#fff",
				}}
			>
				<label>{color ? color : "Empty Value"}</label>
				<label>{hexValue ? hexValue : null}</label>
			</div>
		</>
	);
};

Square.defaultProps = {
	color: "Empty Color Value",
};

export default Square;
