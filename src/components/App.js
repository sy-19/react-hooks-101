import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer } from "react";
import AppContext from "../contexts/AppContext";
import reducer from '../reducers';
import EventForm from "./EventForm";
import Events from "./Events";


console.log({AppContext})


const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  console.log(state, 'in App.js')

  return (
    <AppContext.Provider value={"Hello, I'm a Provider."}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
  
      </div>
    </AppContext.Provider>
  );
}

export default App;
