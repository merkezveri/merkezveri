import './dashboard.css';
import './mycss.css';
import Navbar from "./components/Navbar";
import SidebarMenu from "./components/SidebarMenu";
import Main from "./components/Main";
import sidebarItemList from './sidebarItemList';

//Third party
import { HashRouter, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
    <HashRouter>
      <Route path="/" component={Navbar} />
        <div class="container-fluid">
          <div class="row">
          <Route path="/" component={SidebarMenu} />
          <Route 
            exact
            path="/"
            render= {() => {return <Main item = {sidebarItemList[0]} />}
            }  
            />   
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
    </HashRouter>
    </div>
  );
}

export default App;
