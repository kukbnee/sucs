import { Route, Routes } from "react-router-dom";
import ManufactList from "../../components/ManufactList";
import Main from "../../components/Main";
import CarList from "../../components/CarList";
import Search from "../../components/Search";
import AreaList from "../../components/AreaList";
import ModelList from "../../components/ModelList";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/manufactList" element={<ManufactList />}></Route>
      <Route path="/areaList" element={<AreaList />}></Route>
      <Route path="/modelList" element={<ModelList />}></Route>
      <Route path="/carList" element={<CarList />}></Route>
    </Routes>
  );
  
}
export default MainRouter;