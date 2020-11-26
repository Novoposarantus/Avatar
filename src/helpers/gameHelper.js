import {wait} from '@/plugins/wait-plug';
import {tasks} from '@/constants';
import jwt_decode from "jwt-decode";

const debug = false;

async function getAvatarPower(store) {
    const $wait = wait(store);
    const {dispatch} = store;
    var urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const decoded = token && jwt_decode(token);
    $wait.start("avatar-power");
    await dispatch("userInfo/GET_AVATAR_POWER", decoded?.isu_id);
    $wait.stop("avatar-power");
}

async function getAvatar(store) {
    const $wait = wait(store);
    const {dispatch} = store;
    $wait.start("avatar");
    await dispatch("userInfo/GET_AVATAR");
    $wait.stop("avatar");
}

async function getTasks(store) {
    const $wait = wait(store);
    const {dispatch} = store;
    $wait.start("tasks");
    await dispatch("tasks/SET", tasks);
    $wait.stop("tasks");
}

async function getItcoins(store) {
    const $wait = wait(store);
    const {dispatch} = store;
    $wait.start("itcoins");
    await dispatch("userInfo/GET_ITCOINS");
    $wait.stop("itcoins");
}

function startHistory(store) {
    if(debug) return;
    const {dispatch} = store;
    dispatch("history/START");
}

export const startGame = async (store) => {
    const {commit} = store;
    commit("router/RESET");
    await Promise.all([
        getAvatarPower(store),
        getAvatar(store),
        getItcoins(store),
        getTasks(store)
    ]);
    startHistory(store);
    if(debug) {
        store.dispatch("userInfo/ADD_COINS", 10000);
    }
}