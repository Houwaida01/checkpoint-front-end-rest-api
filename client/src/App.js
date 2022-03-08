import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import Navigation from "./componenet/Navigation";
import Footer from "./componenet/Footer";
import Error from "./pages/Error";
import ContactList from "./componenet/ContactList";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="*" element={<Error/>} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
