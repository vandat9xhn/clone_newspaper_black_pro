const { API_Politics_L } = require("../../../../_api/politics/PoliticsAPI");
const { API_Tech_L } = require("../../../../_api/tech/TechAPI");

//
export const menu_arr = [
    {
        to: '/entertainment',
        title_link: 'Entertainment',
    },
    {
        to: '/finance',
        title_link: 'Finance',
    },
    {
        to: '/music',
        title_link: 'Music',
    },
    {
        to: '/life',
        title_link: 'Life',
    },
];

export const menu_dropdown_arr = [
    {
        to: '/tech',
        title_link: 'Tech',
        link_item: '/tech',
        API_Dropdown_L: API_Tech_L,
    },
    {
        to: '/politics',
        title_link: 'Politics',
        link_item: '/politics',
        API_Dropdown_L: API_Politics_L,
    },
];