import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import { PhotoVote } from "./Components/PhotoVote";
import { ConpletePhotoVote } from "./Components/ConpletePhotoVote";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/asdf" element={<PhotoVote />} />
        <Route path="/fdsa" element={<ConpletePhotoVote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
