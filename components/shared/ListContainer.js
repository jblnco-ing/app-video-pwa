import Link from 'next/link'
import styles from '../../styles/ListContainer.module.css'
import CardVideo from './CardVideo'

const ListContainer = () => (
    <div className={styles.container}>
        <div className={styles.select} tabindex="1">
            <input name="test" type="radio" id="opt1" checked/>
            <label for="opt1">Categoría 1</label>
            <input name="test" type="radio" id="opt2"/>
            <label for="opt2">Categoría 2</label>
            <input name="test" type="radio" id="opt3"/>
            <label for="opt3">Categoría 3</label>
            <input name="test" type="radio" id="opt4"/>
            <label for="opt4">Categoría 4</label>
        </div>
        <div className={styles.list}>
            <CardVideo/>
            <CardVideo/>
            <CardVideo/>
        </div>
    </div>
)

export default ListContainer
