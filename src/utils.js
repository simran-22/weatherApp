import Weather from "./components/Weather";
// import Users from "./components/Users";
import Cat from "./components/Cat";
import Jokes from "./components/Jokes";
import Coin from "./components/Coin";
import NewForm from "./components/NewForm";
import FinalForm from "./components/FinalForm";
import FormComponent from "./components/FormComponent";
// import FormComponentFormik from "./components/FormComponentFormik";

export const routesItem = [
  { link: "/", element: Weather, lable: "Weather" },
  { link: "/cat", element: Cat, lable: "Cat" },
  { link: "/newform", element: NewForm, lable: "NewForm" },
  { link: "/finalform", element: FinalForm, lable: "FinalForm" },
  // { link: "/users", element: Users, lable: "Users" },
  { link: "/coin", element: Coin, lable: "Coins" },
  { link: "/jokes", element: Jokes, lable: "Jokes" },
  { link: "/formcomponent", element: FormComponent, lable: "FormComponent" },
  // {
  //   link: "/formcomponentformik",
  //   element: FormComponentFormik,
  //   lable: "FormComponentFormik",
  // },
];
