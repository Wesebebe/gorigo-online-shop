import React from "react";
import {Link} from "react-router-dom";
import {ShoppingCart} from "phosphor-react";


function NavBar(){
    return(
        <div className="NavBar">
            <div className="Links">
                <Link to="/"> shop</Link>
                <Link to ="/Cart">
                    <ShoppingCart/>
                    </Link>


            </div>
        </div>
    )
}
export default NavBar;