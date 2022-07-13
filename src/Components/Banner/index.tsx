import React from "react";
import Image from 'mui-image';
import Carousel from "react-material-ui-carousel";
import { Card } from "@mui/material";


export default function Banner() {
    return (
        <Card>
            <Carousel
                autoPlay={true}
                navButtonsAlwaysInvisible={true}
                indicators={false}
                height={"320px"}
            >
                <Image 
                    fit="cover"
                    src="https://source.unsplash.com/random/800x600" 
                />
                
            </Carousel>
        </Card>
    )
}