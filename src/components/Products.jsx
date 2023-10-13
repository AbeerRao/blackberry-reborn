import Image from 'next/image'
import React from 'react'
import PhoneImage4 from "../assets/PhoneImage4.svg"
import WatchImage1 from "../assets/WatchImage1.svg"

function Products() {

    const styles = {
        main: "flex flex-row w-full items-center justify-between mt-20",
        itemDiv: "w-max flex flex-col items-start justify-center space-y-2",
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
