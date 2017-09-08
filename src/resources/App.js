import React from 'react';
import UsersList from './containers/users_list.js';
import UserDetail from './containers/user_details.js';
require('./css/main.css')

const App = () => (
    <div>
        <div className='user-list-users'>
            <h3>Users:</h3>
            <div className='row top-legend'>
                <div className='col m4 s4'>
                    User name:</div>
                <div className='col m4 s4'>
                    User ID :</div>
                <div className='col m4 s4'>
                    Number of deivces :
                </div>
                <hr></hr>
            </div>
            <UsersList/>
        </div>
        <div className='user-list-details'>
            <h3>Details:</h3>
            <div className='row top-legend'>
                <div className='col m3 s3'>
                    User name:</div>
                <div className='col m3 s3'>
                    User ID :</div>
                <div className='col m3 s3'>
                    GH profile :
                </div>
                <div className='col m3 s3'>
                    Number of devices :
                </div>

            </div>
            <UserDetail/>
        </div>
    </div>
)

export default App;
