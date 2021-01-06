import React, {useState, useEffect, useContext} from 'react'
import modules from '../helpers/permissions';
import { UsersContext } from '../context/UsersContext';

const ModalContent = ({permissions, onToggle}) => {

    const [userPermissions, setUserPermissions] = useState([]);

    const togglePermission = e => {
        const value = e.target.value;
        let tmp = userPermissions.indexOf(value) > -1 ? userPermissions.filter(item => item !== value) : [...userPermissions, value];
        setUserPermissions(tmp)
        onToggle(tmp)
    }

    useEffect(()=> {
        setUserPermissions(permissions);
    }, [permissions])

    return ( 
        <div>
            {
                modules.map((item, index) => (
                    <div className="mb-2" key={"permission_"+index+item.name}>
                        <button className="btn btn-primary btn-sm btn-block" type="button" data-toggle="collapse" data-target={"#collapse"+index+item.name} aria-expanded="false" aria-controls={"collapse"+index+item.name}>
                            {item.name}
                        </button>
                        <div className="collapse" id={"collapse"+index+item.name}>
                            <div className="card card-body">
                                {
                                    item.permissions.map((perm, index)=> (
                                    <div key={'inputkey_'+index+perm.value} className="form-group form-check">
                                        <input
                                        onChange={togglePermission} 
                                        value={perm.value}
                                        checked={userPermissions.indexOf(perm.value) > -1}
                                        type="checkbox" className="form-check-input" id={"permcheck"+index+perm.value}  />
                                        <label className="form-check-label" htmlFor={"permcheck"+index+perm.value}>{perm.key}</label>
                                    </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}

const UserModal = ({user}) => {

    const [selectedUser, setSelectedUser] = useState(null);

    const { UpdateUser, loading, error } = useContext(UsersContext);

    const handleToggle = val => {
        setSelectedUser({
            ...selectedUser,
            ...{
                permissions: val
            }
        })
    }

    const savePermissions = () => {
        UpdateUser(selectedUser)
    }

    useEffect(()=> {
        setSelectedUser(user);
    }, [user])

    return ( 
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">User details</h5>
                    <button disabled={loading} type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {
                        user && (
                            <>
                                <h5>{user.first_name} {user.last_name}</h5>
                                <p>Permissions:</p>
                                <ModalContent permissions={user.permissions ? user.permissions : []} onToggle={handleToggle}/>
                            </>
                        )
                    }
                </div>
                <div className="modal-footer">
                    {
                        error && <div className="alert tex-danger text-center p-2">{error}</div>
                    }
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" disabled={loading}>Close</button>
                    <button onClick={savePermissions} type="button" className="btn btn-primary" disabled={loading}>{loading ? 'Proccessing...' : 'Save Data'}</button>
                </div>
                </div>
            </div>
        </div>
    )
}
 
export default UserModal;