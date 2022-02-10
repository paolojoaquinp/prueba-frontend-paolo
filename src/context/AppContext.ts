import React from "react";
type State =  /* { team: [{
    'id': String,
    'image': String,
    'name': String,
    'role': String,
}]} */ any;

export const AppContext = React.createContext<
   {state: State} | undefined
>(undefined);

export default AppContext;