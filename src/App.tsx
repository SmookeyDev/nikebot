import { Switch, Route, Redirect } from "react-router-dom";
import Bottombar from "./components/bottombar";
import Settings from "./pages/settings";
import Tasks from "./pages/tasks";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-rootblue">
      <div>
        <AnimatePresence>
          <Switch>
            <Redirect exact from="/" to="/tasks" />
            <Redirect exact from="/index.html" to="/tasks" />
            <Route path="/tasks" component={Tasks} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </AnimatePresence>
      </div>
      <Bottombar />
    </div>
  );
}

export default App;
