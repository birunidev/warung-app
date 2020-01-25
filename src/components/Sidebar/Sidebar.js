import React from 'react'
import Badge from 'react-bootstrap/Badge'
import './sidebar.scss'
import { Link } from 'react-router-dom'

const Sidebar = ({ showSidebar }) => {

    let style = "sidebar";

    if (showSidebar) {
        style = "sidebar show"
    }

    console.log(window.location.pathname)

    return (
        <div className={style}>
            <div className="list-nav">
                <ul>
                    <li className="active"><Link to="/">Menu</Link></li>
                    <li ><Link to="/order">My Orders </Link> <Badge pill variant="dark">
                        3
                        </Badge></li>
                    <li><button onClick={() => {
                        alert('oke')
                        window.open('', '_parent', '');
                        window.close();
                    }}>Exit</button>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;