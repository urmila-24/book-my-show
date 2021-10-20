import React from "react";
import Navbar from "../Components/Navbar/Navbar.Component";



const DefaultLayout =(props) => {
    return(
        <div>
            <Navbar/>
            
            {props.children}
            <div>Footer</div>

        </div>
    );
};

export default DefaultLayout ;