import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "active" : "";
    return (
        <>

            <div class="navbar navbar-expand-md navbar-dark bg-teal-600">
                <h6 class="mt-1">Zeeshan Ali</h6>
                <span class="mt-1 ml-2">SOLUTION ARCHITECT | CSPO | CSM </span>
                
            </div>

            <div class="navbar navbar-expand-md navbar-light">

                <div class="navbar-collapse collapse" id="navbar-navigation">

                    <ul class="navbar-nav navbar-nav-highlight">
                        <li class="nav-item">
                            <Link to="/" className={`navbar-nav-link ${isActive("/")}`} style={{ marginRight: 20 }}> <i class="icon-home4 mr-2"></i>Home</Link>
                            {/* <a href="index.html" class="navbar-nav-link active">
                                <i class="icon-home4 mr-2"></i>
                                Dashboard
                            </a> */}
                        </li>

                        <li class="nav-item nav-item-levels mega-menu-full">
                            <Link to="/services" className={`navbar-nav-link ${isActive("/services")}`} style={{ marginRight: 20 }}> <i class="icon-briefcase mr-2"></i>Services</Link>
                            {/* <a href="#" class="navbar-nav-link dropdown-toggle">
                                <i class="icon-make-group mr-2"></i>
                                Services
                            </a> */}

                        </li>

                        <li class="nav-item">
                            <Link to="/contact" className={`navbar-nav-link ${isActive("/contact")}`} style={{ marginRight: 20 }}>
                                <i class="icon-envelop3 mr-2"></i>Contact
                            </Link>

                        </li>
                    </ul>


                </div>
            </div>

            <div class="page-content pt-0 mt-3">

                {/* Main content */}
                <div class="content-wrapper">

                    {/* Content area */}
                    <div class="content">
                        {/* <div id="root"> </div> */}
                        <Outlet></Outlet>




                    </div>
                    {/* /content area */}

                </div>
                {/* /main content */}

            </div>

            <div class="navbar navbar-expand-lg navbar-light">
                <div class="text-center d-lg-none w-100">
                    <button type="button" class="navbar-toggler dropdown-toggle" data-toggle="collapse"
                        data-target="#navbar-footer">
                        <i class="icon-unfold mr-2"></i>
                        Footer
                    </button>
                </div>

                {/* <div class="navbar-collapse collapse" id="navbar-footer">
                    <span class="navbar-text">
                        &copy; 2015 - 2018. <a href="/">Limitless Web App Kit</a> by <a
                            href="http://themeforest.net/user/Kopyov" target="_blank" rel="noopener noreferrer">Eugene Kopyov</a>
                    </span>

                    <ul class="navbar-nav ml-lg-auto">
                        <li class="nav-item"><a href="https://kopyov.ticksy.com/" class="navbar-nav-link" target="_blank" rel="noopener noreferrer"><i
                            class="icon-lifebuoy mr-2"></i> Support</a></li>
                        <li class="nav-item"><a href="http://demo.interface.club/limitless/docs/" class="navbar-nav-link"
                            target="_blank" rel="noopener noreferrer"><i class="icon-file-text2 mr-2"></i> Docs</a></li>
                        <li class="nav-item"><a
                            href="https://themeforest.net/item/limitless-responsive-web-application-kit/13080328?ref=kopyov"
                            class="navbar-nav-link font-weight-semibold"><span class="text-pink-400"><i
                                class="icon-cart2 mr-2"></i> Purchase</span></a></li>
                    </ul>
                </div> */}
            </div>

        </>
    );
}
