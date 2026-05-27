// import A from "./Components/A";
// import B from "./Components/B";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import(`./Components/Home`));
const About = lazy(() => import(`./Components/About`));
const Contact = lazy(() => import(`./Components/Contact`));
const Services = lazy(() => import(`./Components/Services`));

function App() {
  return (
    // <div className="App">
    //   <A name={`abc`} />
    //   <B name={`xyz`} />
    // </div>
    <BrowserRouter>
      <Suspense fallback={<h1>Loadin........</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Services />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
