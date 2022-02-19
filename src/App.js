import React from 'react'
import './App.css'
import Header from './components/Header';
import Menu from './components/Menu';
import Banner from './components/Banner';
import We from './components/We'
import About from './components/About'
import Service from './components/Service'
import Statistika from './components/Statistika'
import Project from './components/Project';
import Team from './components/Team'
import Pricing from './components/Pricing'
import Cliend from './components/Cliend';
import Clients from './components/Clients'
import New from './components/New'
import Contact from './components/Contact'
import NewPr from './components/NewPr'
import FooterDe from './components/FooterDe'
import FooterCop from './components/FooterCop'

function App() {
  return (
    <div >
        <Header/>
        <Menu/>
        <Banner />
        <We />
        <About />
        <Service />
        <Statistika />
        <Project />
        <Team />
        <Pricing />
        <Cliend />
        <Clients />
        <New />
        <Contact />
        <NewPr />
        <FooterDe />
        <FooterCop />

    </div>
  )
}

export default App;