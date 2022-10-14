import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0a720cbe2eee2b4e84c1ec8d85c6d845~c5_300x300.webp?x-expires=1665748800&x-signature=YScO%2BY%2FvI2wQinp3IkQHG6ah6Rg%3D"
                alt="Hoa"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>Nguyenvana</span>
                    <FontAwesomeIcon className={cx('name-icon-check')} icon={faCheckCircle} />
                </p>
                <span className={cx('user-name')}>nguyan van a</span>
            </div>
        </div>
    );
}

export default AccountItem;
