import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Users from "./Pages/Users"
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import Footer from "./Components/Footer";
import Dashboard from "./Components/Dashborad"; 
import './App.css';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <div class="wrapper">
          <Header/>
          <Sidebar/>
            <Route path="/Home" component={Home}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Users" component={Users}/> 
            <Route path="/AddUser" component={AddUser}/>
            <Route path="/EditUser/edit/:id" component={EditUser}/>
            <Route path="/Dashboard" component={Dashboard}/>
          <Footer/> 
      </div>
    </Switch>
  );
}

export default App;
