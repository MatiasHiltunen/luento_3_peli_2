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

export default function App() {

  return (
    <>
      <Layout>
        <Navigation>
          <HomeButton>Koti</HomeButton>
          <Points></Points>
        </Navigation>
      </Layout>
    </>
  )
}


