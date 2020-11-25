import Vue from 'vue';
import Vuex from 'vuex';
import {windowSize} from '@/store/supportState/windowSize';
import {router} from '@/store/supportState/router';
import {wait} from '@/store/supportState/wait';
import {userInfo} from '@/store/userInfo';
import {shopItemBuyed} from '@/store/shopItemBuyed';
import {tasks} from '@/store/tasks';

Vue.use(Vuex);

const modules = {
    windowSize,
    router,
    wait,
    userInfo,
    shopItemBuyed,
    tasks
}

const store = new Vuex.Store({
    modules,
    actions: {
        loadGame({commit}, state) {
            for(let key in state) {
                commit(`${key}/SET_STATE`, state[key]);
            }
        }
    }
});

export default store;