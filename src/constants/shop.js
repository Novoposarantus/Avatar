import AvatarJ from '@/assets/img/avatar/Avatar_J.png';

import Jacket from '@/assets/img/cloth/jacket.png';
import Battary from '@/assets/img/battary.png';

export const shop = [
    {
        id: 0,
        img: Battary,
        type: "food",
        rarity: 1,
        price: 100,
        callback: (store) => {
            store.dispatch("userInfo/ADD_CHARGE", 0.4)
        }
    },
    {
        id: 1,
        img: Jacket,
        avatarImg: AvatarJ,
        type: "cloth",
        rarity: 1,
        price: 50
    },
    {
        id: 2,
        img: Jacket,
        avatarImg: AvatarJ,
        type: "cloth",
        rarity: 2,
        price: 100
    },
    {
        id: 3,
        img: Jacket,
        avatarImg: AvatarJ,
        type: "cloth",
        rarity: 3,
        price: 200
    },
    {
        id: 4,
        img: Jacket,
        avatarImg: AvatarJ,
        type: "cloth",
        rarity: 4,
        price: 400
    },
    {
        id: 5,
        img: Jacket,
        avatarImg: AvatarJ,
        type: "cloth",
        rarity: 5,
        price: 800
    },
    {
        id: 6,
        img: Jacket,
        avatarImg: AvatarJ,
        type: "cloth",
        rarity: 2,
        price: 100
    },
    {
        id: 7,
        img: Jacket,
        avatarImg: AvatarJ,
        type: "cloth",
        rarity: 2,
        price: 100
    },
    {
        id: 8,
        img: Jacket,
        avatarImg: AvatarJ,
        type: "cloth",
        rarity: 2,
        price: 100
    },
]