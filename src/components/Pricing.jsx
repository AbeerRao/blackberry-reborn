import React from 'react'
import PricingImage from "../assets/PricingImage.svg"
import Image from 'next/image'

function Pricing() {

    const styles = {
        main: "flex flex-row items-end space-x-10 mt-64 w-full px-20",
        purpleDiv: "flex flex-col items-center justify-top space-y-10 bg-[#8729FF] w-1/3 h-[400px] rounded-t-[3rem] p-10",
        topText: "text-xl text-white flex items-center justify-center tracking-wider px-14 h-16 rounded-full border-[1px] border-white",
        bottomDiv: "flex flex-col items-center justify-center text-6xl tracking-wider text-white space-y-2",
        littleBitch: "text-lg tracking-normal",
        centerDiv: "flex flex-col items-center justify-between bg-black w-1/3 h-[700px] rounded-t-[3rem] p-10 pb-0",
        topDiv: "flex flex-col items-center justify-center space-y-10 w-full"
    }

    return (
        <div className={styles.main}>
            <div className={styles.purpleDiv}>
                <div className={styles.topText}>
                    <p>RAVN (1)</p>
                </div>
                <h2 className={styles.bottomDiv}>$149<br /><p className={styles.littleBitch}>Base</p></h2>
            </div>
            <div className={styles.centerDiv}>
                <div className={styles.topDiv}>
                    <div className={styles.topText}>
                        <p>OBSISIAN (1)</p>
                    </div>
                    <h2 className={styles.bottomDiv}>$149<br /><p className={styles.littleBitch}>Base</p></h2>
                </div>
                <Image src={PricingImage} />
            </div>
            <div className={styles.purpleDiv}>
                <div className={styles.topText}>
                    <p>nCrypt</p>
                </div>
                <h2 className={styles.bottomDiv}>$16.9<br /><p className={styles.littleBitch}>Per Month</p></h2>
            </div>
        </div>
    )
}

export default Pricing
