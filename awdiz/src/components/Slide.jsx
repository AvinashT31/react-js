import { useEffect, useState } from "react"
import '../Styles.css/styles.css'

const slideinfo = require("../json/Slide.json")

function Slide() {

  const [slide, setslide] = useState();
  console.log(slide, "slide");

  useEffect(() => {
    setslide(slideinfo)
  }, [slide])
  console.log(slide, "checking");

  function opennewpage(){
    alert("working");
  }

  return (
    <div>
      {slide && slide.map((e) => (
        <div id='displaycompetiton-first' onClick={() => opennewpage()}>
          <div>
            <img src={e.background} />
          </div>
          <div>
            <img src={e.image} />
          </div>
          <div>
            <p>{e.paragraph}</p>
          </div>
          <div>
            <p>{e.p}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Slide()