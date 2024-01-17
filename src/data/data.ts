import {
    JavaScriptIcon,
    TypeScriptIcon,
    GitIcon,
    HtmlIcon,
    CssIcon,
    SassIcon,
    TailwindIcon,
    AstroIcon,
    ReactIcon,
    ReduxIcon,
    NodeJSIcon,
    ExpressIcon,
    MongoDBIcon,
    NextjsIcon
} from "@icons/tech/TechIcons";
import { Technologies } from "@models/technologies";

export const technologiesData = [
    {
        name: Technologies.JAVASCRIPT,
        styles: "hover:border-javascript hover:text-javascript",
        activeStyles: "border-javascript text-javascript",
        icon: JavaScriptIcon,
    },
    {
        name: Technologies.TYPESCRIPT,
        styles: "hover:border-typescript hover:text-typescript",
        activeStyles: "border-typescript text-typescript",
        icon: TypeScriptIcon,
    },
    {
        name: Technologies.GIT,
        styles: "hover:border-git hover:text-git",
        activeStyles: "border-git text-git",
        icon: GitIcon,
    },
    {
        name: Technologies.HTML,
        styles: "hover:border-html hover:text-html",
        activeStyles: "border-html text-html",
        icon: HtmlIcon,
    },
    {
        name: Technologies.CSS,
        styles: "hover:border-css hover:text-css",
        activeStyles: "border-css text-css",
        icon: CssIcon,
    },
    {
        name: Technologies.SASS,
        styles: "hover:border-sass hover:text-sass",
        activeStyles: "border-sass text-sass",
        icon: SassIcon,
    },
    {
        name: Technologies.TAILWIND,
        styles: "hover:border-tailwindcss hover:text-tailwindcss",
        activeStyles: "border-tailwindcss text-tailwindcss",
        icon: TailwindIcon,
    },
    {
        name: Technologies.ASTRO,
        styles: "hover:border-astro hover:text-astro",
        activeStyles: "border-astro text-astro",
        icon: AstroIcon,
    },
    {
        name: Technologies.REACT,
        styles: "hover:border-react hover:text-react",
        activeStyles: "border-react text-react",
        icon: ReactIcon,
    },
    {
        name: Technologies.REDUX,
        styles: "hover:border-redux hover:text-redux",
        activeStyles: "border-redux text-redux",
        icon: ReduxIcon,
    },
    {
        name: Technologies.NODE,
        styles: "hover:border-node hover:text-node",
        activeStyles: "border-node text-node",
        icon: NodeJSIcon,
    },
    {
        name: Technologies.EXPRESS,
        styles: "hover:border-express hover:text-express",
        activeStyles: "border-express text-express",
        icon: ExpressIcon,
    },
    {
        name: Technologies.MONGODB,
        styles: "hover:border-mongodb hover:text-mongodb",
        activeStyles: "border-mongodb text-mongodb",
        icon: MongoDBIcon,
    },
    {
        name: Technologies.NEXTJS,
        styles: "hover:border-nextjs hover:text-nextjs",
        activeStyles: "border-nextjs text-nextjs",
        icon: NextjsIcon,
    },
];

