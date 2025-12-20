import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const isActive = (path, { includeChildren = false } = {}) => {
        const current = location.pathname;
        if (includeChildren) {
            return current === path || current.startsWith(`${path}/`) ? "active" : "";
        }
        return current === path ? "active" : "";
    };
    return (
        <>

            <header class="fixed-header shadow-sm">
                <div class="navbar navbar-expand-md navbar-dark bg-teal-600">
                    <img src="/assets/images/favicons/android-chrome-192x192.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                    <h6 class="mt-1">Zeeshan Ali</h6>
                    <span class="mt-1 ml-2 ml-auto">SOLUTION ARCHITECT | CSPO | CSM </span>
                    
                </div>

                <div class="navbar navbar-expand-md navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-navigation" aria-controls="navbar-navigation" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

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
                                <Link to="/services" className={`navbar-nav-link ${isActive("/services", { includeChildren: true })}`} style={{ marginRight: 20 }}> <i class="icon-briefcase mr-2"></i>Services</Link>
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
            </header>

            <div class="page-content pt-0 with-fixed-header">

                {/* Main content */}
                <div class="content-wrapper">

                    {/* Content area */}
                    <div class="content pt-3" style={{ paddingLeft:"0px", paddingRight:"0px", }}>
                        {/* <div id="root"> </div> */}
                        <Outlet></Outlet>




                    </div>
                    {/* /content area */}

                </div>
                {/* /main content */}

            </div>

            <div class="navbar navbar-expand-lg navbar-light d-none d-lg-flex">
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
