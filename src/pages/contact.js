import ContactCard from '@/components/ContactCard'
import Header from '@/components/Header'
import React from 'react'

function Contact() {

    const styles = {
        main: "bg-[#F9F9F9] h-full w-screen overflow-x-hidden text-black px-10 py-5 flex flex-col items-center",
    }

    return (
        <div className={styles.main}>
            <Header />
            <ContactCard />            
        </div>
    )
}

export default Contact
