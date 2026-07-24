function Navbar({

    openAbout,
    openServices,
    openContact

}) {

    return (

        <nav className="navbar">

            <div className="logo">

               <h1>RECOGE</h1> 
               <p>CONSTRUCTION</p>

            </div>

            <ul className="nav-links">

                <li>
                    <a href="#hero">
                        <button className="active">Home </button>
                        
                    </a>
                </li>

                <li>
                    <button onClick={openAbout}>
                        About us
                    </button>
                </li>

                <li>
                    <button onClick={openServices}>
                        Services
                    </button>
                </li>

                <li>
                    <a href="#projects">
                        <button>Our work</button>
                    </a>
                </li>

                

                <li>
                    <button onClick={openContact}>
                        Contact us
                    </button>
                </li>

            </ul>

        </nav>

    );

}

export default Navbar;