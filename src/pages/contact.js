import ContactCard from '@/components/ContactCard'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'

function Contact() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const styles = {
        main: `${isMenuOpen ? "overflow-y-hidden" : ""} bg-[#F9F9F9] h-full w-screen overflow-x-hidden text-black px-10 py-5 flex flex-col items-center`,
    }

    return (
        <div className={styles.main}>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <ContactCard />            
        </div>
    )
}

export default Contact
