import { useEffect, useState } from 'react';
//
import { observerVidPic } from '../_func/observerImage';

//
export function useObserverVidPic(ref_elm, vid_pic_or_background) {
    //
    const [class_vid_pic, setClassVidPic] = useState(
        'vid-pic-observe opacity-0'
    );

    //
    useEffect(() => {
        if (ref_elm.current) {
            observerVidPic({
                elements: [ref_elm.current],
                vid_pic_or_background: vid_pic_or_background,
                callback: () => {
                    setClassVidPic('vid-pic-observe opacity-1');
                },
                threshold: 0,
            });
        }
    }, [ref_elm]);

    //
    return class_vid_pic;
}
