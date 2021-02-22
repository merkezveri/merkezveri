import React from 'react';
import SidebarItem from "./SidebarItem";

const sidebarItemList = [
{
    "title" : "Üretim İstatistikleri",
    "id" : "collapseUretim",
    "items" : [
        {
        "name" : "Gayri Safi Yurtiçi Hasıla",
        "link" : "/"
    },
    {
        "name" : "Sanayi Üretim Endeksii",
        "link" : "/"
    },
    {
        "name" : "İmalat Sanayi Kapasite Kullanım Oranları",
        "link" : "/"
    }
    ],
},
{
    "title" : "Yatırım İstatistikleri",
    "id" : "collapseYatırım",
    "items" : [
        {
        "name" : "İnşaat İstatistikleri",
        "link" : "/"
    },
    {
        "name" : "Konut Fiyat Endeksi",
        "link" : "/"
    },
    {
        "name" : "Kurulan ve Kapanan Şirket",
        "link" : "/"
    }
    ],
}
]

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
