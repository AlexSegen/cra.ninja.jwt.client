import React, { useState, createContext } from 'react';
import ApiService from "../services/api.service";

export const NotesContext = createContext();


const NotesContextProvider = ({ children }) => {

	const [notes, setNotes] = useState([]);
	const [note, setNote] = useState({ id: null, title: "", description: ""});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const GetNotes = () => {

		setLoading(true);

		ApiService.get('/notes').then(response => {

			setNotes(response.data);
			setLoading(false);

		}).catch(err => {
			setLoading(false);
			setNotes([]);

			if (err.response) {
				setError(err.response.data.message)
				return;
			}

			setError(err.message);

		});
	}


	const SetNote = () => { 

		setLoading(true);

		const {title, content} = note;
		
		const isUpdating = !!note._id;

		ApiService.customRequest({
			url: isUpdating ? "/notes/" + note._id : "/notes",
			method: isUpdating ? "PUT" : "POST",
			data: { title, content }
		}).then(response => {

			if(isUpdating) {
				const index = notes.findIndex(n => n._id === response.data._id);
				notes[index] = response.data;
				setNotes([...notes]);
			} else {
				setNote(response.data);
				setNotes([...notes, response.data]);
			}
			
			setLoading(false);

		}).catch(err => {
			setLoading(false);
			if (err.response) {
				setError(err.response.data.message)
				return;
			}
			setError(err.message)
		});

	}

	const DeleteNote = note => {

		setLoading(true);

		ApiService.delete('/notes/' + note._id).then(() => {

			setNotes([...notes.filter(item => item._id !== note._id)])
			setLoading(false);

		}).catch(err => {
			setLoading(false);

			if (err.response) {
				setError(err.response.data.message)
				return;
			}
			setError(err.message);
		});

	};

	return (
		<NotesContext.Provider value={{ GetNotes, SetNote, DeleteNote, setNote, note, notes, loading, error }}>
			{children}
		</NotesContext.Provider>
	);


}
export default NotesContextProvider;