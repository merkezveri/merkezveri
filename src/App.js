import './dashboard.css';
import './mycss.css';
import Navbar from "./components/Navbar";
import SidebarMenu from "./components/SidebarMenu";
import Main from "./components/Main";
import {useEffect,useState } from 'react';



//Third party
import { HashRouter, Route } from "react-router-dom";


function App() {
const [Data, setData] = useState([{
  "name": "Gayri Safi Yurtiçi Hasıla (Çeyrek)",
  "category": "Üretim İstatistikleri",
  "sidebarCategoryIcon": "fas fa-industry",
  "id": 10001,
  "flourish_id": 5395265
}]);

const getData=()=>{
  fetch('https://raw.githubusercontent.com/merkezveri/merkezveri.github.io/master/src/data.json')
  .then(response => response.json())
  .then(data => setData(data));
  console.log(1)
}

useEffect(() => {
  getData();
 },[]);

  return (
    <div className="App">
    <HashRouter>
      <Route
        path="/" 
        render= {() => {return <Navbar itemList = {Data} />}}
      />
        <div className="container-fluid">
          <div className="row">
          
          <Route
            path="/"
            render= {() => {return <SidebarMenu itemList = {Data} />}}
          />
          
          <Route 
            exact
            path="/"
            render= {() => {return <Main item = {Data[0]} />}}  
            />   
          <Route 
            path="/data/:id"
            render= {renderProps => {
              const item = Data.find(
                  item => item.id.toString() === renderProps.match.params.id
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
