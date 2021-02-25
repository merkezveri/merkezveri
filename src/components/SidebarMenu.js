import React from 'react';

// My components
import SidebarCategory from "./SidebarCategory";
import sidebarItemList from '../sidebarItemList';


function SidebarMenu() {
    
    //Aşağıdaki durumu sor!
    // eslint-disable-next-line
    const uniqueCategories = [... new Set(sidebarItemList.map(item => item.category))]

    return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse ">
                <div className="position-sticky pt-3">
                    {
                        uniqueCategories.map(category => {
                            let filterCategories = sidebarItemList.filter((item) => item["category"] === category);
                            return (
                                <SidebarCategory category = {category} filteredItems = {filterCategories}/>
                            )
                            }
                            )
                    }
                </div>
            </nav>
    )
}

export default SidebarMenu
