/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Image({ src, className, alt, fallback: customFallback = images.noImage, ...props }, ref) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const [fallback, setFallback] = useState('');
    const handleErrorSrc = () => {
        setFallback(customFallback);
    };

    return <img className={classes} {...props} ref={ref} src={fallback || src} onError={handleErrorSrc} alt={alt} />;
}

Image.protoTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
    alt: PropTypes.string,
};

export default forwardRef(Image);
