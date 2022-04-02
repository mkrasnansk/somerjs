import React, { useEffect } from "react";
import "../assets/scss/bubble.scss";

function createBubble() {
	const section = document.querySelector("Section");
	const createElement = document.createElement("span");
	var size = Math.random() * 20;

	createElement.style.animation = "animation 3s linear infinite";
	createElement.style.width = 15 + size + "px";
	createElement.style.height = 15 + size + "px";
	createElement.style.right = Math.random() * 40 + "px";
	createElement.style.boxShadow = `inset 0 0 6px #${Math.floor(Math.random()*1000).toString(16)}`;
	section.appendChild(createElement);

	setTimeout(() => {
		createElement.remove();
	}, 1000);
}

export const Bubble = (props) => {
	useEffect(() => {
		createBubble();
		let intervalBubble = setInterval(createBubble, 100);
		return () => {
			clearInterval(intervalBubble);
		};
	}, [props.start]);
	let position = props.positionStart - 300;
	return <section  style={{ top: position }}></section>;
};
