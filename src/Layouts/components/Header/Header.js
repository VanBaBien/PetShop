import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




import style from './Header.module.scss'
import images from '~/assets/img';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faPaw, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style)


function Header() {
    return <header className={cx('header-wrapper')}>
       <div className={cx('header--has-menu')}>
        <div className={cx('logo')}>
            <img src={images.logo} alt='Pet Shop'/>
        </div>
        <div className={cx('search')}>
            <input placeholder='Search Item' spellCheck={false} />
            <button className={cx('search-clear')}>
               <FontAwesomeIcon icon={faCircleXmark} />
            </button> 
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faPaw} />
            </button>
        </div>
        <div className={cx('actions')}>
               
            </div>
       </div>
       <div className={cx('header--bottom-menu')}></div>
    </header>
    ;
}

export default Header;