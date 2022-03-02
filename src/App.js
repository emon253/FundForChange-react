import Layout from "./Component/Layout";
import NavigationBar from "./Component/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Event from "./Component/events/Event";
import Login from '../src/pages/Login'
import './styles/App.css'
import Signup from "../src/pages/Signup";
import AdminLayout from "./admin/Component/AdminLayout";
import DashboardHome from "./admin/Component/pages/DashboardHome";
import EventDashboard from "./admin/Component/pages/EventDashboard";
import UserDashboard from "./admin/Component/pages/UsersDashboard";
import RequestEventForm from "./pages/RequestEventForm";
import EventProfile from "./Component/events/EventProfile";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
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
            path="/services"
            element={
              <Layout>
                <RequestEventForm />
              </Layout>
            }
          />
           <Route
            path="/event"
            element={
              <Layout>
                <Event/>
              </Layout>
              
            }
          />
             <Route
            path="/login"
            element={
              <Layout>
                <Login/>
              </Layout>
              
            }
          />
          <Route
            path="/signup"
            element={
              <Layout>
                <Signup/>
              </Layout>
              
            }
          />
          <Route
            path="/admin"
            element={
                <AdminLayout>
                  <DashboardHome/>
                </AdminLayout>  
            }
          />
          <Route
            path="/admin-event"
            element={
                <AdminLayout>
                  <EventDashboard/>
                </AdminLayout>  
            }
          />
          <Route
            path="/users"
            element={
                <UserDashboard/>
            }
          />
          <Route
            path="/event/:id"
            element={
                <EventProfile/>
            }
          />
       
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
