import { options, videos } from '../../consts';
import styles from '../../styles/ListContainer.module.css'
import CardVideo from './CardVideo'
import Select from 'react-select';
import { useState } from 'react';

const ListContainer = () => {
    const [categoria, setCategoria] = useState(options[0].value);
    const onChangeSelect = (option)=>{
        setCategoria(option.value);
    };
    const list = () => {
        return videos.filter((video)=>video.categoria == categoria).map((video, index) => <CardVideo text={video.text} id={index} key={index} />);
    };
    
    return (
        <div className={styles.container}>
            <div className={styles.select}>
                <Select instanceId="select_categoria" options={options} onChange={onChangeSelect} isSearchable={false} defaultValue={options[0]} styles={colourStyles} />
            </div>
            <div className={styles.list}>
                {list()}
            </div>
        </div>
    )
}

const colourStyles = {
    control: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: 'var(--blue)',
        border: 'solid 2px var(--violet)',
        borderRadius: 0,
        boxShadow: isFocused ? 'none' : null,
        ':hover': {
            ...styles[':active'],
            border: 'solid 2px var(--violet)',
            cursor: 'pointer',
        },
    }),
    valueContainer: styles => ({
        ...styles,
        justifyContent: 'center',
        fontWeight: 'bold',
        padding: '0px 0px 0px 36px'
    }),
    indicatorSeparator: styles => ({
        ...styles,
        display: 'none',
    }),
    menu: styles => ({
        ...styles,
        borderRadius: 0,
        border: 'solid 2px var(--violet)',
        top: '30px',
        boxShadow: 'none',
    }),
    menuList: styles => ({
        ...styles,
        padding: '0px',
    }),
    option: (styles, { isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isSelected
                ? 'var(--violet)'
                : isFocused
                    ? 'var(--violet)'
                    : 'var(--blue)',
            color: 'white',
            cursor: isSelected ? 'default' : 'pointer',
            borderBottom: 'solid 1px var(--violet)',
            textAlign: 'center',
        };
    },
};

export default ListContainer
