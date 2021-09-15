import React, { useState, useEffect } from "react";
import img1 from "./imgs/1.jpeg";
import img2 from "./imgs/2.jpeg";
import img3 from "./imgs/3.jpeg";
import img4 from "./imgs/4.jpeg";
import img5 from "./imgs/5.jpeg";

const day = window.location.href.split("/").slice(-1)[0];
const answers = ["24752639", "88326016", "20111542", "100355140", "238797120000"];
const imgs = [img1, img2, img3, img4, img5];

export default function App() {
	const [ans, setAns] = useState("");
	const [msg, setmsg] = useState("");

	useEffect(() => {
		document.querySelector("html").style.backgroundImage = `url(${imgs[day]})`;
	}, []);
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				direction: "rtl",
				justifyContent: "center",
				alignItems: "center",
				paddingTop: 20,
			}}
		>
			<input type="text" onChange={({ target }) => setAns(target.value)} placeholder="קוד סודי" />
			<button
				onClick={() => {
					if (ans == answers[day - 1]) setmsg("כל הכבוד תותח");
					else setmsg("אויש טעות");
					console.log(ans, answers[day]);
				}}
			>
				GO
			</button>

			<h1 style={{ color: "white", textShadow: "0 0 10px black" }}>{msg}</h1>
		</div>
	);
}
