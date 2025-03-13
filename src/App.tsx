import './App.css';
import { Header, Home, About, Skills, Services, Qualification, Contact } from './imports';

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
    </>
  )
}

export default App
