'use client'
import { useState } from "react"
import { isMobile } from "react-device-detect"
import Carousel from "react-multi-carousel"

type Props = {
    sources: string[]
    clothName: string
}

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export function ClothPictureCarousel({ sources, clothName }: Props) {
    const [currentSource, setCurrentSource] = useState(sources?.[0])
    return <Carousel
        // afterChange={(previous, state) => {
        //     console.log("after change")
        //     let nextSource = sources[previous+1] ?? sources?.[0]
        //     setCurrentSource(nextSource)
        // }}
        responsive={responsive} 
        draggable={false}
        swipeable={false}
        className="w-full">
        <img className="w-full" src={currentSource} alt={clothName} />
    </Carousel>
}