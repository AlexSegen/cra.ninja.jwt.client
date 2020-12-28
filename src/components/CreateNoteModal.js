import React, { useContext } from 'react'
import { NotesContext } from '../context/NotesContext';

const CreateNoteModal = () => {

    const { SetNote, setNote, note, loading, error } = useContext(NotesContext);

    const handleChange = e =>{
        const {value, name} = e.target;
        setNote({
          ...note,
          [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        SetNote(note)
    }


    return ( 
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form  onSubmit={handleSubmit} className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">{ note._id ? 'Update Note' : 'Create Note'  }</h5>
                        <button disabled={loading} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group" >
                            <input type="text" className="form-control" name="title" onChange={handleChange}  value={note.title} placeholder="Title"/>
                        </div>
                        <div className="form-group" >
                            <textarea className="form-control" name="content" onChange={handleChange}  value={note.content} placeholder="Content">

                            </textarea>
                        </div>
                        {
                            error && <div className="alert text-danger text-center p-2">{error}</div>
                        }

                        {
                            note._id && 
                            <div> 
                                <p>Created by: <span className="text-muted">{`${note.user.first_name} ${note.user.last_name}`}</span></p>
                            </div>
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