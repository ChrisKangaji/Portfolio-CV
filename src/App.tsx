import './App.css';
import { Header, Home, About, Skills, Services, Qualification } from './imports';

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
      </main>
    </>
  )
}

export default App
