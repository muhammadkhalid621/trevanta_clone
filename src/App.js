import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import FAQs from "./Pages/FAQs";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        {" "}
      </Route>
      <Route path="/about" element={<About />}>
        {" "}
      </Route>
      <Route path="/contact" element={<Contact />}>
        {" "}
      </Route>
      <Route path="/privacy" element={<Privacy />}>
        {" "}
      </Route>
      <Route path="/terms" element={<Terms />}>
        {" "}
      </Route>
      <Route path="/faq" element={<FAQs />}>
        {" "}
      </Route>
      <Route path="/*" element={<Error />}>
        {" "}
      </Route>
    </Routes>
  );
}

export default App;
