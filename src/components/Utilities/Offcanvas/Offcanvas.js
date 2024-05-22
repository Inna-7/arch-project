import React, { useState } from "react";
import { Link } from "react-router-dom";

const Offcanvas = ({ onOpne, onClose }) => {
  const [searchText, setSearchText] = useState("")

  return (
    <React.Fragment>
      <div className={`offcanvas-menu ${onOpne ? 'active' : ''}`}>
        <span className="menu-close" onClick={() => onClose(!onOpne)}>
          <i className="fas fa-times"></i>
        </span>
        <form role="search" id="searchform" className="searchform">
          <input type="text" name="s" id="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div id="cssmenu3" className="menu-one-page-menu-container">
          <ul id="menu-one-page-menu-2" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to={'/'}>{'Home'}</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to={'/about'}>{'About Us'}</Link>
            </li>

            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to={'/service'}>{'Services'}</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to={'/product'}>{'Products'}</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to={'/media'}>{'Media'}</Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to={'/contact'}>{'Contact Us'}</Link>
            </li>
          </ul>
        </div>
        <div id="cssmenu2" className="menu-one-page-menu-container">
          <ul id="menu-one-page-menu-1" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to={'#'}><span>{'(321) 342-9233'}</span></Link>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom">
              <Link to={'#'}><span>{'info@archsoftdev.com'}</span></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`offcanvas-overly ${onOpne ? 'active' : ''}`}
        onClick={() => onClose(!onOpne)}></div>
    </React.Fragment>
  );

}

export default Offcanvas;