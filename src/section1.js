import React from "react";

let section1part2Data =[
    {
         imgsrc:"images\hero_iphone_family_a__c7v3mvx3jv42_largetall.jpg",
         productname:"iPhone",
         slogn:"our most powerful cameras yet. Ultrafast chips.And USB-C.",
         btn1Val:"Learn more",
         btn2Val:"Shop iPhone",
    },
    {
        imgsrc:"images\hero_logo_apple_vision_pro.png",
        productname:"MacBook Air",
        slogn:"lean.Mean.M3 machine",
        btn1Val:"Learn more",
        btn2Val:"Buy",
   }
]

 function Section1Part1()
{
    return(
        <>
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
        </>
    )
}

function Section1Part2(props)
{
    return(
        <>
            <div className="part2">
                <div>
                    <img src={props.imgsrc} alt="img"></img>
                </div>
                <div className="part2_text">
                    <h1>{props.heading}</h1>
                    <h2>{props.slogn}</h2>
                    <button className="btn-1"><a href="#">{props.btn1Val} </a></button>
                    <button className="btn-2"><a href="#" >{props.btn2Val}</a></button>
                </div>
            </div>
        </>
    )
}


function main() {
    return (
      <section>
         <Section1Part1></Section1Part1>
        { section1part2Data.map((val)=>{
            console.log(val.imgsrc);
            return(
              < Section1Part2 
                 imgsrc={"images\hero_iphone_family_a__c7v3mvx3jv42_largetall.jpg"}
                 heading={val.productname}
                 slogn={val.slogn}
                 btn1Val={val.btn1Val}
                 btn2Val={val.btn2Val}
              />
            )
        })}
      </section>
    );
  }

  export default main;