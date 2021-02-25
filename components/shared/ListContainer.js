import Link from 'next/link'
import { videos } from '../../consts/videos';
import styles from '../../styles/ListContainer.module.css'
import CardVideo from './CardVideo'

const list = ()=>{
    return videos.map((video,index)=><CardVideo id={index} />)
};

const ListContainer = () => (
    <div className={styles.container}>
            <select>
                <option value="1" selected>
                    Categoria 1
            </option>
            </select>
        <div className={styles.list}>
            {list()}
        </div>
    </div>
)

export default ListContainer
