import React from 'react';

// My components
import SidebarCategory from "./SidebarCategory";
import SearchBar from "./SearchBar";
var uniqid = require('uniqid');

function SidebarMenu(props) {
    //Aşağıdaki durumu sor!
    // eslint-disable-next-line
    const uniqueCategories = [... new Set(props.itemList.map(item => item.category))]

    return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse ">
                <div className="position-sticky pt-3">
                    <div className="d-md-none">
                        <SearchBar itemList={props.itemList}/>
                    </div>
                    
                    {
                        uniqueCategories.map(category => {
                            let filterCategories = props.itemList.filter((item) => item["category"] === category);
                            return (
                                <SidebarCategory category = {category} filteredItems = {filterCategories} key={uniqid()}/>
                            )
                            }
                            )
                    }
                </div>
            </nav>
    )
}

export default SidebarMenu
