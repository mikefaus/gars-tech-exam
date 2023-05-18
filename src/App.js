import "./App.css";
// Components
import AppFooter from "./Components/AppFooter/AppFooter";
import AppHeader from "./Components/AppHeader/AppHeader";
import Sidebar from "./Components/SideMenu/Sidebar";

// Libraries
import AppRoutes from "./AppRoutes";



function App() {
  return (
    <div className="App">  
        <AppHeader />
        <div className="SideMenuAndPageContent">          
          <Sidebar/>
          <AppRoutes/>
        </div>
        <AppFooter />
        
    </div>
  );
}
export default App;
