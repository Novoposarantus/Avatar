export const tasks = {
    namespaced: true,
    state: {
        tasks: []
    },
    getters: {
        tasks: state  => state.tasks,
        anyAllow: state => !!state.tasks.find(t => t.allow)
    },
    mutations: {
        "SET": (state, tasks) => {
            state.tasks = tasks;
        },
        "SET_ALLOW": (state, id) => {
            const index = state.tasks.findIndex(t => t.id == id);
            state.tasks.splice(index, 1, {
                ...state.tasks[index],
                allow: true
            })
        },
        "SET_ACTIVED": (state, id) => {
            const index = state.tasks.findIndex(t => t.id == id);
            state.tasks.splice(index, 1, {
                ...state.tasks[index],
                allow: false,
                actived: true
            })
        }
    },
    actions: {
        "SET": async (store, tasks) => {
            const {commit} = store;
            commit("SET", tasks);
        },
        "SET_ALLOW": async (store, id) => {
            const {commit} = store;
            commit("SET_ALLOW", id);
        },
        "SET_ACTIVED": async (store, id) => {
            const {commit} = store;
            commit("SET_ACTIVED", id);
        },
    }
}