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
        }
    },
    actions: {
        "ADD": async (store, shopItem) => {
            const {commit} = store;
            commit("ADD", shopItem);
        }
    }
}