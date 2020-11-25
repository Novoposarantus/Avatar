import Vue from 'vue';
import Vuex from 'vuex';
import {windowSize} from '@/store/supportState/windowSize';
import {router} from '@/store/supportState/router';
import {wait} from '@/store/supportState/wait';
import {userInfo} from '@/store/userInfo';

Vue.use(Vuex);

const modules = {
    windowSize,
    router,
    wait,
    userInfo
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