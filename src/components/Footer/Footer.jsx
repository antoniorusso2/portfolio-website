export default function Footer() {
    return (
        <>
            <footer className="footer py-4 backdrop-blur-sm">
                <div className="container">
                    <div className="row flex justify-between border-b-2 border-b-cyan-800 py-4">
                        <ul className="contacts-list">
                            {/* phone */}
                            <li className="contacts-item">
                                <p className="contacts-text">
                                    Telefono:{" "}
                                    <span className="phone">
                                        +39 328-4879342
                                    </span>
                                </p>
                            </li>
                            {/* email */}
                            <li className="contacts-item">
                                <p className="contacts-text">
                                    Email:{" "}
                                    <span className="email">
                                        russoantonio303@outlook.it
                                    </span>
                                </p>
                            </li>
                        </ul>

                        {/* socials */}
                        <ul className="social-list">
                            <li className="social-item inline-block">
                                <a
                                    className="social-link"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
                                        alt="linkedin"
                                    />
                                </a>
                            </li>
                            <li className="social-item inline-block">
                                <a
                                    className="social-link"
                                    href="https://github.com/antoniorusso2"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
                                        alt="github"
                                    />
                                </a>
                            </li>
                            <li className="social-item inline-block">
                                <a
                                    className="social-link"
                                    href="#"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                                        alt="instagram"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
