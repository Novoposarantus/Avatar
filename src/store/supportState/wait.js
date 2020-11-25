import Vue from 'vue';

export const wait = {
    namespaced: true,
    state: {
        loading: {},
        loaded: {}
    },
    getters: {
        loading: state  => state.loading,
        loaded: state  => state.loaded
    },
    mutations: {
        "START": (state, action) => {
            Vue.set(state.loading, action, true);
            Vue.delete(state.loaded, action);
        },
        "STOP": (state, action) => {
            Vue.delete(state.loading, action);
            Vue.set(state.loaded, action, true);
        },
        "STOP_NOT_LOADED": (state, action) => {
            Vue.delete(state.loading, action);
            Vue.set(state.loaded, action, false);
        },
    },
    actions: {
        "START": ({commit}, action) => {
            commit("START", action);
        },
        "STOP": ({commit}, action) => {
            commit("STOP", action);
        },
        "STOP_NOT_LOADED": ({commit}, action) => {
            commit("STOP_NOT_LOADED", action);
        },
    }
} 