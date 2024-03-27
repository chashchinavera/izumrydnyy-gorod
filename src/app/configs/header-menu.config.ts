
export interface MenuLink {
    title: string;
    link: string;
    children?: {
        title: string;
        link: string;
    }[]
}

export type MenuLinksArray = MenuLink[];

export const menuLinksArr: MenuLinksArray = [
    {
        title: "Наши проекты",
        link: "/nashi-proekti/shkola-soprovozhdaemogo-prozhivaniya",
        children: [
            { title: "Школа сопровождаемого проживания", link: "/nashi-proekti/shkola-soprovozhdaemogo-prozhivaniya" },
            { title: "Трудовая реабилитация", link: "/nashi-proekti/trudovaya-reabilitaciya" },
            { title: "Волонтёрство для всех", link: "/nashi-proekti/volonterstvo-dlya-vseh" },
            { title: "Тренировочная квартира", link: "/nashi-proekti/trenirovochnaya-kvartira" },
            { title: "Выездные программы", link: "/nashi-proekti/viezdnye-programmy" },
        ]
    },
    { title: "Социальное обслуживание", link: "/socialnoe-obsluzhivanie" },
    { title: "Новости", link: "/novosti" },
    { title: "Документы", link: "/documenti" },
    { title: "Контакты", link: "/kontakti" },
    { title: "Поддержать", link: "/podderzhat" },
];
