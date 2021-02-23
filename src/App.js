import './dashboard.css';
import './mycss.css';
import Navbar from "./components/Navbar";
import SidebarMenu from "./components/SidebarMenu";
import Main from "./components/Main";
import sidebarItemList from './sidebarItemList';

//Third party
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
        <div class="container-fluid">
          <div class="row">
          <Route path="/" component={SidebarMenu} />
          
          <Route 
            path="/data/:id"
            render= {renderProps => {
              const item = sidebarItemList.find(
                  item => item.id === renderProps.match.params.id
              );
              return <Main item = {item} />
            }
            }
            
            />
          
          </div>
        </div>
    </div>
  );
}

export default App;
