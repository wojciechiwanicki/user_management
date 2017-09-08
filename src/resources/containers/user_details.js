import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteItem} from '../actions/delete_item';


class UserDetails extends Component {
    // creating list of equipment items !!! functionality of removing item is not working yet
    createListItems() {
        return this.props.user.equipment.map((equipment) => {
            return (
                <div className='row' key={equipment.id}>
                    <div className='col m3 s3'>{equipment.brand}</div>
                    <div className='col m3 s3'>{equipment.model}</div>
                    <div className='col m3 s3'>{equipment.serial}</div>
                    <div className='col m3 s3'>
                        <button onClick={() => this.props.deleteItem(equipment)}>DELETE
                        </button></div>
                </div>

            )
        });
    }
    render() {
        //case, when nobody is selected, info is displayed
        if (!this.props.user) {
            return (
                <div className='no-user-alert'>Select user, to see details</div>
            )
        }
        return (
            <div className='user-details'>
                <div className='user-details-name row'>
                    <div className='col m3 s3'>{this.props.user.name} {this.props.user.surname}</div>
                    <div className='col m3 s3'>
                        {this.props.user.id}</div>
                    <div className='col m3 s3'>
                        <a href={'https://github.com/' + this.props.user.github}>
                        {this.props.user.github}</a>
                    </div>
                    <div className='col m3 s3'>
                        {this.props.user.equipment.length}</div>
                </div>

                <div className='user-details-equipment'>
                    <div className='row middle-legend'>
                        <div className='col m3 s3'>
                            Brand:</div>
                        <div className='col m3 s3'>
                            Model:</div>
                        <div className='col m3 s3'>
                            Serial:
                        </div>
                    </div>
                    <hr></hr>
                    <ul>{this.createListItems()}</ul>
                </div>
            </div>
        )
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteItem: deleteItem
    }, dispatch)
}

//creating props from map
function mapStateToProps(state) {
    return {user: state.activeUser};
};

export default connect(mapStateToProps,  matchDispatchToProps)(UserDetails);
