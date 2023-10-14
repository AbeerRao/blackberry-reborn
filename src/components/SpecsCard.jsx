import React from 'react'

function SpecsCard({ name, feature1, feature2 }) {

    const styles = {
        main: "flex flex-col items-center justify-between p-10 w-full h-screen bg-[#F9F9F9] rounded-[3rem] mt-20 bg-systum",
        image: "h-[500px] 2xl:h-[1000px] absolute reveal",
        myDiv: "flex flex-row items-center justify-between w-full h-max"
    }

    return (
        <div className={styles.main}>
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
