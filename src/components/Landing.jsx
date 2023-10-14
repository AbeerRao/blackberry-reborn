import Image from 'next/image'
import React from 'react'
import LandingImage from "../assets/LandingImage.svg"

function Landing() {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            } else {
            reveals[i].classList.remove("active");
            }
        }
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", reveal);
        reveal();
    }

    return (
        <div className="w-[90vw] rounded-2xl reveal">
            <Image src={LandingImage} className="" />
        </div>
    )
}

export default Landing
