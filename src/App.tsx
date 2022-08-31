import { MainPage, CreationPage } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreationPage/>}/>
      <Route path="/kolorki" element={<MainPage/>} />
    </Routes>
  );
}

export default App;
