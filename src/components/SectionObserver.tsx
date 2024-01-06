import type { Sections } from '@models/sections.model';
import React, { useEffect, useRef, useState } from 'react';

interface SectionObserverInterface {
    id: Sections;
}

const SectionObserver: React.FC<SectionObserverInterface> = ({ id }) => {
    const sectionRef = useRef<React.MutableRefObject<HTMLElement>>(null);
    const [isElementVisible, setIsElementVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    window.location.hash = id;
                }
                console.log(`Element ${id} is in view: ${isElementVisible}`)
            }
        )
        observer.observe(sectionRef.current);
    }, [])

    return (
        <></>
    )
}

export default SectionObserver