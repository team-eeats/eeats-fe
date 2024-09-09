import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import { PhotoVote } from "./Components/PhotoVote";
import { ConpletePhotoVote } from "./Components/ConpletePhotoVote";
import DonutGraph from "./Components/DonutGraph";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/asdf" element={<PhotoVote />} />
        <Route path="/fdsa" element={<ConpletePhotoVote />} />
        <Route path="/donut" element={<DonutGraph />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
