import type { Technologies } from "@models/technologies";
import { useStore } from "@nanostores/react";
import { selectedTech } from "src/techStore";

interface TechBadgeInterface {
    name: Technologies;
    children: React.ReactNode;
    href: string;
    color: string;
}

const TechBadge: React.FC<TechBadgeInterface> = (props) => {
    const $selectedTech = useStore(selectedTech);

    const styles = $selectedTech === props.name ? `border-${props.color} text-${props.color}` : 'border-white';

    return (
        <div>
            <a href={props.href} className={`transition-all duration-300 flex items-center rounded-full py-[5px] px-[15px] border bg-gray-800 ${styles} focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-primary`} target="_blank">
                <div className="size-3.5">
                    {props.children}
                </div>
                <span className="ml-2 text-[12px] text-nowrap">{props.name}</span>
            </a>
        </div>
    )
}

export default TechBadge