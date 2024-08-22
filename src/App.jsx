import Navbar from "./components/Navbar";
// import Test from "./components/Test";
// import FormComponent from "./components/FormComponent";
// import FormComponentFormik from "./components/FormComponentFormik";
import { Routes, Route } from "react-router-dom";
import { routesItem } from "./utils";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {routesItem.map((item) => {
          return (
            <Route
              key={item.link}
              path={item.link}
              element={<item.element />}
            ></Route>
          );
        })}
        {/* <Users /> */}
        {/* <Cat /> */}
        {/* <Coin />}
        <FormComponentFormik />

        <Test />
        <FormComponent /> */}
      </Routes>
    </div>
  );
};

export default App;
