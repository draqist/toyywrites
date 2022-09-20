import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import { Body } from '../styles/Body'

const Home: NextPage = () => {
  return (
    <Body>
      <Navbar />
      
      <div style={{height:'500px', backgroundColor: "green", width:'100%', marginTop:'30px'}}>

      </div>
      <div style={{ height: '500px', backgroundColor: "", width: '100%', marginTop: '30px', fontSize:'clamp(2.5rem,6vw,2rem)', fontWeight:'900', textAlign:'center', display: "flex", alignItems: "center", flexDirection: "column" }}>
        <h1>FASHION WITH SAUCE </h1>
        
        <div style={{fontSize:'28px', fontFamily: "Tiempos", width: "60%", marginTop: "60px", lineHeight: '2'}}> It all began 15 years ago, from the tight crevices of Lagos, Nigeria. The will to make people express themselves with the confidence that their attires gave them. Putting smiles on faces, making people the talk of the town with trendy and stylish designs from all cultural blends. </div>
      </div>
    </Body>
  )
}

export default Home
