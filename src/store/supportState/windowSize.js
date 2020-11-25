export const windowSize = {
    namespaced: true,
    state: {
        windowWidth: {},
        windowHeight: {}
    },
    getters: {
        canView: state  => state.windowWidth > 1000 && state.windowHeight > 700
    },
    mutations: {
        "SET_SIZE": (state, {windowWidth, windowHeight}) => {
            state.windowWidth = windowWidth;
            state.windowHeight = windowHeight;
        },
        "SET_STATE": () => {},
    }
}