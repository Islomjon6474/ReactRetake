import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import DataContext from "./contexts/ProductsContexts";
import All from "./components/All/All";
import Uncompleted from "./components/Uncompleted/Uncompleteed";
import Completed from "./components/Completed/Completed";

function App() {
  const [data, setData] = useState([
    { title: "Tesk One", completed: false },
    { title: "Tesk two", completed: true },
    { title: "Tesk three", completed: false },
    { title: "Tesk four", completed: true },
    { title: "Tesk One", completed: false },
    { title: "Tesk two", completed: true },
    { title: "Tesk three", completed: false },
    { title: "Tesk four", completed: true },
    { title: "Tesk One", completed: false },
    { title: "Tesk two", completed: true },
  ]);
  const [number, setNumber] = useState(5);
  return (
    <div className="App">
      <h1 className="text-white text-center">TODO</h1>

      <div className="cont shadow ">
        <DataContext.Provider value={{ data, setData, number, setNumber }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/uncompleted" element={<Uncompleted />} />
              <Route path="/completed" element={<Completed />} />
            </Routes>
          </BrowserRouter>
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
