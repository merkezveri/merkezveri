import React from 'react'
import SidebarItem from "./SidebarItem";
var uniqid = require('uniqid');

function SidebarCategory(props) {
    const category_id = uniqid();
    return (
        <div>
            <a className="sidebar-a" data-bs-toggle="collapse" href={"#"+category_id} role="button" aria-expanded="false" aria-controls="collapseExample">
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-3 text-muted">	
                <span>{props.category}</span>	
                <i className="fas fa-caret-down" ></i>
        </h6>
        </a>	
        <div className="collapse" id={category_id}>	
            <ul className="nav flex-column bg-light mb-2" key={uniqid()}>            
            {
             props.filteredItems.map((item) => {return <SidebarItem item = {item} />})
            }
            </ul>
        </div>
        </div>
    )
}

export default SidebarCategory
