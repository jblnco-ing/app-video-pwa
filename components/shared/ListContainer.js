import Link from 'next/link'
import { videos } from '../../consts/videos';
import styles from '../../styles/ListContainer.module.css'
import CardVideo from './CardVideo'

import Select from 'react-select';

const options = [
    { value: 'Categoría1', label: 'Categoría 1' },
    { value: 'Categoría2', label: 'Categoría 2' },
    { value: 'Categoría3', label: 'Categoría 3' }
]

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

const list = ()=>{
    return videos.map((video,index)=><CardVideo id={index} />)
};

const ListContainer = () => (
    <div className={styles.container}>
        <div className={styles.select}>
          <Select options={options} isSearchable={false} defaultValue={options[0]} styles={colourStyles}/>
        </div>
        <div className={styles.list}>
            {list()}
        </div>
    </div>
)

export default ListContainer
