import './App.css'
import Header from './Components/Header.jsx'
import Nevjegy from './Components/Nevjegy.jsx'
import Keszsegek from './Components/Keszsegek.jsx'
import Footer from './Components/Footer.jsx'

const keszsegek = ["Elso", "Masodik", "Harmadik", "Negeydik", "Otodik"]

function App() {

  return (
    <>
    <Header />
    <div class="kartya">
      <Nevjegy />
      <Keszsegek Keszsegek={keszsegek}/>
    </div>
    <Footer />
    </>
  )
}

export default App
