import { useEffect, useState } from 'react';

//
const is_disabled = (width, is_lte) =>
    is_lte ? window.innerWidth <= width : window.innerWidth >= width;

//
export function useWidthDisabled({ width, is_lte = true }) {
    const [disabled, setDisabled] = useState(is_disabled(width, is_lte));

    //
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //
    function handleResize() {
        setDisabled(is_disabled(width, is_lte));
    }

    return { disabled };
}
