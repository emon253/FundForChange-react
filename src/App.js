import Layout from "./Component/Layout";
import NavigationBarMain from "./Component/NavigationBarMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Event from "./Component/events/Event";
import Login from "../src/pages/Login";
import "./styles/App.css";
import Signup from "../src/pages/Signup";
import AdminLayout from "./admin/Component/AdminLayout";
import DashboardHome from "./admin/Component/pages/DashboardHome";
import EventDashboard from "./admin/Component/pages/EventDashboard copy";
import UsersDashboard from "./admin/Component/pages/UsersDashboard";
import RequestEventForm from "./pages/RequestEventForm";
import EventProfile from "./Component/events/EventProfile";
import Services from "./pages/Services";
import UserLayout from "./User/Component/UserLayout";
import UserDashboardHome from "./User/Component/pages/UserDashboardHome";
import UserSettings from "./User/Component/UserSettings";
import MyEvents from "./Component/events/MyEvents";
import ErrorsPage from "./Component/messages/ErrorsPage";
import { useState } from "react";
import CreateAdmin from "./admin/Component/pages/CreateAdmin";
function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  const [role,setRole] = useState(user?user.role:'')
  return (
    <>
      <BrowserRouter>
        <NavigationBarMain />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/request-event"
            element={
              user ? (
                <Layout>
                  <RequestEventForm />
                </Layout>
              ) : (
                <Layout>
                  <Login />
                </Layout>
              )
            }
          />
          <Route
            path="/event"
            element={
              <Layout>
                <Event />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              role === 'ROLE_ADMIN' || role === 'ROLE_SupperAuthority' ?

              <AdminLayout>
                <DashboardHome />
              </AdminLayout>
              :
              <Layout>
                <ErrorsPage/>
              </Layout>
            }
          />
          <Route
            path="/admin-event"
            element={
             role === 'ROLE_ADMIN' || role === 'ROLE_SupperAuthority' ?
              <AdminLayout>
                <EventDashboard />
              </AdminLayout>
               :
               <Layout>
                 <ErrorsPage/>
               </Layout>
            }
          />
          <Route
            path="/create-admin"
            element={
             role === 'ROLE_SupperAuthority' ?
              <AdminLayout>
                <CreateAdmin />
              </AdminLayout>
               :
               <Layout>
                 <ErrorsPage/>
               </Layout>
            }
          />
          <Route
            path="/users"
            element={
              role === 'ROLE_ADMIN' || role === 'ROLE_SupperAuthority' ?

              <AdminLayout>
                <UsersDashboard />
              </AdminLayout>
                :
                <Layout>
                  <ErrorsPage/>
                </Layout>
            }
          />
          <Route
            path="/usr/:id"
            element={
              <UserLayout>
                <UserDashboardHome />
              </UserLayout>
            }
          />
          <Route
            path="/my-event/:id"
            element={
              <UserLayout>
                <MyEvents />
              </UserLayout>
            }
          />
          <Route
            path="/usr/setting"
            element={
              <UserLayout>
                <UserSettings />
              </UserLayout>
            }
          />
          <Route path="/event/:id" element={<EventProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
