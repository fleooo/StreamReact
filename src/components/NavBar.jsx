import {Link} from 'react-router-dom';
import React,{ useState } from 'react';

const NavBar = ({ onSearchChange }) => {
   
    

    return(
        <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container col">
                <Link to='/' className="navbar-brand text-primary title">FLEOFLIX</Link>
            </div>
            <div className=" col">
            <form className="d-flex" role="search">
                <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search"  onChange={onSearchChange} />
                <button className="btn btn-outline-primary" type="submit"><img src="" alt="" />Search</button>
            </form>
            </div>
            <Link to='/fav' className="m-3 d-flex justify-content-end col fw-b">Favoris</Link>
           
        </nav>
        </div>
    )
};

export default NavBar