import React from 'react';
import { useAuth } from '../helpers/auth';

import Layout from '../components/Layout';
import PageHeader from '../components/page-header';
import NotesList from '../components/NotesList';
import CreateNoteModal from '../components/CreateNoteModal';
const Notes = () => {

    const {checkPermissions} = useAuth();

    return checkPermissions('notes:read') ? ( 
        <Layout>
            <PageHeader title="Notes"/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-10">
                        <p>This is the Notes Page.</p>
                    </div>
                    <div className="col-sm-auto">
                        {
                            checkPermissions('notes:create') && <button data-toggle="modal" data-target="#staticBackdrop" type="button" className="btn btn-success">Create note</button>
                        }
                    </div>
                </div>
                <NotesList/>
            </div>
            <CreateNoteModal/>
        </Layout>
     ) : (
        <Layout>
            <div className="container py-5">
                <h1>Not Authorized</h1>
                <p>You don't have permissions to see page.</p>
            </div>
        </Layout>
     )
}
 
export default Notes;