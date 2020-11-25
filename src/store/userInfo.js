import {
    actionBody,
    sendRequest
} from '@/store/helpers';
import {getRandomInt, sleep} from '@/helpers';
import {api} from '@/constants';

export const userInfo = {
    namespaced: true,
    state: {
        userInfo: null,
        avatar: null,
        itCoins: null
    },
    getters: {
        avatarPower: state  => state.userInfo.game_power,
        avatar: state  => state.avatar,
        itCoins: state  => state.itCoins
    },
    mutations: {
        "SET_USER_INFO": (state, userInfo) => {
            state.userInfo = userInfo;
        },
        "SET_AVATAR": (state, avatar) => {
            state.avatar = avatar;
        },
        "SET_ITCOINS": (state, itCoins) => {
            state.itCoins = itCoins;
        },
    },
    actions: {
        "GET_AVATAR_POWER": async (store, id) => {
            const {commit} = store;
            return await actionBody(store, async () => {
                const {json} = await sendRequest(api.users, "GET", {
                    id: id
                });
                const user = json.users.find(u => u.attributes.isu_id == id);
                if(!user) return;
                commit("SET_USER_INFO", user.attributes);
            });
        },
        "GET_AVATAR": async (store) => {
            const {commit} = store;
            return await actionBody(store, async () => {
                await sleep(getRandomInt(6000, 10000));
                commit("SET_AVATAR", getRandomInt(10, 300));
            });
        },
        "GET_ITCOINS": async (store) => {
            const {commit} = store;
            return await actionBody(store, async () => {
                await sleep(getRandomInt(400, 2000));
                commit("SET_ITCOINS", getRandomInt(400, 600));
            });
        },
    }
}