import './App.css';
import Sidebar from './Sidebar';
import Chats from "./Chats";
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
function App() {

  return (
    <div className="app">

      <div className="app__body">
        <Router>
        <Sidebar />
          <Switch>
            
            <Route path="/rooms/:roomId">
            
              <Chats />
            </Route>
            <Route exactpath="/">
              
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
