import React, { ReactElement } from 'react';
import { DecoratedComponentClass } from 'redux-form';
import {ConnectedUserForm} from "./UserForm";


const submitFunction = (e) => {
    console.log("FORM SUBMIT!", e);
};



export default function App() : ReactElement {
    return (
        <div>
            <h2>Hello React Starter Kit</h2>
            <ConnectedUserForm onSubmit={submitFunction}/>
        </div>
    )
}
