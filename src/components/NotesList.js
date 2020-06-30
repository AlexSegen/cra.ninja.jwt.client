import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../store/actions/notes';
import { useAuth } from '../helpers/auth';
import { Link } from 'react-router-dom';
import { timeAgo } from '../helpers/utils';

const NotesList = () => {

    const dispatch = useDispatch();
    const { loading, error, notes } = useSelector(state => state.notes);
    const {checkPermissions} = useAuth();

    useEffect(() =>{
        dispatch(getNotes())
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
                            checkPermissions('notes:update') && <Link to={"/notes/"+note._id} className="btn btn-default btn-sm text-info">Edit</Link>
                        }

                        {
                            checkPermissions('notes:delete') && <button type="button" className="btn btn-default btn-sm text-danger">Delete</button>
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