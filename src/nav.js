import React from "react";


function Navbar() {
    return (
        <>
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
            </header>
            <div class="offers">
                <p>Join us this Earth Day by recycling your Apple devices.‡ <span><a href="">Recycle for free {">"}</a></span></p>
            </div>
        </>
    )
}

export default Navbar;