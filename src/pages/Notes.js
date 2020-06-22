import React from 'react';
import { useAuth } from '../helpers/auth';

import Layout from '../components/Layout';
import NotesList from '../components/NotesList';
const Notes = () => {

    const {checkPermissions} = useAuth();

    return checkPermissions('notes:read') ? ( 
        <Layout>
            <div className="text-left">
                <h1>Notes</h1>
                <p>This is the Notes Page.</p>
                
                {
                    checkPermissions('notes:create') && <button type="button" className="btn btn-success">Create note</button>
                }
                
                <br/><br/>
                <NotesList/>
            </div>
        </Layout>
     ) : (
        <Layout>
            <div className="text-center">
                <h1>Not Authorized</h1>
                <p>You don't have permissions to see page.</p>
            </div>
        </Layout>
     )
}
 
export default Notes;