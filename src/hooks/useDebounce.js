import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounced, setDebouced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouced(value), delay);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounced;
}

useDebounce.propTypes = {
    value: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
};

export default useDebounce;
