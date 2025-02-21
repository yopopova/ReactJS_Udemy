import { Route, Routes } from "react-router-dom";
import "./App.css";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <>
      {/* <h1>Let's started!</h1> */}

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
      </Routes>
    </>
  );
}

export default App; 