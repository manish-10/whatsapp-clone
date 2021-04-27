import './App.css';
import Sidebar from './Sidebar';
import Chats from "./Chats";
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import {useStateValue} from './StateProvider'
function App() {
  const [{user},dispatch] =useStateValue()
  {console.log(user)}
  return (
    <div className="app">
        {!user?(
          <Login/>
        ):(

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
        )}
    </div>
  );
}

export default App;
