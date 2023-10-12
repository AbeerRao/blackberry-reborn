import Image from 'next/image'
import React from 'react'
import PhoneImage1 from "../assets/PhoneImage1.svg"
import PhoneImage2 from "../assets/PhoneImage2.svg"
import PhoneImage3 from "../assets/PhoneImage3.svg"
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

function PhoneInfo() {

    const styles = {
        main: "flex flex-row items-center justify-center w-full space-x-5",
        leftDiv: "flex flex-col items-center justify-center w-1/3 h-full space-y-5",
        textDiv: "flex flex-row items-center justify-center w-full h-56 bg-[#EFEFEF] rounded-2xl",
        text: "text-xl text-[#8729FF] px-5 py-3 rounded-full border-[1px] border-black",
        imageDiv: "relative",
        icon1: "absolute top-1/2 -left-4 text-6xl cursor-pointer bg-black text-white rounded-full p-3",
        icon2: "absolute top-1/2 -right-4 text-6xl cursor-pointer bg-black text-white rounded-full p-3"
    }
    return (
        <div className={styles.main}>
            <div className={styles.leftDiv}>
                <div className={styles.textDiv}>
                    <p className={styles.text}>Premium</p>
                </div>
                <div className={styles.imageDiv}>
                    <Image src={PhoneImage1} />
                </div>
            </div>
            <div className={styles.leftDiv}>
                <div className={styles.imageDiv}>
                    <BsChevronLeft className={styles.icon1} />
                    <Image src={PhoneImage2} />
                    <BsChevronRight className={styles.icon2} />
                </div>
                <div className={styles.textDiv}>
                    <p className={styles.text}>Secure</p>
                </div>
            </div>
            <div className={styles.leftDiv}>
                <div className={styles.textDiv}>
                    <p className={styles.text}>Innovative</p>
                </div>
                <div className={styles.imageDiv}>
                    <Image src={PhoneImage3} />
                </div>
            </div>
        </div>
    )
}

export default PhoneInfo
