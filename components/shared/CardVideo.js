import styles from '../../styles/CardVideo.module.css'

const CardVideo = () => (
    <div className={styles.container}>
        <div className={styles.img_container}>
            <img className={styles.img} src="/assets/Video.png"/>
            <img className={styles.play} src="/assets/play_arrow_24px.svg"/>
        </div>
        <p className={styles.description}>testo del video</p>
    </div>
)

export default CardVideo