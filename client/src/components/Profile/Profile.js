import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import auth from '../../reducers/auth';

const Profile = (props) => {

    const { profile } = props;
    const successMessage = useRef(null)

    const getProfileInfo = () => {
        if (profile.profile) {
            var data = {}
            data.first_name = profile.profile.first_name;
            data.last_name = profile.profile.last_name;
            data.phone = profile.profile.phone;
            data.email = profile.profile.email;
            return data;
        }
        return {}
    }

    const [values, setValues] = useState(getProfileInfo());
    const [error, setError] = useState('');



    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4>{values.first_name} {values.last_name}</h4>
\                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <ul className="list-group list-group-flush">


                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {values.email}
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        {values.phone}
                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Address</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Bay Area, San Francisco, CA
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    'profile': state.auth.profile
})

export default connect(mapStateToProps)(Profile);