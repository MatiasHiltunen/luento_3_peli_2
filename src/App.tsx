import { CSSProperties, useState } from "react"
import styled from "styled-components"

const Layout = styled.div`
  background: #139a27;
  width: 100vw;
  height: 100dvh;
`
const Navigation = styled.div`
  width: 100%;
  height: 80px;
  background-color: darkblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HomeButton = styled.button`
  margin-left: 10px;
`
const Points = styled.div`
  width: 50px;
  height: 50px;
  background-color: chocolate;
  margin-right: 10px;
  border-radius: 50%;
`

function Ball() {

  const [clicked, setClicked] = useState(0)
  const maxCount = 4

  const style: CSSProperties = {
    background: "red",
    width: 50 + "px",
    height: 50 + "px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    /* position: "absolute", */
    userSelect: "none",
    cursor: "pointer"
  }

  if(clicked >= maxCount){
    return <div>X</div>
  }

  return <>
    <div style={style} onClick={()=> setClicked(clicked + 1)}> {clicked} </div>
  </>
}

export default function App() {
  return (
    <>
      <Layout>
        <Navigation>
          <HomeButton>Koti</HomeButton>
          <Points></Points>
        </Navigation>
        <Ball></Ball>
        <Ball></Ball>
      </Layout>
    </>
  )
}


