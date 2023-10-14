import Image from 'next/image'
import React from 'react'
import PhoneSpecsImage from "../assets/PhoneSpecsImage.svg"

function SpecsCard({ name, image, feature1, feature2 }) {

    const styles = {
        main: "relative flex flex-col items-center justify-between p-10 w-full h-screen bg-[#F9F9F9] rounded-[3rem] mt-20",
        image: "h-[1000px] absolute reveal",
        myDiv: "flex flex-row items-center justify-between w-full h-max"
    }

    return (
        <div className={styles.main}>
            <Image src={image} className={styles.image} />
            <div className={styles.myDiv}>
                <p className="text-xl px-5 py-3 rounded-full border-[1px] border-black">{name}</p>
                <p className="text-xl px-5 py-3 rounded-full border-[1px] border-black bg-black text-white hover:bg-[#F9F9F9] hover:text-black transition transform duration-200 ease-in-out cursor-pointer">PURCHASE</p>
            </div>
            <div className={styles.myDiv}>
                {feature1}
                <h2 className="text-9xl">{feature2}</h2>
            </div>
        </div>
    )
}

export default SpecsCard
