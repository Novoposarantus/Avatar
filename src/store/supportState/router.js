import {pages} from '@/constants';

export const router = {
    namespaced: true,
    state: {
        route: null
    },
    mutations: {
        "SET": (state, route) => {
            if(!Object.keys(pages).includes(route.name)) return;
            state.route = route;
        },
        "RESET": (state) => {
            state.route = {name: pages.main.name};
        }
    },
}