import React, { useEffect, useContext } from 'react';
import { useAuth } from '../helpers/auth';
import { timeAgo } from '../helpers/utils';
import { NotesContext } from '../context/NotesContext';

const NotesList = () => {

    const { GetNotes, DeleteNote, setNote, loading, error, notes  } = useContext(NotesContext);
    const {checkPermissions, isAdmin, user } = useAuth();

    const grantAction = (rule, author) => {
        return ((checkPermissions(rule) && author) && author._id === user._id) || isAdmin
    }

    useEffect(() =>{
        GetNotes()
    }, []);

    return notes && notes.length > 0 ? (
    <>

        {
            error && <div className="alert text-danger text-center p-2">{error}</div>
        }

        {
            loading && <div className="alert text-info text-center p-2">Loading data...</div>
        }

        <table className="table table-hover table-borderless">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Created</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>

        {
            notes.map((note, index)=> (
                <tr  key={note._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{note.title}</td>
                    <td>{note.user && <> {note.user.first_name} {note.user.last_name}</>}</td>
                    <td>{timeAgo(note.createdAt)}</td>
                    <td>
                        {
                            grantAction('notes:update', note.user) && <button onClick={()=> setNote(note)} data-toggle="modal" data-target="#staticBackdrop" type="button" className="btn btn-default btn-sm text-info">Edit</button>
                        }

                        {
                            grantAction('notes:delete', note.user) && <button type="button" onClick={()=> DeleteNote(note)} className="btn btn-default btn-sm text-danger">Delete</button>
                        }
                    </td>
                </tr>
            ))
        }

        </tbody>
        </table>

    </>) : (
    
    <>There are no notes created.</>)

}


export default NotesList;