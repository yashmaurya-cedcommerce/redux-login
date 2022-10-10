import React, { useEffect } from 'react';
import { TextField } from '@shopify/polaris';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { mapDispatchToProps, mapStateToProps } from '../connect';

function Login(props) {

    const navigate = useNavigate();

    var submitDone = (event) => {
        event.preventDefault();

        var tempUsername = props.state?.login.userName;
        var tempPassword = props.state?.login.password;

        var opt = {
            method: "POST",
            headers: {
                authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMSIsInJvbGUiOiJhcHAiLCJpYXQiOjE1MzkwNTk5NzgsImlzcyI6Imh0dHBzOlwvXC9hcHBzLmNlZGNvbW1lcmNlLmNvbSIsImF1ZCI6ImV4YW1wbGUuY29tIiwibmJmIjoxNTM5MDU5OTc4LCJ0b2tlbl9pZCI6MTUzOTA1OTk3OH0.GRSNBwvFrYe4H7FBkDISVee27fNfd1LiocugSntzxAUq_PIioj4-fDnuKYh-WHsTdIFMHIbtyt-uNI1uStVPJQ4K2oYrR_OmVe5_zW4fetHyFmoOuoulR1htZlX8pDXHeybRMYlkk95nKZZAYQDB0Lpq8gxnTCOSITTDES0Jbs9MENwZWVLfyZk6vkMhMoIAtETDXdElIdWjP6W_Q1kdzhwqatnUyzOBTdjd_pt9ZkbHHYnv6gUWiQV1bifWpMO5BYsSGR-MW3VzLqsH4QetZ-DC_AuF4W2FvdjMRpHrsCgqlDL4I4ZgHJVp-iXGfpug3sJKx_2AJ_2aT1k5sQYOMA"
            }
        }

        fetch(`https://fbapi.sellernext.com/user/login?username=${tempUsername}&password=${tempPassword}`, opt)
            .then(res => res.json())
            .then(temp => {
                console.log(temp);
                if (temp.success === true) {
                    props.submitHandler(true);
                }
                else {
                    props.submitHandler(false);
                }
            })
    }

    useEffect(() => {
        if (props.state.login.status === true) {
            sessionStorage.setItem("loginObject", JSON.stringify(props.state.login));
            navigate('/home')
        }

    }, [props.state.login.status])

    return (
        <div className='loginContainer'>

            <p className='loginHeading'>Login</p>

            <form className='loginForm' onSubmit={(event) => submitDone(event)}>

                <div className='inputDiv'>
                    <p className='inputLabel'>Customer Name: </p>
                    <TextField

                        value={props.state?.login.name}
                        onChange={(value) => props.onChangeEvent(value, "name")}
                        autoComplete="off"
                    />
                    <p className='inputDescription'>We'll use this customer name to inform you on future changes to Polaris.</p>

                </div>

                <div className='inputDiv'>
                    <p className='inputLabel'>Username: </p>
                    <TextField

                        value={props.state?.login.userName}
                        onChange={(value) => props.onChangeEvent(value, "userName")}
                        autoComplete="off"
                    />
                    <p className='inputDescription'>We'll use this email address to inform you on future changes to Polaris.</p>

                </div>

                <div className='inputDiv'>
                    <p>Password: </p>
                    <TextField

                        value={props.state?.login.password}
                        onChange={(value) => props.onChangeEvent(value, "password")}
                        autoComplete="off"
                    />
                    <p className='inputDescription'>We'll use this email address to inform you on future changes to Polaris.</p>
                </div>

                <div className='buttonDiv'>
                    <button type='submit' className='submitBtn' >Submit</button>
                </div>

                {(props.state?.login.status === false) ? <p className='errorMsg'>Wrong Credentials</p> : ''}

            </form>

            {/* {(props.state?.login.status === true) ? navigate('/home') : ''} */}

        </div>
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)
