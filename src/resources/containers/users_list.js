import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/details';

class UsersList extends Component {
    //creating list of users
    createListUsers() {
        return this.props.users.map((user) => {
            return (
                <div className='row user-row' key={user.id} onClick={() => this.props.selectUser(user)}>
                    <div className='col m4 s4 user-name'>
                        {user.name} {user.surname}</div>
                    <div className='user-id col m4 s4'>
                        {user.id}</div>
                    <div className='col m4 s4'>
                        {user.equipment.length}</div>
                </div>
            )
        });
    }
    render() {
        return (
            <ul>
                {this.createListUsers()}
            </ul>
        )
    }
}
//passing props to action of selscting user, to desplay details
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser
    }, dispatch)
}
//moving state (users info) to props
function mapStateToProps(state) {
    return {users: state.users};
}
export default connect(mapStateToProps, matchDispatchToProps)(UsersList);
