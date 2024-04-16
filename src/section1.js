import React from "react";
function section1_part1()
{
    return(
        <>
          <section1 className="section1">
            <div className="part1">
                <video autoPlay loop width={'100%'}>
                    <source src="images/xlarge.mp4" >
                    
                    </source>
                </video>
                <div className="part1_text">
                    <img src="images\hero_logo_apple_vision_pro.png"></img>
                    <h2>You've never seen everything like this before.</h2>
                    <button className="btn-1"><a href="#">Learn more</a></button>
                    <button className="btn-2"><a href="#" >Buy</a></button>
                </div>
            </div>
          </section1>
        </>
    )
}

export default section1_part1;