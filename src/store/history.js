import {historyList, historySteps} from '@/constants';

export const history = {
    namespaced: true,
    state: {
        currentHistory: null
    },
    getters: {
        currentHistory: state  => state.currentHistory
    },
    mutations: {
        "START": (state) => {
            state.currentHistory = historyList[historySteps._1];
        },
        "NEXT": (state) => {
            state.currentHistory = historyList[state.currentHistory.step + 1];
        }
    },
    actions: {
        "START": async (store) => {
            const {commit} = store;
            commit("START");
        },
        "NEXT": async (store) => {
            const {commit} = store;
            commit("NEXT");
        },
    }
}