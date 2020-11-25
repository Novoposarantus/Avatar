
import {isBoolean, isEmpty} from 'lodash';

export const wait = (store) => ({
    start: (action) => {
        store.dispatch("wait/START", action);
    },
    stop: (action) => {
        store.dispatch("wait/STOP", action);
    },
    stopNL: (action) => {
        store.dispatch("wait/STOP_NOT_LOADED", action);
    },
    loading(action) {
        return store.getters["wait/loading"][action];
    },
    loaded(action) {
        return isBoolean(store.getters["wait/loaded"][action]);
    },
    loadedSuccessfully(action) {
        return this.loaded(action) && store.getters["wait/loaded"][action];
    },
    get notLoading() {
        return isEmpty(Object.keys(store.getters["wait/loading"]));
    }
});

export default function ({store}, inject) {
    inject("wait", wait(store));
}