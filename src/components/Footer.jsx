import Image from 'next/image'
import React from 'react'
import Logo from "../assets/Logo.svg"
import { RiTwitterXLine, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri"

function Footer() {

    const styles = {
        main: "w-screen flex flex-row items-center justify-around bg-black py-24 px-64",
        leftDiv: "w-1/2 flex flex-col items-start justify-center space-y-10",
        socialsContainer: "flex flex-row items-center justify-between md:justify-start md:space-x-5 w-full",
        social: "text-5xl bg-white text-black rounded-full p-3 border-2 border-white hover:bg-black hover:text-white cursor-pointer transition transform duration-200 ease-in-out",
        rightDiv: "flex flex-col items-start space-y-10 w-1/2",
        bingdu: "flex flex-col items-start justify-center space-y-5 text-white"
    }

    return (
        <div className={styles.main}>
            <div className={styles.leftDiv}>
                <Image src={Logo} className="w-32" />
                <div className={styles.socialsContainer}>
                    <RiTwitterXLine className={styles.social} />
                    <RiInstagramLine className={styles.social} />
                    <RiLinkedinBoxFill className={styles.social} />
                </div>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.bingdu}>
                    <h2 className="text-2xl">GET IN TOUCH</h2>
                    <p className="text-gray-500">xyz@gmail.com<br />(310)-654-2551</p>
                </div>
                <div className={styles.bingdu}>
                    <h2 className="text-4xl">EXPLORE</h2>
                    <p className="text-gray-500">not actually gonna put anything here. how long till people find out</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
