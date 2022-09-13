import './css/index.css'

import Nav from './componentes/Nav.jsx'
import Saludo from './componentes/Saludo.jsx'
import Skill from './componentes/Skill.jsx'
import Proyectos from './componentes/Proyectos.jsx'
import Footer from './componentes/Footer.jsx'

function App() {
  
  return (
    
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Saludo />
        <Skill />
        <Proyectos />
      </main>
      <Footer />
    </>

  )
}

export default App

