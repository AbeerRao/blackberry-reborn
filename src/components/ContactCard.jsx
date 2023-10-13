import React from 'react'
import { RiTwitterXLine, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri"


function ContactCard() {

    const styles = {
        main: "flex flex-col items-start space-y-5 w-full h-full justify-center mt-40 md:px-40 px-5",
        heading: "md:text-9xl text-6xl tracking-wide",
        container: "flex md:flex-row flex-col-reverse w-full h-full items-center justify-between",
        left: "flex flex-col w-full md:w-1/3 h-full items-start space-y-20",
        buttonsDiv: "hidden md:flex flex-col items-start space-y-2",
        shopButton: "genericButton bg-black text-white hover:bg-[#F9F9F9] hover:text-black w-full",
        ticketButton: "genericButton text-black hover:bg-black hover:text-white w-full",
        infoDiv: "flex flex-col items-start space-y-5 text-lg",
        socialsContainer: "flex flex-row items-center justify-between md:justify-start md:space-x-5 w-full",
        social: "text-5xl bg-white text-black rounded-full p-3 border-2 border-white hover:bg-black hover:text-white cursor-pointer transition transform duration-200 ease-in-out",
        right: "w-full md:w-2/3 h-full flex flex-col items-end md:space-y-14 space-y-10",
        formDiv: "flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-20 w-full h-full",
        inputBox: "w-full md:w-1/2 bg-[#F9F9F9] outline-none border-b-[1px] border-gray-500 text-black md:text-lg font-semibold placeholder:text-black",
        inputBox2: "w-full bg-[#F9F9F9] outline-none border-b-[1px] border-gray-500 text-black text-lg font-semibold placeholder:text-black max-h-[200px] min-h-[100px]",
        sendButton: "genericButton bg-white text-black hover:bg-black hover:text-white w-40 shadow-xl hover:scale-110 hover:shadow-3xl"
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>Contact</h2>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.buttonsDiv}>
                        <button className={styles.shopButton}>Sponsorships</button>
                        <button className={styles.ticketButton}>Enquiries</button>
                    </div>
                    <div className={styles.infoDiv}>
                        <p>NewBlueBerry avenue<br />Nomoreapple Lane<br />Building No. 6940</p>
                        <p>+91 9696969696</p>
                    </div>
                    <div className={styles.socialsContainer}>
                        <RiTwitterXLine className={styles.social} />
                        <RiInstagramLine className={styles.social} />
                        <RiLinkedinBoxFill className={styles.social} />
                    </div>
                </div>
                <form className={styles.right}>
                    <div className={styles.formDiv}>
                        <input type="text" placeholder="Name" className={styles.inputBox} />
                        <input type="text" placeholder="Company Name" className={styles.inputBox} />
                    </div>
                    <div className={styles.formDiv}>
                        <input type="text" placeholder="Contact No." className={styles.inputBox} />
                        <input type="text" placeholder="Email Address" className={styles.inputBox} />
                    </div>
                    <div className={styles.formDiv}>
                        <textarea placeholder="Message" className={styles.inputBox2} />
                    </div>
                    <button className={styles.sendButton}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactCard
