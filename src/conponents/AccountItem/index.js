import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './AccountItem.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.nickname}
                fallback="https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.6435-9/150485279_913506102790236_2758155090017484186_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=c60Re2xtLLEAX_9uvxj&_nc_ht=scontent.fsgn5-6.fna&oh=00_AT-TckcJGXnm1e6gQtGYLIUaEnkMI0zbTVYGxyiP9COdQA&oe=6374F84B"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('name-icon-check')} icon={faCheckCircle} />}
                </p>
                <span className={cx('user-name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
