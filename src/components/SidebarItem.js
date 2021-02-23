import React from 'react';
import { Link } from 'react-router-dom';



function SidebarItem(props) {
    return (
    <React.Fragment>
            {
                <li class="nav-item">
                    <Link class="nav-link" to={`/data/${props.item.id}`}>
                        <i class="far fa-file-alt me-1"></i>
                        {props.item.name}
                    </Link>
                </li>   
            }
    </React.Fragment>
    )
}

export default SidebarItem
