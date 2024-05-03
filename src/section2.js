import react from 'react';

function Section2Box1()
{
    return(
        <>
        <div className='box'>
           <div className='bg_image'>
                   <img src='images\promo_macbook_air_m3__e43jegok3wuq_large.jpg' width={'100%'}/>
           </div>
           <div className='text'>
                <h1>iPad</h1>
                <h2>Lovable. Drawable. Magical</h2>
                <button className="btn-1"><a href="#">learn more</a></button>
                <button className="btn-2"><a href="#" >Buy</a></button>
           </div>
           </div>
        </>
    )
}
function Section2Box2()
{
    return(
        <>
        <div className='box'>
           <div className='bg_image'>
                   <img src='images\promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg' width={'100%'}/>
           </div>
           <div className='text'>
                <img src='images\logo_hero_light__d7t8cya4x26a_large.png'></img>
                <h1></h1>
                    <h2></h2>
                    <button className="btn-1"><a href="#">Learn more</a></button>
                    <button className="btn-2"><a href="#" >Buy</a></button>
           </div>
           </div>
        </>
    )
}




function section2main() {
    return (
      <section className='section2'>
         <Section2Box1></Section2Box1>
         <Section2Box2></Section2Box2>
      </section>
    );
  }

  export default section2main;