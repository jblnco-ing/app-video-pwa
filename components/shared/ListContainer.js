import { options, videos } from '../../consts';
import styles from '../../styles/ListContainer.module.css'
import CardVideo from './CardVideo'
import { useState } from 'react';
import Select from './Select';

const ListContainer = () => {
    const [categoria, setCategoria] = useState(options[0].value);
    const onChangeSelect = (option) => {
        setCategoria(option.value);
    };
    const list = () => {
        return videos
        .filter((video) => video.categoria == categoria)
        .map((video, index) => <CardVideo img={video.img} text={video.text} id={video.id} key={index} />)
        ;
    };

    return (
        <div className={styles.container}>
            <div className={styles.select}>
                <Select instanceId="select_categoria" options={options} onChange={onChangeSelect} isSearchable={false} defaultValue={options[0]} />
            </div>
            <div className={styles.list}>
                {list()}
            </div>
        </div>
    )
}

export default ListContainer
