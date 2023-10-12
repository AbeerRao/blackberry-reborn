import Image from 'next/image'
import React from 'react'
import LandingImage from "../assets/LandingImage.svg"

function Landing() {
    return (
        <div className="w-[90vw] rounded-2xl">
            <Image src={LandingImage} className="" />
        </div>
    )
}

export default Landing
