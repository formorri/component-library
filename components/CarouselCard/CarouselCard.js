import styles from './CarouselCard.module.scss';
import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselCard = ({ carouselData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className={styles.container}>
            <div>
                CarouselCard
            </div>
            <div className={styles.wrapper}>
                {carouselData.map((item, index) => (
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                            key={index}
                            className={styles.card}
                            transition={{ ease: "easeInOut", duration: 1 }}
                            initial={{
                                x: index === currentIndex ? 0 : 1000,
                                opacity: index === currentIndex ? 1 : 0,
                                zIndex: 0
                            }}
                            animate={{
                                x: index === currentIndex ? 1000 : 0,
                                opacity: index === currentIndex ? 0 : 1,
                                zIndex: index === currentIndex ? 1000 : 0
                            }}
                            // exit={{ x: 10000, opacity: 0 }}
                            style={{
                                marginLeft: `${index}rem`,
                                marginTop: `${index}rem`,
                                background: item.color
                            }}
                        >
                            {item.content}
                        </motion.div>
                    </AnimatePresence>
                ))}
                <ArrowForwardIcon
                    className={styles.arrow}
                    onClick={() => {
                        if (currentIndex < carouselData.length - 1) {
                            setCurrentIndex(currentIndex + 1);
                        } else {
                            setCurrentIndex(0);
                        }
                    }}
                />
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={currentIndex}
                        className={styles.tab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeIn", duration: 0.5 }}
                    >
                        {carouselData[currentIndex].tabContent}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default CarouselCard