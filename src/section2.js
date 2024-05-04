import react from 'react';

function Section2Box1(props)
{
    return(
        <>
        <div className='box'>
           <div className='bg_image'>
                   <img src={props.img} width={'100%'} height={'100%'} alt='img'/>
           </div>
           <div className='text'>
                <h1>{props.heading}</h1>
                <h2>{props.slogn}</h2>
                <button className="btn-1"><a >{props.btn1Val}</a></button>
                <button className="btn-2"><a >{props.btn2Val}</a></button>
           </div>
           </div>
        </>
    )
}
function Section2Box2(props)
{
    return(
        <>
        <div className='box'>
           <div className='bg_image'>
                   <img src={props.img} width={'100%'} height={'100%'} alt='img'/>
           </div>
           <div className='text'>
                <img src={props.heading} alt='img'></img>
                <h1>{props.slogn}</h1>
                    <h2></h2>
                    <button className="btn-1"><a > {props.btn1Val}</a></button>
                    <button className="btn-2"><a>{props.btn2Val}</a></button>
           </div>
           </div>
        </>
    )
}




function section2main() {
    return (
      <section className='section2'>
         <Section2Box1 img='images\promo_iphone15pro__e48p7n5x3nsm_large.jpg'
          heading='iPhone 15 Pro' slogn='Titanium. So strong. So light. So Pro.'
          btn1Val='learn more' btn2Val='Buy'
          >
         </Section2Box1>
         <Section2Box1 img='images/promo_iphone15_announce__fmxxi8r9fkuy_large.jpg'
          heading='iPhone 15' slogn='New camera. New design. Newphoria.'
          btn1Val='learn more' btn2Val='Buy'
          >
         </Section2Box1>
         <Section2Box1 img='images\promo_ipad__fioegapg12qi_large.jpg'
          heading='MacBook Air' slogn='Lean. Mean. M3 machine.'
          btn1Val='learn more' btn2Val='Buy'
          >
         </Section2Box1>
         <Section2Box2 img='images\promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg'
          heading='images\promo_logo_apple_watch_series_9__ckz0hbex0yeu_large.png' slogn='Smarter. Brighter. Mightier.'
          btn1Val='learn more' btn2Val='Buy'
          >
         </Section2Box2>
      </section>
    );
  }

  export default section2main;