import Homepage from "./pages/Home/Homepage"; 
import "./App.css"; 
import { Switch, Route} from "react-router-dom"; 
import Shop from "./pages/shop/Shoppage"; 
import Header from "./components/Header/Header"; 

function App() {
  return (
    <div className="App">
      <Header  />
       <Switch>
         <Route exact  path='/' component={Homepage}  />
         <Route  path='/shop/hats' component={Shop}  />
       </Switch>
    </div>
  );
}

export default App;
