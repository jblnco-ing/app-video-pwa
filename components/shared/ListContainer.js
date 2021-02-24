import Link from 'next/link'
import styles from '../../styles/ListContainer.module.css'
import CardVideo from './CardVideo'

const ListContainer = () => (
    <div className={styles.container}>
            <select>
                <option value="1" selected>
                    Categoria 1
            </option>
            </select>
        <div className={styles.list}>
            <CardVideo id="1"/>
            <CardVideo id="2"/>
            <CardVideo id="3"/>
        </div>
    </div>
)

export default ListContainer
