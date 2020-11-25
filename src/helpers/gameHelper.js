import {wait} from '@/plugins/wait-plug';

async function getAvatarPower(store) {
    const $wait = wait(store);
    const {dispatch} = store;
    $wait.start("avatar-power");
    await dispatch("userInfo/GET_AVATAR_POWER", "282967");
    $wait.stop("avatar-power");
}

async function getAvatar(store) {
    const $wait = wait(store);
    const {dispatch} = store;
    $wait.start("avatar");
    await dispatch("userInfo/GET_AVATAR");
    $wait.stop("avatar");
}

async function getItcoins(store) {
    const $wait = wait(store);
    const {dispatch} = store;
    $wait.start("itcoins");
    await dispatch("userInfo/GET_ITCOINS");
    $wait.stop("itcoins");
}

export const startGame = async (store) => {
    const {commit} = store;
    commit("router/RESET");
    await Promise.all([
        getAvatarPower(store),
        getAvatar(store),
        getItcoins(store),
    ])
}