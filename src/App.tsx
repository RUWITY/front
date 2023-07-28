import { Route, Routes } from "react-router-dom";

import Main from "pages/Main";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
export default App;
