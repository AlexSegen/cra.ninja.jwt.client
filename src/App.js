import React from 'react'
import Router from './Router';
import NotesContextProvider from './context/NotesContext';
import UsersContextProvider from './context/UsersContext';

const App = () => {

    return (
        <UsersContextProvider>
            <NotesContextProvider>
                <Router/>
            </NotesContextProvider>
        </UsersContextProvider>
    );
}

export default App;