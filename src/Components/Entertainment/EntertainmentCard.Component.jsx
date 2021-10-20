import React from 'react';
import Slider from 'react-slick';
 const EntertainmentCard = (props) => {
    return (
        <>
         <div className='w-full h-30 px-2 py-2'>
             <img className='w-full h-full rounded-xl' src={props.src} alt='entertainment'/>
             </div>   
        </>
    )
}

const  EntertainmentCardSlider = (Image) =>{
    const EntertainmentImage = [
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png",
        "https://lh3.googleusercontent.com/bRmM3h7W7p1IMpR1RTZS4mulIZKeW0aJWvyNkj1Ha3VVoW-DdQ99bj46juYLG9JCsjHr=s85",
        "https://lh3.googleusercontent.com/YKKGJrTU1y1ete5F2zMSE7qfpDsj7L0mPSPdhAeANvcybGUINAsASFDuhXGBK_Y8fTHe=s85",
        "https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png",
        "https://lh3.googleusercontent.com/466yo7tRaQKhKet2kjP4wfL7Az2HbUDukzwND7c-nle0c1JkhoGo23hUjXU7jCfrTgGcrw=s85",
        "https://lh3.googleusercontent.com/SypMvImRRf7fc2ui28jq_bvzzFzSZgp7iXi45YdyAHvU9PfFx4txlwik_in4uWdpvG-p0A=s85",
        "https://lh3.googleusercontent.com/5h_gNVFK7f89UCyXxZTPLvXfxKU1RA1xFdJLGeOhultbzQBHpzsARLIPjCUEqcXV959CH_s=s85",
        "https://lh3.googleusercontent.com/jkKijGFnb2oRrgg7FSewahj9QOyx_DECYLJ1XhidIels-8BktcPr4R7TuIMiLTYFFaHY=s85",

    ];

    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow:5,
        slideToScroll: 4,
        InitialSlide:0,

        responsive: [{
            breakpoints :1024 ,
            settings:{
                slidesToShow :3,
                slideToScroll:2,
                infinite:true,
            },
        },
       
        { 
            breakpoints :600,
            settings:{
                slidesToShow :3,
                slideToScroll:1,
                InitialSlide : 1,
              
            },
        },
        { 
            breakpoints :480,
            settings:{
                slidesToShow :2,
                slideToScroll:1,
              
            },
        },
    ],
    };

        return(<>
            <Slider {...settings}>
                {EntertainmentImage.map((Image) => (
                    <EntertainmentCard src ={Image}/>
                ))}
            </Slider>
        </>)

};
export default EntertainmentCardSlider;