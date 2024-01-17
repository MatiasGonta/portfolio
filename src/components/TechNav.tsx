import type { Technologies } from '@models/technologies';
import { technologiesData } from '@data/data';
import { useStore } from "@nanostores/react";
import { selectedTech } from "src/techStore";

interface TechNavInterface {}

const TechNav: React.FC<TechNavInterface> = () => {
    const $selectedTech = useStore(selectedTech);

    const handleOnClick = (name: Technologies) => {
        if ($selectedTech !== name) {
            selectedTech.set(name) 
        } else {
            selectedTech.set(undefined) 
        }
    }

    return (
        <nav className="flex justify-center items-center">
            <ul className="grid gap-5 grid-cols-[repeat(2,85px)] grid-rows-auto min-[450px]:grid-cols-[repeat(4,85px)] sm:grid-cols-[repeat(5,85px)] md:grid-cols-[repeat(7,85px)]">
                {
                    technologiesData.map(({ name, icon: Icon, styles, activeStyles }, index) => (
                            <li key={index} className="inline w-fit h-fit" onClick={() => handleOnClick(name)}>
                                <button className={`transition-all duration-300 cursor-pointer flex flex-col justify-center items-center size-[85px] select-none rounded-xl bg-[#13151a] border ${$selectedTech === name ? activeStyles : `border-white ${styles} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary`}`}>
                                    <div className="size-[25px]">
                                        <Icon />
                                    </div>
                                    <span className="text-[12px] mt-1">{name}</span>
                                </button>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default TechNav