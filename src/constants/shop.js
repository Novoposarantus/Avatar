import Kepka_na_robote from '@/assets/img/cloth/Kepka_na_robote.png';
import Khudi_na_robote from '@/assets/img/cloth/Khudi_na_robote.png';
import VR_ochki from '@/assets/img/cloth/VR_ochki.png';
import Futbolka from '@/assets/img/cloth/Futbolka.png';
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
        img: Kepka_na_robote,
        type: "cloth",
        pos: "top",
        rarity: 1,
        price: 50
    },
    {
        id: 2,
        img: Khudi_na_robote,
        type: "cloth",
        pos: "mid",
        rarity: 2,
        price: 100
    },
    {
        id: 3,
        img: VR_ochki,
        type: "cloth",
        pos: "top",
        rarity: 3,
        price: 200
    },
    {
        id: 4,
        img: Futbolka,
        type: "cloth",
        pos: "mid",
        rarity: 4,
        price: 400
    },
    // {
    //     id: 5,
    //     img: Jacket,
    //     avatarImg: AvatarJ,
    //     type: "cloth",
    //     rarity: 5,
    //     price: 800
    // },
    // {
    //     id: 6,
    //     img: Jacket,
    //     avatarImg: AvatarJ,
    //     type: "cloth",
    //     rarity: 2,
    //     price: 100
    // },
    // {
    //     id: 7,
    //     img: Jacket,
    //     avatarImg: AvatarJ,
    //     type: "cloth",
    //     rarity: 2,
    //     price: 100
    // },
    // {
    //     id: 8,
    //     img: Jacket,
    //     avatarImg: AvatarJ,
    //     type: "cloth",
    //     rarity: 2,
    //     price: 100
    // },
]