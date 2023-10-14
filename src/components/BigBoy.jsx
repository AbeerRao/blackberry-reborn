import React from 'react'

function BigBoy({ name, image }) {

    const styles = {
        main: `bg-${image} w-screen h-screen flex flex-col items-center justify-between p-20`,
        topDiv: "text-[250px] 2xl:text-[350px] text-white tracking-wider bg-gradient-to-b opacity-75 from-white via-gray-200 to-gray-300 text-transparent bg-clip-text",
        buyDiv: "w-full text-right flex flex-row items-center justify-end",
        buyButton: "text-4xl text-white tracking-wider border-[1px] border-white rounded-full px-14 py-5 hover:bg-white hover:text-black transition duration-200 ease-in-out cursor-pointer w-max"
    }

    return (
        <div className={styles.main}>
            <div className={styles.topDiv}>
                <h2>{name}</h2>
            </div>
            <div className={styles.buyDiv}>
                <h2 className={styles.buyButton}>BUY</h2>
            </div>
        </div>
    )
}

export default BigBoy
