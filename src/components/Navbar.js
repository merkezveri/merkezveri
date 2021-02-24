import React from 'react';
import logo from '../figures/logo_without_slogan.svg';

function Navbar() {
    return (
        <div>
            <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">
                    <img src={logo} className="image" alt='Logo' />
                </a>

                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <ul class="navbar-nav px-3 d-none d-md-block">
                    <li class="nav-item text-nowrap">
                        <a class="nav-link" href="https://twitter.com/merkezveri" target="_blank" rel="noreferrer"><i class="fab fa-twitter navbar-icon"></i> @merkezveri</a>
                    </li>
                </ul>
            </header>            
        </div>
    )
}

export default Navbar
