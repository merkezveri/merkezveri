import './dashboard.css';
import './mycss.css';
import Navbar from "./components/Navbar";
import SidebarMenu from "./components/SidebarMenu";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="container-fluid">
        <div class="row">
          <SidebarMenu />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
