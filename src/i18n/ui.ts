export const languages = {
    es: 'es',
    en: 'en',
};

export const defaultLang = 'es';

export const ui = {
    es: {
        'document.title': 'Portfolio de Matias Gonta - Desarrollador y programador Web',

        'nav.home': 'Inicio',
        'nav.projects': 'Proyectos',
        'nav.about': 'Sobre mí',
        'nav.contact': 'Contacto',

        // Home section translations
        'home.title': 'Hey, soy Matias Gonta',
        'home.job-status': 'Disponible para trabajar',
        'home.description': 'Desarrollador y Programador Web. De Cañada de Gomez, Santa Fe, Argentina.',

        // Projects section translations
        'projects.buttons.youtube': 'Ver review',
        'projects.buttons.github': 'Ver repositorio',

        // Projects descriptions
        'projects.cecla6626.description': '"CECLA 6626" es una versión modernizada del sitio web existente del Centro de Formación Laboral 6626, Brigadier General Estanislao López (CECLA 6626), aprovechando Astro y Tailwind para mejorar tanto la experiencia del usuario (UX) como la interfaz del usuario (UI).',
        'projects.sabrina.description': 'Sabrina es un ecommerce full-stack de ropa. Cuenta con 25 páginas, como Inicio, ProductsPage con catálogo de productos, CartPage y un Dashboard al que solo pueden acceder los administradores a diversas estadísticas, tablas de pedidos, productos y usuarios, permitiendoles realizar operaciones como eliminación, actualización y creación (CRUD).',
        'projects.sunshine-weather.description': 'Sunshine Weather es una aplicación web que proporciona información meteorológica para cualquier lugar del mundo. Los usuarios pueden buscar fácilmente una ciudad o país y obtener actualizaciones meteorológicas en tiempo real, incluida la temperatura, la humedad, la velocidad del viento y una descripción.',
        'projects.the-exchange-corner.description': 'Exchange Corner es una aplicación web que ofrece conversión de moneda y obtención de tipos de cambio históricos. Los usuarios pueden realizar conversiones de divisas, explorar tipos de cambio históricos y agregar sus pares de divisas favoritos.',
        'projects.puzzle-home.description': 'Puzzle Home es una página web que ofrece una colección de rompecabezas para que los usuarios disfruten y desafíen sus habilidades de resolución. El proyecto se desarrolla utilizando React, TypeScript y la biblioteca DndKit, para la interacción de soltar y arrastrar (drag and drop), logrando una funcionalidad fluida.',
        'projects.minddraw.description': 'minDDraw es un sitio web de dibujo que permite a los usuarios dar rienda suelta a su creatividad y crear obras de arte digitales.',
        'projects.techflip.description': 'Tech Flip es un juego de tarjetas de memoria basado en el tema del lenguaje de programación. Proporciona una interfaz simple donde los usuarios pueden probar sus habilidades de memoria volteando cartas y emparejando pares.',

        // About section translations
        'about.description': 'Desarrollador Front-end con conocimientos de Back-end utilizando NodeJS y MongoDB. Autodidacta con curiosidad como base de superación e interés constante por aprender nuevas tecnologías. Mi objetivo es hacer crecer mi carrera profesional como desarrollador, aprovechando mi perseverancia, una cualidad que aplico en todos los aspectos de mi vida.', 
        'about.button': 'Descargar CV',
        'about.button.language.es': 'Español',
        'about.button.language.en': 'Ingles',

        // Contact section translations
        'contact.subtitle': 'Desarrollador y Programador Web',
        'contact.toast': '¡Gmail copiado en portapapeles!',

        // Resume page
        'resume.title': 'Portfolio de Matias Gonta - Curriculum Vitae',

        // Error page
        'error.message': 'La página que buscás no está disponible.',
        'error.button': 'Volver',
    },
    en: {
        'document.title': 'Portfolio of Matias Gonta - Web Developer and Programmer',

        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        // Home section translations
        'home.title': "Hey, I'm Matías Gonta",
        'home.job-status': 'Open to work',
        'home.description': 'Web Developer and Programmer. From Cañada de Gomez, Santa Fe, Argentina.',

        // Projects section translations
        'projects.buttons.youtube': 'Watch review',
        'projects.buttons.github': 'Watch repository',
        
        // Projects descriptions
        'projects.cecla6626.description': '"CECLA 6626" is a modernized version of the existing website of the Labor Training Center 6626, Brigadier General Estanislao López (CECLA 6626), leveraging Astro and Tailwind to improve both the user experience (UX) and user interface (UI).',
        'projects.sabrina.description': 'Sabrina is a full-stack clothing ecommerce. It has 25 pages, such as Home, ProductsPage with product catalog, CartPage and a Dashboard where only administrators can access to statistics, order tables, products and users, allowing them to perform operations such as deletion, update and creation (CRUD).',
        'projects.sunshine-weather.description': 'Sunshine Weather is a web application that provides weather information for any location in the world. Users can easily search for a city or country and get real-time weather updates, including temperature, humidity, wind speed, and a description.',
        'projects.the-exchange-corner.description': 'Exchange Corner is a web application that offers currency conversion and obtaining historical exchange rates. Users can perform currency conversions, explore historical exchange rates, and add their favorite currency pairs.',
        'projects.puzzle-home.description': 'Puzzle Home is a website that offers a collection of puzzles for users to enjoy and challenge their solving skills. The project is developed using React, TypeScript and the DndKit library, for drag and drop interaction, providing seamless functionality.',
        'projects.minddraw.description': 'minDDraw is a drawing website which allows users to unleash their creativity and create digital works of art.',
        'projects.techflip.description': 'Tech Flip is a memory card flip match game based on the programming language theme. It provides a simple interface where users can test their memory skills by flipping cards and matching pairs.',

        // About section translations
        'about.description': 'Front-end developer with Back-end knowledge using Node.js and MongoDB. Self-taught with curiosity as a basis for personal improvement and a constant interest in learning new technologies. My goal is to advance my professional career as a developer, taking advantage of my perseverance, a quality that I apply in all aspects of my life.', 
        'about.button': 'Download CV',
        'about.button.language.es': 'Spanish',
        'about.button.language.en': 'English',

        // Contact section translations
        'contact.subtitle': 'Web Developer and Programmer',
        'contact.toast': 'Gmail copied to clipboard!',

        // Resume page
        'resume.title': 'Portfolio of Matias Gonta - Curriculum Vitae',

        // Error page
        'error.message': 'The page you are looking is not available.',
        'error.button': 'Back',
    },
} as const;