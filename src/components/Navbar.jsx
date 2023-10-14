import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai"
import Logo from "../assets/Logo.svg"
import { RxCross2 } from 'react-icons/rx'

function Navbar({ isMenuOpen, setIsMenuOpen }) {

    const router = useRouter()
    const elementClick = (element) => {
        router?.push(`/${element}`)
        setIsMenuOpen(false)
    }

    const styles = {
        main: `${isMenuOpen ? "flex flex-row" : "hidden"} w-screen h-screen bg-black z-50 items-center justify-between fixed top-0 pl-40 py-20`,
        heading: "md:text-[200px] -rotate-90 text-4xl",
        container: "flex flex-col space-y-10 items-start justify-center h-screen md:w-1/2 w-full",
        textContainer: "flex flex-row items-center space-x-10 cursor-pointer text-gray-700 hover:text-white transition transform duration-200 ease-in-out group reveal fade-left",
        srNo: "md:text-6xl text-3xl",
        menuItem: "md:text-9xl text-5xl",
        arrow: "hidden group-hover:block text-9xl",
        iconDiv: "flex flex-row items-center justify-center bg-black border-[1px] text-white rounded-full w-14 h-14 p-4 text-5xl hover:bg-white hover:text-black transition duration-200 ease-in-out cursor-pointer border-white",
        left: "flex flex-col items-start justify-top h-full",
    }

    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <RxCross2 className={styles.iconDiv} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                <Image src={Logo} className="w-64 mt-72" />
            </div>
            <div className={styles.container}>
                <div className={styles.textContainer} onClick={() => elementClick("")}>
                    <h2 className={styles.srNo}>01</h2>
                    <h1 className={styles.menuItem}>Home</h1>
                    <AiOutlineArrowLeft className={styles.arrow} />
                </div>
                <div className={styles.textContainer} onClick={() => elementClick("contact")}>
                    <h2 className={styles.srNo}>02</h2>
                    <h1 className={styles.menuItem}>Contact</h1>
                    <AiOutlineArrowLeft className={styles.arrow} />
                </div>
                <div className={styles.textContainer} onClick={() => elementClick("specs")}>
                    <h2 className={styles.srNo}>03</h2>
                    <h1 className={styles.menuItem}>Specs</h1>
                    <AiOutlineArrowLeft className={styles.arrow} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
