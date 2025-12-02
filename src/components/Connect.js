function ConnectTiles() {
    return (
<>
        
        <div className="mb-3">
            <div className="row row-tile g-0">

                {/* LEFT COLUMN ----------------------------------------- */}
                <div className="col">

                    {/* GitHub */}
                    <a
                        href="https://github.com/gecezeeshan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light w-100 flex-column rounded-0 rounded-top-start py-2"
                    >
                        <i className="icon-github text-dark icon-2x mb-1"></i>
                        GitHub
                    </a>

                    {/* Twitter */}
                    <a
                        href="https://twitter.com/gecezeeshan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light w-100 flex-column rounded-0 rounded-bottom-start py-2"
                    >
                        <i className="icon-twitter text-info icon-2x mb-1"></i>
                        Twitter
                    </a>
                </div>

                {/* RIGHT COLUMN ----------------------------------------- */}
                <div className="col">

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/gecezeeshan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light w-100 flex-column rounded-0 rounded-top-end py-2"
                    >
                        <i className="icon-linkedin text-primary icon-2x mb-1"></i>
                        LinkedIn
                    </a>

                    {/* Facebook */}
                    <a
                        href="https://facebook.com/gecezeeshan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light w-100 flex-column rounded-0 rounded-bottom-end py-2"
                    >
                        <i className="icon-facebook text-primary icon-2x mb-1"></i>
                        Facebook
                    </a>
                </div>

            </div>
        </div>
        </>
    );
}

export default ConnectTiles;
