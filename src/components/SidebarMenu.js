import React from 'react';
import SidebarItem from "./SidebarItem";

import sidebarItemList from '../sidebarItemList';

function SidebarMenu() {
    return (
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse ">
                <div class="position-sticky pt-3">
                {
                    sidebarItemList.map((item) => <SidebarItem item = {item} />)
                }
                </div>
            </nav>
    )
}

export default SidebarMenu
