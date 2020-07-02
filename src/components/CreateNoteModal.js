import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNote } from '../store/actions/notes';

const CreateNoteModal = () => {

    const [newNote, setNewNote] = useState({});

    const dispatch = useDispatch();
    const { note, loading, error } = useSelector(state => state.notes);


    const handleChange = e =>{
        const value = e.target.value;
        setNewNote({
          ...newNote,
          [e.target.name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createNote(newNote));
        setNewNote(note);
    }

    return ( 
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form  onSubmit={handleSubmit} className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Create Note</h5>
                        <button disabled={loading} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group" >
                            <input type="text" className="form-control" name="title" onChange={handleChange}  value={newNote.title} placeholder="Title"/>
                        </div>
                        <div className="form-group" >
                            <textarea className="form-control" name="content" onChange={handleChange}  value={newNote.content} placeholder="Content">

                            </textarea>
                        </div>
                        {
                            error && <div className="alert text-danger text-center p-2">{error}</div>
                        }
                    </div>
                    <div className="modal-footer">
                        
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" disabled={loading}>Close</button>
                        <button onClick={handleSubmit} type="button" className="btn btn-primary" disabled={loading}>{loading ? 'Proccessing...' : 'Save Data'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default CreateNoteModal;