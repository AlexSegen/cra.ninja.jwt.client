import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/page-header';

import {useAuth} from '../helpers/auth';

const Badge = ({granted}) => {
    return (
        <span className={`badge font-weight-normal badge-${granted ? 'success':'light text-muted'}`}>{granted ? 'Yes':'No'}</span>
    )
}

const Private = () => {

    const { user, checkPermissions } = useAuth();

    const { first_name, last_name } = user;
    
    return ( 
        <Layout>
            <PageHeader title="Private"/>
            <div className="container py-5">
                <p>Hello, <strong>{first_name} {last_name}</strong>.</p>
                <p>This is your private section.</p>

                <hr/>
                
                <h4>Permissions:</h4>

                <h5 className="mt-4">Notes</h5>
                <div className="pl-3">
                    <table className="table-borderless">
                        <tbody>
                            <tr>
                                <td>Read</td>
                                <td><Badge granted={checkPermissions('notes:read')}/></td>
                            </tr>
                            <tr>
                                <td>Create</td>
                                <td> <Badge granted={checkPermissions('notes:create')}/></td>
                            </tr>
                            <tr>
                                <td>Update</td>
                                <td><Badge granted={checkPermissions('notes:update')}/></td>
                            </tr>
                            <tr>
                                <td>Delete</td>
                                <td><Badge granted={checkPermissions('notes:delete')}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
     );
}
 
export default Private;