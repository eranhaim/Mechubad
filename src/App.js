import React, { useState, useEffect } from 'react';
import img1 from "./imgs/1.jpeg";
import img2 from "./imgs/2.jpeg";
import img3 from "./imgs/3.jpeg";
import img4 from "./imgs/4.jpeg";
import img5 from "./imgs/5.jpeg";

const day = window.location.href.split("/").slice(-1)[0];
const answers = ["24752639", "88326016", "20111542", "100355140","238797120000"]
const imgs = [img1,img2,img3,img4,img5]

export default function App() {
  const [ans, setAns] = useState("");
  const [msg, setmsg] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {console.log(window.location.href.split("/"));setImg(imgs[day])},[])
  return (
    <div style={{display: "flex", direction: "rtl", justifyContent: "center", alignItems: "center"}}>
      <img style={{top:0,left:0,height: "100vh", width: "100vw", position: "fixed"}} src={img}/>
      <input type="text" onChange={({target}) => setAns(target.value)}/>
      <button onClick={() => {
        if(ans == answers[day])
          setmsg("כל הכבוד תותח");
        else setmsg("אויש טעות");
      }}>GO</button>
      <div>
      <h1>{msg}</h1></div>
    </div>
  );
}
