import Image from 'next/image'
import React from 'react'
import PhoneImage4 from "../assets/PhoneImage4.svg"
import WatchImage1 from "../assets/WatchImage1.svg"

function Products() {

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

    const styles = {
        main: "flex flex-row w-full items-center justify-between mt-20",
        itemDiv: "w-max flex flex-col items-start justify-center space-y-2 reveal fade-left",
        text: "text-4xl tracking-wider"
    }

    return (
        <div className={styles.main}>
            <div className={styles.itemDiv}>
                <Image src={PhoneImage4} />
                <h2 className={styles.text}>OBSIDIAN (1)</h2>
            </div>
            <div className={styles.itemDiv}>
                <Image src={WatchImage1} />
                <h2 className={styles.text}>RAVN (1)</h2>
            </div>
        </div>
    )
}

export default Products
