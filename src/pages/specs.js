import Header from '@/components/Header'
import SpecsCard from '@/components/SpecsCard'
import React from 'react'
import PhoneSpecsImage from "../assets/PhoneSpecsImage.svg"

function specs() {

    const styles = {
        main: "bg-white h-full w-screen overflow-x-hidden text-black px-10 py-5 pb-0 flex flex-col items-center",
    }

    const imded = [
        {
            name: "OBSIDIAN",
            feature1: <p className="text-xl">48MP<br />Front<br />Camera</p>,
            feature2: "5G",
            image: PhoneSpecsImage
        },
        {
            name: "RAVN",
            feature1: <p className="text-xl">20IN<br />Screen</p>,
            feature2: "5G",
            image: PhoneSpecsImage
        }
    ]

    return (
        <div className={styles.main}>
            <Header />
            {
                imded.map((urmom, id) => (
                    <SpecsCard name={urmom.name} feature1={urmom.feature1} feature2={urmom.feature2} image={urmom.image} key={id} />
                ))
            }
        </div>
    )
}

export default specs