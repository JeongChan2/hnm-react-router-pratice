import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../redux/reducers/authenticateSlice';


const NavBar = () => {
  const [width, setWidth] = useState(0);
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();

  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home', 'Sale', '지속가능성'];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  }
  const goHome = () => {
    navigate("/")
  }
  const logout = () => {
    dispatch(authActions.LogoutSuccess());
  }

  const search = (event) => {
    if (event.key === "Enter"){
      let keyword = event.target.value;
      
      navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>
      
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div>
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        <div className='login-button' onClick={authenticate?logout:goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate?'로그아웃':'로그인'}</div>
        </div>
      </div>



      <div className='nav-section'>
        <img onClick={goHome} className="logo-img" alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s'/>
      </div>



      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>



        <div className='search-box'>
          <FontAwesomeIcon icon={faSearch}/>
          <input type='text' placeholder='제품검색' onKeyDown={(event)=>search(event)}/>
        </div>

      </div>

    </div>
  )
}

export default NavBar
