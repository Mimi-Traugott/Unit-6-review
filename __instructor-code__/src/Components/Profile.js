import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../redux/reducer';
import axios from 'axios';

const Profile = (props) => {
    // console.log(props)

    const logout = () => {
        axios.post('/api/logout').then(res => {
            props.logout()
            props.history.push('/')
        })
    }

    return(
        <div>
            <p>{props.user.user_id}</p>
            <p>{props.user.user_email}</p>
        </div>
    )
}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps, {logout})(Profile);