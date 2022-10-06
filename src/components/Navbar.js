import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-info">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Shinkiari NEWS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">


                        <li className="nav-item "> <Link className="nav-link  fs-5 px-4 " to="/">General</Link></li>

                        <li className="nav-item"><Link className="nav-link fs-5 px-4 " to="/business">Business</Link> </li>

                        <li className="nav-item"><Link className="nav-link fs-5 px-4 " to="/entertainment">Entertainment</Link></li>

                        <li className="nav-item"><Link className="nav-link fs-5 px-4 " to="/health">Health</Link></li>

                        <li className="nav-item"> <Link className="nav-link fs-5 px-4 " to="/Science">Science</Link></li>

                        <li className="nav-item"> <Link className="nav-link fs-5 px-4 " to="/Technology">Technology</Link></li>

                        <li className="nav-item"> <Link className="nav-link fs-5 px-4 " to="/sports">Sports </Link></li>

                        <li className="nav-item"> <Link className="nav-link fs-5 px-4 " to="/cricket">Cricket </Link></li>


                    </ul>

                </div>
            </div>
        </nav>
    )

}

export default Navbar