import { Navbar, Home, About, Teacher ,Course, Contact, Footer } from "../src/components/Container/index";
function App() {

  return (
    <>
      <div className="font-Poppins bg-slate-200">
        <Navbar />
        <Home />
        <About />
        <Course />
        <Teacher />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;
