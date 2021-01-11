import React, { useState, useEffect, useContext } from 'react';
import { timeAgo } from '../helpers/utils';
import UserModal from './ModalContent';

import { UsersContext } from '../context/UsersContext';

const UsersList = () => {

    const [selectedUser, setSelectedUser] = useState(null);
    const { GetUsers, loading, error, users } = useContext(UsersContext);

    useEffect(() =>{
        GetUsers()

    }, []);

    return <>


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
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Created</th>
                <th scope="col"></th>
                </tr>
            </thead>
        <tbody>

        {
            users && users.length > 0 ? (users.map((user, index)=> (
                <tr  key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{timeAgo(user.createdAt)}</td>
                    <td>
                        <button type="button" onClick={()=> setSelectedUser(user)} className="btn btn-default btn-sm text-info" data-toggle="modal" data-target="#staticBackdrop">Edit</button>
                        <button type="button" className="btn btn-default btn-sm text-danger">Delete</button>
                    </td>
                </tr>
            ))) : 
            (
                <tr>
                    <td colSpan="6">There are no users created.</td>
                </tr>
            )
        }

        </tbody>
        </table>

        <UserModal user={selectedUser}/>

    </>

}


export default UsersList;