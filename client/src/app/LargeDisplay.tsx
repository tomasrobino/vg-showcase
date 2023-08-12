"use client"

import styles from "./largeDisplay.module.css"
import Image from "next/image"

export default function LargeDisplay() {
    return(
        <div className={styles.display}>
            <div className={styles.displayContent}>
                <div className={styles.displayMain}>

                </div>
                <div className={styles.displaySecondary}>
                    <div className={styles.displayOtherImgs}>

                    </div>
                    <div className={styles.displayOtherInfo}>

                    </div>
                </div>
            </div>
            <div className={styles.displayCarousel}>

            </div>
            <div className={styles.arrow}>

            </div>
            <div className={styles.arrow}>

            </div>
        </div>
    )
}