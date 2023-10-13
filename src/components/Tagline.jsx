import Image from 'next/image'
import React from 'react'
import TaglineImage from "../assets/TaglineImage.svg"

function Tagline() {

    const styles = {
        main: "mt-20 h-[111vh]",
        image: "w-[70vw]",
        textDiv: "absolute",
        heading: "absolute text-9xl font-bold tracking-wide -bottom-48 left-32",
        desc: "absolute w-[30vw] left-[25vw] top-48"
    }

    return (
        <div className={styles.main}>
            <Image src={TaglineImage} className={styles.image} />
            <div className={styles.textDiv}>
                <p className={styles.heading}>Secure.<br />Sleek.<br />Superior</p>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, architecto commodi reiciendis molestiae tempora obcaecati in perferendis veritatis repellendus enim rerum sed aperiam dolores voluptatem, optio adipisci quam velit magnam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nesciunt inventore dolorem dolorum natus quaerat voluptatem modi rem, eos ipsum eaque officiis enim non quae, quas hic officia molestias magnam.</p>
            </div>
        </div>
    )
}

export default Tagline
