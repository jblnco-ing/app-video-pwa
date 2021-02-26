import Header from "./Header";
import styles from '../../styles/Home.module.css'
import Head from "./Head";

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head/>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
        </div>

    );
};

export default Layout;