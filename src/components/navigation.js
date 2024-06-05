import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Avatar } from 'antd'

function IonIosMenu(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}><path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></path><path d="M432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></path><path d="M432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z" fill="currentColor"></path></svg>);
}




const navLinks = [

  {
      title: 'Blog',
      path: '/'
  },
  {
      title: 'Contact Us',
      path: '/contact'
  },
  {
    title: 'Post Viewer',
    path: '/post'
  }

]


export default function Navigation({ user }) {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <nav className="site-navigation" role="navigation">
            <span className="menu-title">My React Blog</span>
            <i className="ionicons icon ion-android-menu" onClick={() => setMenuActive(!menuActive)}>
                <IonIosMenu/>
            </i>
            <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    { navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                        ))
                    }
                </ul>
                <span className="menu-avatar-container">
                    <Avatar src="https://avatars.githubusercontent.com/u/52112884?v=4" size={38}/>
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
        </nav>
    )
}