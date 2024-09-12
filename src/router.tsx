import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout";
import Suggest from "./Pages/Suggest"
import SuggestModify from "./Pages/Suggest/Modify";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/suggestModify" element={<SuggestModify/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
