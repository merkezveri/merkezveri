import React from 'react';



function SidebarItem(props) {
    return (
    <React.Fragment>
        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>{props.item.title}</span>
            <a data-bs-toggle="collapse" href={"#"+props.item.id} role="button" aria-expanded="false" aria-controls="collapseExample">
            <i class="fas fa-caret-down" ></i>
            </a>
        </h6>
        <div class="collapse" id={props.item.id}>
            <ul class="nav flex-column bg-light mb-2">
            {
                props.item.items.map((item) =>
                <li class="nav-item">
                    <a class="nav-link" href={item.link}>
                        <i class="far fa-file-alt me-1"></i>
                        {item.name}
                    </a>
                </li>                
                )
            }
            </ul>
        </div>
    </React.Fragment>
    )
}

export default SidebarItem
