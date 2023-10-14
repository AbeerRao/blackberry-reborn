import Link from 'next/link'
import React from 'react'

function SpecView() {

    const styles = {
        main: "w-full flex flex-col items-center justify-center space-y-3 py-64",
        heading: "text-8xl tracking-wider",
        moreButton: "text-2xl tracking-wider border-[1px] text-white border-black bg-black rounded-full px-14 py-5 hover:bg-transparent hover:text-black transition duration-200 ease-in-out cursor-pointer w-max"
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>View Specs</h2>
            <Link href="/specs">
                <p className={styles.moreButton}>More</p>
            </Link>
        </div>
    )
}

export default SpecView
