import React from 'react';
import { Link } from 'react-router-dom';



function SidebarItem(props) {
    return (
    <React.Fragment>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>{props.item.title}</span>
            <Link data-bs-toggle="collapse" to={"#"+props.item.id} role="button" aria-expanded="false" aria-controls="collapseExample">
            <i class="fas fa-caret-down" ></i>
            </Link>
        </h6>
        <div class="collapse" id={props.item.id}>
            <ul class="nav flex-column bg-light mb-2">
            {
                props.item.items.map((item) =>
                <li class="nav-item">
                    <Link class="nav-link" to={`/data/${item.link}`}>
                        <i class="far fa-file-alt me-1"></i>
                        {item.name}
                    </Link>
                </li>                
                )
            }
            </ul>
        </div>
    </React.Fragment>
    )
}

export default SidebarItem
