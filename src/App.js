import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ViewBooks from "./components/ViewBooks";
import AddBooks from "./components/AddBooks";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<ViewBooks />} />
            <Route path="/addbooks" element={<AddBooks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
