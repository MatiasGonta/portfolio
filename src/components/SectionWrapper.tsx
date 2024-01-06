import type { Sections } from '@models/sections.model';
import { motion, useInView, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';

interface SectionWrapperInterface {
    id: Sections;
    children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperInterface> = ({ id, children }) => {
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
        <section
            id={id}
            className={`w-full h-auto max-w-[800px] mb-[700px] mx-auto ${isElementVisible ? 'bg-green-900' : 'bg-red-500'}`}
            ref={sectionRef}
        >
            {children}
        </section>
    )
}

export default SectionWrapper