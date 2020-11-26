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
        itCoins: null,
        charge: null,
        showCharge: false
    },
    getters: {
        avatarPower: state  => state.userInfo?.game_power ?? 0,
        name: state => state.userInfo?.firstname ?? "Незнакомец",
        avatar: state  => state.avatar,
        itCoins: state  => state.itCoins,
        charge: state  => state.charge,
        showCharge: state  => state.showCharge,
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
        "SET_CHARGE": (state, charge) => {
            state.charge = charge;
            state.showCharge = true;
        },
        "ADD_CHARGE": (state, charge) => {
            const newCharge = state.charge + charge;
            if(newCharge > 1) {
                state.charge = 1;
            } else if (newCharge < 0) {
                state.charge = 0;
            } else {
                state.charge = newCharge;
            }
        },  
        "ADD_COINS": (state, itCoins) => {
            state.itCoins = state.itCoins + itCoins;
        }
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
                        return;
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
        "ADD_COINS": async (store, coins) => {
            const {commit} = store;
            commit("ADD_COINS", coins);
        },
        "SET_CHARGE": async (store, charge) => {
            const {commit} = store;
            commit("SET_CHARGE", charge);
        },
        "ADD_CHARGE": async (store, charge) => {
            const {commit} = store;
            commit("ADD_CHARGE", charge);
        }
    }
}