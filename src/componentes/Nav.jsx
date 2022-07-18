function nav() {
    return(
        
        <nav className="nav_static">
                <div className="logo_pequeno">OR.</div>
                <i className="fa-solid fa-bars"></i>
                <ul className="nav-items">
                    <li><a href="#">home</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <ul className="menu logo-items">
                        <li className="logo active">Orestes Fleitas</li>
                    </ul>
                    <li><a href="#">PROJECTS</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
        </nav>
        
    )
}
export default nav;