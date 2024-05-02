import react from 'react';

function Section2Part1()
{
    return(
        <>
        <div className='box1'>
           <div className='bg_image'>
                   <img src='images\promo_macbook_air_m3__e43jegok3wuq_large.jpg' width={'100%'}/>
           </div>
           <div className='text'>
                
           </div>
           </div>
        </>
    )
}
function Section2Part2()
{
    return(
        <>
        <div className='box2'>
           <div className='bg_image'>
                   <img src='images\promo_macbook_air_m3__e43jegok3wuq_large.jpg' width={'100%'}/>
           </div>
           <div className='text'>
                <img src='images\logo_tradein__d1fpktgipvki_large.png'></img>
           </div>
           </div>
        </>
    )
}




function section2main() {
    return (
      <section className='section2'>
         <Section2Part1></Section2Part1>
         <Section2Part2></Section2Part2>
      </section>
    );
  }

  export default section2main;