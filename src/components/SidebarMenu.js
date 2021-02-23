import React from 'react';

// My components
import SidebarItem from "./SidebarItem";
import sidebarItemList from '../sidebarItemList';

//sidebarItemList.map((item) => console.log(item))

function SidebarMenu() {
    return (
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse ">
                <div class="position-sticky pt-3">
                    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-2 text-muted">
                        <span>İstatistikler</span>
                    </h6>
                    <ul class="nav flex-column bg-light mb-2">
                    {
                        sidebarItemList.map((item) => <SidebarItem item = {item} />)
                    }
                    </ul>
                </div>
            </nav>
    )
}

export default SidebarMenu
