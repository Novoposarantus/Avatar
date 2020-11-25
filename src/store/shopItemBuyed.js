import Vue from 'vue';

export const shopItemBuyed = {
    namespaced: true,
    state: {
        data: []
    },
    getters: {
        data: state  => state.data
    },
    mutations: {
        "ADD": (state, shopItem) => {
            state.data.push(shopItem);
        },
        "DRESS": (state, shopItem) => {
            for(let i = 0; i < state.data.length; ++i) {
                Vue.set(state.data[i], 'active', state.data[i].id == shopItem.id);
            }
        }
    },
    actions: {
        "ADD": async (store, shopItem) => {
            const {commit} = store;
            commit("ADD", shopItem);
        },
        "DRESS": async (store, shopItem) => {
            const {commit} = store;
            commit("DRESS", shopItem);
        },
    }
}