import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Image({ src, className, fallback: customFallback = images.noImage, ...props }, ref) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const [fallback, setFallback] = useState('');
    const handleErrorSrc = () => {
        setFallback(customFallback);
    };

    return <img className={classes} {...props} ref={ref} src={fallback || src} onError={handleErrorSrc} />;
}

export default forwardRef(Image);
