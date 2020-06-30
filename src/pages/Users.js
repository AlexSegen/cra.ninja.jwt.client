import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/page-header';
import UsersList from '../components/UsersList';
const Users = () => {

    return (
        <Layout>
            <PageHeader title="Notes"/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-10">
                        <p>This is the Users Page.</p>
                    </div>
                    <div className="col-sm-auto">
                        <button type="button" className="btn btn-success">Create user</button>
                    </div>
                </div>
                <UsersList/>
            </div>
        </Layout>)
     
}
 
export default Users;