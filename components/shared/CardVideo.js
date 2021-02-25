import styles from '../../styles/CardVideo.module.css'
import Link from 'next/link'

const CardVideo = (props) => (
    <div className={styles.container}>
        <Link href={`video/${props.id}`}>
            <div className={styles.img_container}>
                <img className={styles.img} src="/assets/Video.png" />
                <img className={styles.play} src="/assets/play_arrow_24px.svg" />
            </div>
        </Link>
        <p className={styles.description}>{props.text}</p>
    </div>
)

export default CardVideo