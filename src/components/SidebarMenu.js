import React from 'react'

function SidebarMenu() {
    return (
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse ">
                <div class="position-sticky pt-3">
                    <div name="uretim">
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Üretim İstatistikleri</span>
                            <a data-bs-toggle="collapse" href="#collapseUretim" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-caret-down" ></i>
                            </a>
                        </h6>
                        <div class="collapse show" id="collapseUretim">
                            <ul class="nav bg-light flex-column mb-2">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        <i class="far fa-file-alt me-1"></i>
                                        Gayri Safi Yurtiçi Hasıla
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        <i class="far fa-file-alt me-1"></i>
                                        Sanayi Üretim Endeksi
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        <i class="far fa-file-alt me-1"></i>
                                        İmalat Sanayi Kapasite Kullanım Oranları
                                    </a>
                                </li>                                                                        
                            </ul>
                        </div>
                    </div>
                    <div name="yatirim">
                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Yatırım İstatistikleri</span>
                            <a data-bs-toggle="collapse" href="#collapseYatırım" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-caret-down" ></i>
                            </a>
                        </h6>
                        <div class="collapse" id="collapseYatırım">
                            <ul class="nav flex-column bg-light mb-2">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        <i class="far fa-file-alt me-1"></i>
                                        Gayri Safi Yurtiçi Hasıla
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        <i class="far fa-file-alt me-1"></i>
                                        Sanayi Üretim Endeksi
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        <i class="far fa-file-alt me-1"></i>
                                        İmalat Sanayi Kapasite Kullanım Oranları
                                    </a>
                                </li>                                                                        
                            </ul>
                        </div>
                    </div>                                           
                </div>
            </nav>
    )
}

export default SidebarMenu
