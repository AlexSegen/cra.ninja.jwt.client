import React from 'react'
import Router from './Router';
import NotesContextProvider from './context/NotesContext';

const App = () => {

    return (
        <NotesContextProvider>
            <Router/>
        </NotesContextProvider>
    );
}

export default App;