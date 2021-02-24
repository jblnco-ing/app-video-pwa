import Link from 'next/link'
import styles from '../../styles/ListContainer.module.css'
import CardVideo from './CardVideo'

import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

const ListContainer = () => (
    <div className={styles.container}>
        <div className={styles.select}>
          <Select options={options} />
        </div>
        <div className={styles.list}>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
        </div>
    </div>
)

export default ListContainer
