import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { mapDispatchToProps, mapStateToProps } from './connect';

function Home(props) {

  var navigate = useNavigate();

  var signOutEvent = (event) => {
    props.signOutHandler()
  }

  var clearSessionEvent = () => {
    sessionStorage.clear();
    navigate("/");
  }

  return (
    <div className='homeContainer'>
      <div className='navbarContainer'>

        <div className='logoContainer'>
          <img src="/myLogo.png" alt="" className='logoImage' />
        </div>

        <div className='navBtnContainer'></div>

        <div className='userDetailContainer'>

          <div className='userDetailTextContainer'>
            <p className='navName'>{JSON.parse(sessionStorage.getItem("loginObject"))?.name}</p>
            <p className='navUserName'>{JSON.parse(sessionStorage.getItem("loginObject"))?.userName}</p>
          </div>
          <div className='signOutDiv' onClick={(event)=>signOutEvent(event)}>
            <p className='signOutBtn'><i class="fa-solid fa-right-from-bracket"></i></p>
          </div>

        </div>

      </div>
      {console.log(sessionStorage.getItem("loginObject"))}
      {(props.state?.login.status === false) ? clearSessionEvent() : ''}
    </div>

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)