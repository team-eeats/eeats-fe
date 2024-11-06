import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Suggest from "./Pages/Suggest";
import SuggestModify from "./Pages/Suggest/Modify";
import SuggestUpload from "./Pages/Suggest/Upload";
import LoginPage from "./Pages/loginPage";
import VotePage from "./Pages/votePage";
import { NoticePage } from "./Pages/NoticePage";
import { MySuggestPage } from "./Pages/MySuggestPage";
import Main from "./Pages/Main";
import Layout from "./Components/Layout";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/suggestModify" element={<SuggestModify />} />
          <Route path="/suggestUpload" element={<SuggestUpload />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/mysuggest" element={<MySuggestPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/vote" element={<VotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
