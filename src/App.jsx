import "./assets/Components/CommonStyle/CommonStyle.css"
import NavBar from "./assets/Components/Navbar/Navbar"
import BannerPart from "./assets/Components/BannerPart/Banner"
import Service from "./assets/Components/Service/Service"
import Portfolio from "./assets/Components/Portfolio/Portfolio"
import Reality from "./assets/Components/Reality/Reality"
import Intarested from "./assets/Components/Intarested/intarested"
import Testiomonial from "./assets/Components/Testiomonial/testiomonial"
import Artical from "./assets/Components/Artical/artical"
import Footer from "./assets/Components/Footer/footer"


function App() {
  return (
    <div>
      <NavBar />
      <BannerPart/>
      <Service/>
      <Portfolio/>
      <Reality/>
      <Intarested/>
      <Testiomonial/>
      <Artical/>
      <Footer/>
    </div>
  )
}

export default App
