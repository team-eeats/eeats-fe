import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import MealTime from "./Components/MealTime/MealTime";
import BreakfastList from "./Components/MealList/BreakfastList";
import LunchList from "./Components/MealList/LunchList";
import DinnerList from "./Components/MealList/DinnerList";
import AllergyNotification from "./Components/AllergyNotification/AllergyNotification";
import NoAllergy from "./Components/AllergyNotification/NoAllergy";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/MealTime" element={<MealTime />} />
        <Route path="/BreakfastList" element={<BreakfastList />} />
        <Route path="/LunchList" element={<LunchList />} />
        <Route path="/DinnerList" element={<DinnerList />} />
        <Route path="/AllergyNotification" element={<AllergyNotification />} />
        <Route path="/NoAllergy" element={<NoAllergy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
