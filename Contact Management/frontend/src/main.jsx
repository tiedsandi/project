import { BrowserRouter, Route, Routes } from "react-router";

import AddressCreate from "./components/Address/AddressCreate.jsx";
import AddressEdit from "./components/Address/AddressEdit.jsx";
import ContactCreate from "./components/Contact/ContactCreate.jsx";
import ContactDetail from "./components/Contact/ContactDetail.jsx";
import ContactEdit from "./components/Contact/ContactEdit.jsx";
import ContactList from "./components/Contact/ContactList.jsx";
import DashboardLayout from "./components/DashboardLayout.jsx";
import HomePage from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";
import { StrictMode } from "react";
import UserLogin from "./components/User/UserLogin.jsx";
import UserLogout from "./components/User/UserLogout.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import UserRegister from "./components/User/UserRegister.jsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<Layout />}>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="users">
            <Route path="profile" element={<UserProfile />} />
            <Route path="logout" element={<UserLogout />} />
          </Route>

          <Route path="contacts">
            <Route index element={<ContactList />} />
            <Route path="create" element={<ContactCreate />} />
            <Route path=":id">
              <Route index element={<ContactDetail />} />
              <Route path="edit" element={<ContactEdit />} />
              <Route path="addresses">
                <Route path="create" element={<AddressCreate />} />
                <Route path=":addressId/edit" element={<AddressEdit />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
