import axios from 'axios';
import React ,{useEffect,useState} from 'react';
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';
import Poster from '../Components/Poster/Poster.Component';

function HomePage() {
    const [recommendedMovies,setRecommendedMovies] = useState([]);
    const [premierMovies,setPremierMovies] = useState([]);
    const [onlineStreamEvents,setOnlineStreamEvents] = useState([]);

    useEffect (() => {
        const requestPopularMovies = async () => {
            const getPopularMovies= await axios.get('/movie/popular');
            setRecommendedMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);

    useEffect (() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies= await axios.get('/movie/top_rated');
            setPremierMovies(getTopRatedMovies.data.results);
        };
        requestTopRatedMovies();
    },[]);

    useEffect (() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies= await axios.get('/movie/upcoming');
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    },[]);

    

    // const PremierMovies = [
    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00122455-lwtatstyvd-portrait.jpg",
    //         title :"No Time to Die",
    //         subtitle :"Action / Adventure / Crime / Thriller",
    //     },

    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309402-krhwkssbul-portrait.jpg",
    //         title :"No Time to Die",
    //         subtitle :"Action / Adventure / Crime / Thriller",
    //     },

    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00304964-sppgefaccr-portrait.jpg",
    //         title :"No Time to Die",
    //         subtitle :"Action / Adventure / Crime / Thriller",
    //     },

    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312486-vmhtawzpws-portrait.jpg",
    //         title :"No Time to Die",
    //         subtitle :"Action / Adventure / Crime / Thriller",
    //     },

    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00300013-qlvkmafvwv-portrait.jpg",
    //         title :"No Time to Die",
    //         subtitle :"Action / Adventure / Crime / Thriller",
    //     },

    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312486-vmhtawzpws-portrait.jpg",
    //         title :"No Time to Die",
    //         subtitle :"Action / Adventure / Crime / Thriller",
    //     },

    //     {
    //         src:"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00300013-qlvkmafvwv-portrait.jpg",
    //         title :"No Time to Die",
    //         subtitle :"Action / Adventure / Crime / Thriller",
    //     },


    // ];

    // const OnlineStreamEvents = [
    //     {
    //         src :"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxNCBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-amnegbgdva-portrait.jpg",
    //         title :"The Nest",
    //         subtitle :"English",
    //     },

    //     {
    //         src :"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304009-nsnwqmxhqm-portrait.jpg",
    //         title :"The Nest",
    //         subtitle :"English",
    //     },

    //     {
    //         src :"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMSBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304004-cpfnbdagcz-portrait.jpg",
    //         title :"The Nest",
    //         subtitle :"English",
    //     },

    //     {
    //         src :"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316022-zensdmtbzj-portrait.jpg",
    //         title :"The Nest",
    //         subtitle :"English",
    //     },

    //     {
    //         src :"https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNiBPY3Qgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00137567-gwsbsedgtr-portrait.jpg",
    //         title :"The Nest",
    //         subtitle :"English",
    //     },
    // ];



    return (
        <>
           <HeroCarousel/>
           
                <div className='container mx-auto px-12 my-8'>
                    <h1 className='text-2xl font-bold text-gray-800 my-3'>
                        The Best of Entertainment
                    </h1>
                    <EntertainmentCardSlider/> 
                </div>
                <div className='container mx-auto px-12 my-8'>
                <PosterSlider  
                title="Recommended Movies" 
                subtitle="List of Recommended movies"
                posters={recommendedMovies}
                isDark={false}
                 />
                </div>
                <div className='bg-premier-800 py-12'>
                    <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                        <div className='hidden md:flex'>
                            <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' 
                            alt='Rupay' 
                            className='w-full h-full'/>
                        </div>
                        <PosterSlider  
                            title="Premiers" 
                            subtitle="Brand new releases every Friday"
                            posters={premierMovies}
                            isDark={true}
                            />
                    </div>
                </div>  
                <div className='container mx-auto px-12 my-8'>
                        <PosterSlider  
                        title="Online Streaming Events" 
                        subtitle=""
                        posters={onlineStreamEvents}
                        isDark={false}
                        />
                        </div> 
        </>
    );
}
export default  HomePage ;