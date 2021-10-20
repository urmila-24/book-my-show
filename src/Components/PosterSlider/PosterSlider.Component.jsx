import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {

    

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

    const {posters,title,subtitle,isDark,config} = props;

    const  currentSettings = config ? config: settings ;
    return (<>
    <div className='flex flex-col items-start my-2'>
        <h3 className={`text-2xl font-bold 
        ${isDark ? "text-white" : "text-black"}`}
        >{title}
        </h3>

        <p className={`text-sm ${
                        isDark ? "text-white" : "text-gray-800"
                    }`}
        >{subtitle}
        </p>

        </div>
        <Slider {...currentSettings}>
        {posters.map((each) => (
                    <Poster {...each} isDark={isDark}/>
                ))}
            
        </Slider>
        </>
        );
};

export default PosterSlider ;