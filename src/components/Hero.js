import React from 'react'
import ReactPlayer from 'react-player'
// import heroVideo from '../assets/herovideo.mp4'
import styles from '../styles/header.module.css'

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <ReactPlayer
          // url={heroVideo}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
        <div className={styles.videoContent}>
            <h3 className={styles.videoWord}>Hi, Welcome to Kozy's Corner. Your no BS analysis of what is happening around you.</h3>
        </div>
      </section>
    </>
  )
}

export default Hero
