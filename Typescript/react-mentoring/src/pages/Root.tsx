import MainHeader from "../components/Navigation/MainHeader";
import { Outlet } from "react-router";
import SessionsContextProvider from "../store/sessions-context";

export default function Root() {
  return (
    <SessionsContextProvider>
      <MainHeader />
      <Outlet />
    </SessionsContextProvider>
  );
}
