import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'
import styles from '../../../styles/Home.module.css'

const Video = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <div className={styles.container} style={{ backgroundColor: "black" }}>
                <ReactPlayer width="100%" style={{ maxHeight: "50%" }} controls muted playing url='https://res.cloudinary.com/jblnco/video/upload/v1610674303/p_obsequiar/videos/cumple_betza_gxebvh.webm' />
            </div>
        </>
    );
};

export default Video;