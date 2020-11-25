export const windowSize = {
    namespaced: true,
    state: {
        sizes: null
    },
    getters: {
        sizes: state => state.sizes
    },
    mutations: {
        "SET_SIZE": (state, sizes) => {
            state.sizes = sizes;
        }
    }
}