export const projectsData = [
    {
        name: "CECLA 6626",
        description: 'projects.cecla6626.description',
        img: {
            src: "/public/assets/projectMockups/CECLA6626-mockup.png",
            alt: "CECLA6626-mockup",
        },
        reviewUrl: "https://www.youtube.com/watch?v=JaWBVzGBzH8",
        repositoryUrl: "https://github.com/MatiasGonta/CECLA-6626",
        technologies: [
            { name: Technologies.TYPESCRIPT, href: "https://www.typescriptlang.org/", color: "typescript", icon: TypeScriptIcon },
            { name: Technologies.ASTRO, href: "https://astro.build/", color: "astro", icon: AstroIcon },
            { name: Technologies.TAILWIND, href: "https://tailwindcss.com/", color: "tailwindcss", icon: TailwindIcon },
        ],
    },
    {
        name: "Sabrina",
        description: 'projects.sabrina.description',
        img: {
            src: "/public/assets/projectMockups/sabrina-mockup.png",
            alt: "sabrina-mockup",
        },
        reviewUrl: "https://www.youtube.com/watch?v=NwSAmoBntyc",
        repositoryUrl: "https://github.com/MatiasGonta/sabrina-ecommerce-fullstack-app",
        technologies: [
            { name: Technologies.NODE, href: "https://nodejs.org/", color: "node", icon: NodeJSIcon },
            { name: Technologies.EXPRESS, href: "https://expressjs.com/", color: "express", icon: ExpressIcon },
            { name: Technologies.MONGODB, href: "https://www.mongodb.com/", color: "mongodb", icon: MongoDBIcon },
            { name: Technologies.TYPESCRIPT, href: "https://www.typescriptlang.org/", color: "typescript", icon: TypeScriptIcon },
            { name: Technologies.REACT, href: "https://react.dev/", color: "react", icon: ReactIcon },
            { name: Technologies.REDUX, href: "https://redux.js.org/", color: "redux", icon: ReduxIcon },
            { name: Technologies.SASS, href: "https://sass-lang.com/", color: "sass", icon: SassIcon },
        ],
    },
    {
        name: "Sunshine Weather",
        description: 'projects.sunshine-weather.description',
        img: {
            src: "/public/assets/projectMockups/sunshine-weather-mockup.png",
            alt: "sunshine-weather-mockup",
        },
        reviewUrl: "",
        repositoryUrl: "https://github.com/MatiasGonta/sunshine-weather-react-ts-sass",
        technologies: [
            { name: Technologies.TYPESCRIPT, href: "https://www.typescriptlang.org/", color: "typescript", icon: TypeScriptIcon },
            { name: Technologies.REACT, href: "https://react.dev/", color: "react", icon: ReactIcon },
            { name: Technologies.SASS, href: "https://sass-lang.com/", color: "sass", icon: SassIcon },
        ],
    },
    {
        name: "The Exchange Corner",
        description: 'projects.the-exchange-corner.description',
        img: {
            src: "/public/assets/projectMockups/the-exchange-corner-mockup.png",
            alt: "the-exchange-corner-mockup",
        },
        reviewUrl: "https://www.youtube.com/watch?v=CRLlMPW1qUM",
        repositoryUrl: "https://github.com/MatiasGonta/the-exchange-corner",
        technologies: [
            { name: Technologies.TYPESCRIPT, href: "https://www.typescriptlang.org/", color: "typescript", icon: TypeScriptIcon },
            { name: Technologies.REACT, href: "https://react.dev/", color: "react", icon: ReactIcon },
            { name: Technologies.NEXTJS, href: "https://nextjs.org/", color: "nextjs", icon: NextjsIcon },
            { name: Technologies.TAILWIND, href: "https://tailwindcss.com/", color: "tailwindcss", icon: TailwindIcon },
        ],
    },
    {
        name: "Puzzle Home",
        description: 'projects.puzzle-home.description',
        img: {
            src: "/public/assets/projectMockups/puzzle-home-mockup.png",
            alt: "puzzle-home-mockup",
        },
        reviewUrl: "https://www.youtube.com/watch?v=4hoPhppO8EE",
        repositoryUrl: "https://github.com/MatiasGonta/puzzle-home-react-ts-sass",
        technologies: [
            { name: Technologies.TYPESCRIPT, href: "https://www.typescriptlang.org/", color: "typescript", icon: TypeScriptIcon },
            { name: Technologies.REACT, href: "https://react.dev/", color: "react", icon: ReactIcon },
            { name: Technologies.SASS, href: "https://sass-lang.com/", color: "sass", icon: SassIcon },
        ],
    },
    {
        name: "minDDraw",
        description: 'projects.minddraw.description',
        img: {
            src: "/public/assets/projectMockups/minDDraw-mockup.png",
            alt: "minDDraw-mockup",
        },
        reviewUrl: "https://www.youtube.com/watch?v=yS0JPU53X7o",
        repositoryUrl: "https://github.com/MatiasGonta/minDDraw-html-css-js",
        technologies: [
            { name: Technologies.HTML, href: "https://developer.mozilla.org/es/docs/Web/HTML", color: "html", icon: HtmlIcon },
            { name: Technologies.CSS, href: "https://developer.mozilla.org/es/docs/Web/CSS", color: "css", icon: CssIcon },
            { name: Technologies.JAVASCRIPT, href: "https://developer.mozilla.org/es/docs/Web/JavaScript", color: "javascript", icon: JavaScriptIcon },
        ],
    },
    {
        name: "Tech Flip",
        description: 'projects.techflip.description',
        img: {
            src: "/public/assets/projectMockups/tech-flip-mockup.png",
            alt: "tech-flip-mockup",
        },
        reviewUrl: "",
        repositoryUrl: "https://github.com/MatiasGonta/tech-flip-game-html-css-js",
        technologies: [
            { name: Technologies.HTML, href: "https://developer.mozilla.org/es/docs/Web/HTML", color: "html", icon: HtmlIcon },
            { name: Technologies.CSS, href: "https://developer.mozilla.org/es/docs/Web/CSS", color: "css", icon: CssIcon },
            { name: Technologies.JAVASCRIPT, href: "https://developer.mozilla.org/es/docs/Web/JavaScript", color: "javascript", icon: JavaScriptIcon },
        ],
    },
];