import styles from '../../styles/CardVideo.module.css'

const CardVideo = () => (
    <div className={styles.container}>
        <img className={styles.img} src="/assets/Video.png"/>
        <p className={styles.description}>testo del video</p>
    </div>
)

export default CardVideo