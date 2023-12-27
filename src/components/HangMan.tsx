import "../index.css"

type HangManProps = {
   wrongLetters: string[]
}

const HEAD = (
   <div style={{width: "50px",height: "50px",borderRadius: "100%",border: "5px solid black",position: "absolute",left: "115px",top: "100px"}}/>
 )

 const BODY = (
   <div style={{width: "5px",height: "50px",background: "black",position: "absolute",top: "150px",left: "135px",}}/>
 )

 const RIGHT_ARM = (
   <div style={{width: "50px",height: "5px",background: "black",position: "absolute",top: "160px",left: "140px",rotate: "-30deg",transformOrigin: "left bottom",}}/>
 )

 const LEFT_ARM = (
   <div style={{width: "50px",height: "5px",background: "black",position: "absolute",top: "160px",left: "85px",rotate: "30deg",transformOrigin: "right bottom",}}/>
 )

 const RIGHT_LEG = (
   <div style={{width: "50px",height: "5px",background: "black",position: "absolute",top: "190px",left: "135px",rotate: "60deg",transformOrigin: "left bottom",}}/>
 )

 const LEFT_LEG = (
   <div style={{width: "50px",height: "5px",background: "black",position: "absolute",top: "190px",left: "90px",rotate: "-60deg",transformOrigin: "right bottom",}}/>
 )

 const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export default function HangMan({wrongLetters}: HangManProps) {
  return (
    <div style={{border: "1px solid", position: "relative", backgroundColor: "white"}}>
      {BODY_PARTS.slice(0, wrongLetters.length)}
      <div style={{width: "5px", height: "51px", backgroundColor: "black", marginLeft: "140px", rotate: "180deg", transformOrigin: "bottom"}}></div>
      <div style={{width: "100px", height: "5px", backgroundColor: "black", marginLeft: "45px" }}></div>
      <div style={{width: "5px", height: "300px", backgroundColor: "black", marginLeft: "45px" }}></div>
      <div style={{width: "100px", height: "5px", backgroundColor: "black" }}></div>
    </div>
  )
}
