import { useRouter } from 'next/router'
import ReactPlayer from 'react-player'
import { videos } from '../../../consts';
import styles from '../../../styles/Home.module.css'

const Video = () => {
    const router = useRouter();
    const { id } = router.query;
    const url = videos[id]?.video;
    return (
        <>
            <div className={styles.container} style={{ backgroundColor: "black" }}>
                <ReactPlayer volume="0.15" width="100%" style={{ maxHeight: "50%" }} controls loop url={url} />
            </div>
        </>
    );
};

export default Video;