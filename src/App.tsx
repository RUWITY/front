import { Route, Routes } from "react-router-dom";

import Main from "pages/Main";

import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className=" ">123</div>}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  );
}
export default App;
