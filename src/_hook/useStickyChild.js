import { useEffect, useState } from 'react';

//
export function useStickyChild(ref_parent, ref_child, ref_sibling, min_px) {
    //
    const [position, setPosition] = useState('static');

    //
    useEffect(() => {
        window.addEventListener('scroll', handleWindowScroll);

        checkPositionAtFirst();

        return () => {
            window.removeEventListener('scroll', handleWindowScroll);
        };
    }, []);

    //
    function checkPositionAtFirst() {
        if (window.innerWidth <= min_px) {
            setPosition('static');

            return;
        }

        setPosition(() => {
            const { top, height } = ref_child.current.getBoundingClientRect();
            const { top: top_parent, height: height_parent } =
                ref_parent.current.getBoundingClientRect();

            if (top > 0) {
                return 'static';
            }

            if (top_parent + height_parent <= height) {
                return 'absolute';
            }

            if (top <= 0) {
                return 'fixed';
            }
        });
    }

    //
    function handleWindowScroll() {
        if (window.innerWidth < min_px) {
            setPosition('static');

            return;
        }

        setPosition((position) => {
            const { top, height } = ref_child.current.getBoundingClientRect();
            const { height: height_sibling } = ref_sibling
                ? ref_sibling.current.getBoundingClientRect()
                : { height: 0 };
            const { top: top_parent, height: height_parent } =
                ref_parent.current.getBoundingClientRect();

            if (position == 'fixed') {
                if (top_parent >= -height_sibling) {
                    return 'static';
                }

                if (top_parent + height_parent <= height) {
                    return 'absolute';
                }
            }
            //
            else if (position == 'static') {
                if (top <= 0) {
                    return 'fixed';
                }
            }
            //
            else if (position == 'absolute') {
                if (top_parent + height_parent >= height) {
                    return 'fixed';
                }
            }
            //
            return position;
        });
    }

    //
    return { position };
}
