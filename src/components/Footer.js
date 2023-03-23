const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="main-footer foot-row">
                <div className="foot-col foot-col1">
                    <h3>Navigation</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Quiz</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                </div>
                <div className="foot-col foot-col2">
                    <h3>Socials</h3>
                    <ul>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
                <div className="foot-col foot-col3">
                    <img className="foot-logo" src="./ieeesiesgst_logo.png" alt="logo" width="100px"/>
                    <h2>IEEE SIESGST</h2>
                    <p>
                        Plot 1 - C/D/E , Sector 5,<br></br>
                        Nerul(East), Navi Mumbai - 400706<br></br>
                    </p>
                    <p>Phone: 9876543210<br></br>
                    Email: <a href="mailto:ieee@siesgst.ac.in">ieee@siesgst.ac.in</a></p>
                    <a href="https://ieeesiesgst.in/" target="_blank">Visit our official website</a>
                </div>
            </div>
            <hr />
            <div className="copyright foot-row">
                <p>Copyright &copy; 2023 IEEE SIESGST. All Rights Reserved</p>
            </div>
        </div>
    );
}
 
export default Footer;