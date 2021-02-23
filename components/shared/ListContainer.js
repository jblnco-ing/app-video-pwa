import Link from 'next/link'
import styles from '../../styles/ListContainer.module.css'
import CardVideo from './CardVideo'

const ListContainer = () => (
    <div className={styles.container}>
        <div className={styles.list}>
            <select>
                <option value="1" selected>
                    Categoria 1
            </option>
            </select>
            <CardVideo/>
        </div>
    </div>
)

export default ListContainer
