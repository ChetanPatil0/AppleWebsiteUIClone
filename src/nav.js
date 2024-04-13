import React from "react";


function Navbar() {
    return (

        <header>
            <nav>
                <div className="logo">
                    <a href=""><i className="bi bi-apple"></i></a>
                </div>
                <div className="navbar">
                    <a >Store</a>
                    <a href="">Mac</a>
                    <a href="">iPad</a>
                    <a href="">Watch</a>
                    <a href="">Airpods</a>
                    <a href="">TV & Home</a>
                    <a href="">Entertainment</a>
                    <a href="">Accessories</a>
                    <a href="">Support</a>
                </div>
                <div className="cart">
                    <a href=""><i class="bi bi-search"></i></a>
                    <a href=""><i class="bi bi-bag"></i></a>
                </div>
            </nav>
            <div className="nav-sub-menu">
                <ul id="list1">
                    <li className="list-head">Shop</li>

                </ul>
                <ul >
                    <li className="list-head">Quick Links</li>
                    <li>Find a Store</li>
                    <li>Order Status</li>
                    <li>Apple trade in</li>
                    <li></li>
                </ul>
                <ul >
                    <li className="list-head">Shop Special Stores</li>
                    <li>Education</li>
                    <li>Busines</li>
                    <li>Government</li>
                    <li></li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar;