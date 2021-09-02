import { useHistory } from 'react-router';
import styles from './Nav.module.css'
function Nav(){
    const history = useHistory();

    return (
        <div className={styles.Nav}>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Food</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Nav;