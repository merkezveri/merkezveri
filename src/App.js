import './dashboard.css';
import './mycss.css';
import Navbar from "./components/Navbar";
import SidebarMenu from "./components/SidebarMenu";
import Main from "./components/Main";
import {useEffect,useState } from 'react';



//Third party
import { HashRouter, Route } from "react-router-dom";


function App() {

//Data değişkeni ve onu düzenleme fonksiyonu
const [Data, setData] = useState([{
  "name": "Gayri Safi Yurtiçi Hasıla (Çeyrek)",
  "description":"",
  "category": "Üretim İstatistikleri",
  "sidebarcategoryicon": "fas fa-industry",
  "id": 10001,
  "flourishid": 5395265
}]);
// Verileri github üzerinden raw olarak çekip json'a dönüştürüyoruz.
const getData=()=>{
  fetch('https://raw.githubusercontent.com/merkezveri/merkezveri.github.io/master/src/data.json')
  .then(response => response.json())
  .then(data => setData(data));
}

//App yüklendiğinde getData() ile verileri çekiyoruz.
useEffect(() => {
  getData();
 },[]); //2. parametre olarak [] vermezsek sürekli istek atıyor.

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
