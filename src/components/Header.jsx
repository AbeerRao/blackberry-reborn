import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Logo from "../assets/Logo.svg"
import Image from 'next/image'
import Link from 'next/link'


function Header() {

    const styles = {
        main: "w-full flex flex-row items-center justify-between overflow-hidden",
        iconDiv: "flex flex-row items-center justify-center bg-white border-[1px] border-black rounded-full w-14 h-14 p-4 text-5xl hover:bg-black hover:text-white transition duration-200 ease-in-out cursor-pointer",
        logoDiv: "flex flex-row items-center justify-center bg-black text-white px-5 py-3 rounded-full space-x-5 cursor-pointer",
        contactDiv: "rounded-full px-5 py-3 border-[1px] border-black hover:bg-black hover:text-white transition duration-200 ease-in-out cursor-pointer"
    }

    return (
        <div className={styles.main}>
            <div className={styles.iconDiv}>
                <AiOutlineMenu className={styles.icon} />
            </div>
            <Link href="/">
                <div className={styles.logoDiv}>
                    <Image src={Logo} className="h-9 w-9" />
                    <h1>BlackBerry</h1>
                </div>
            </Link>
            <Link href="/contact">
                <div className={styles.contactDiv}>
                    <h2>Contact</h2>
                </div>
            </Link>
        </div>
    )
}


export default Header