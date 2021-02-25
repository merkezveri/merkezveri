import React from 'react';
import { Link } from 'react-router-dom';
var uniqid = require('uniqid');

function SidebarItem(props) {
    return (
    <React.Fragment>
            {
                <li className="nav-item" key={uniqid()} >
                    <Link className="nav-link" to={`/data/${props.item.id}`}>
                        <i className="far fa-file-alt me-1"></i>
                        {props.item.name}
                    </Link>
                </li>   
            }
    </React.Fragment>
    )
}

export default SidebarItem
