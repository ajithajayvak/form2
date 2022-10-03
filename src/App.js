import Infos from "./info";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submitt from "./submit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Infos />} />
        <Route path="/submit" element={<Submitt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
