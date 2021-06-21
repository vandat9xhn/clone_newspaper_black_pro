//
export function observerVidPic({
    elements,
    vid_pic_or_background = true,
    callback = () => {},
    threshold = 0,
}) {
    const intersection_observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (vid_pic_or_background) {
                        entry.target.src = entry.target.dataset.src;
                    } else {
                        entry.target.style.backgroundImage = `url(${entry.target.dataset.src})`;
                    }

                    entry.target.removeAttribute('data-src');
                    observer.unobserve(entry.target);
                    callback();
                }
            });
        },
        {
            threshold: threshold,
        }
    );

    elements.forEach((element) => {
        intersection_observer.observe(element);
    });
}
