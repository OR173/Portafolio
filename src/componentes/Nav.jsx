

// function Header() {
//     return(
        
//         <div classNameName="hed">
//             <h1>Este es el hesssder</h1>
//         </div>

//     )
// }
// export default Header;


function nav() {
    return(
        
        // <div className="hed">
        //     <h1>Este es el hesssder</h1>
        // </div>

        
            
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