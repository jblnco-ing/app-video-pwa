import { useRouter } from 'next/router'

const Video = ()=>{
    const router=useRouter();
    const {id} = router.query;

    return(
        <>
        <video autoPlay muted controls width="200">
            <source src="https://res.cloudinary.com/jblnco/video/upload/v1610674303/p_obsequiar/videos/cumple_betza_gxebvh.webm" type="video/webm"/>
        </video>
        <h1>{id}</h1>
        </>
    );
};

export default Video;