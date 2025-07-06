import MainHeader from "../components/Navigation/MainHeader";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Root() {
  return (
    <Provider store={store}>
      <MainHeader />
      <Outlet />
    </Provider>
  );
}

// import MainHeader from "../components/Navigation/MainHeader";
// import { Outlet } from "react-router";
// import SessionsContextProvider from "../store/sessions-context";

// export default function Root() {
//   return (
//     <SessionsContextProvider>
//       <MainHeader />
//       <Outlet />
//     </SessionsContextProvider>
//   );
// }
