import './App.css';
import { Header, Home, About, Skills, Services, Qualification, Contact, Footer, ScrollUp } from './imports';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
