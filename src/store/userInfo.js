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
        avatarPower: state  => state.userInfo?.game_power,
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
                let page = 1;
                let length = 1;
                while(length > 0) {
                    const {json} = await sendRequest(api.users, "GET", {
                        page
                    });
                    const user = json.users.find(u => u.attributes.isu_id == id);
                    if(user) {
                        commit("SET_USER_INFO", user.attributes);
                        break;
                    }
                    length = json.users.length;
                    page++
                }
            });
        },
        "GET_AVATAR": async (store) => {
            const {commit} = store;
            return await actionBody(store, async () => {
                await sleep(getRandomInt(500, 1500));
                commit("SET_AVATAR", getRandomInt(10, 300));
            });
        },
        "GET_ITCOINS": async (store) => {
            const {commit} = store;
            return await actionBody(store, async () => {
                commit("SET_ITCOINS", 0);
            });
        },
    }
}