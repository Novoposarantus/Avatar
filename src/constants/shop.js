import Kepka_na_robote from '@/assets/img/cloth/avatar/Kepka_na_robote.png';
import Khudi_na_robote from '@/assets/img/cloth/avatar/Khudi_na_robote.png';
import Futbolka_bez_robota from '@/assets/img/cloth/avatar/Futbolka_bez_robota.png';
import VR_bez_robota from '@/assets/img/cloth/avatar/VR_bez_robota.png';
import Tsep_na_robote from '@/assets/img/cloth/avatar/Tsep_na_robote.png';
import Krasnoe_khudi_na_robote from '@/assets/img/cloth/avatar/Krasnoe_khudi_na_robote.png';


import Kepka from '@/assets/img/cloth/shop/Kepka.png';
import Khudi_Itmo from '@/assets/img/cloth/shop/Khudi_Itmo.png';
import VR_ochki from '@/assets/img/cloth/shop/VR_ochki.png';
import Futbolka from '@/assets/img/cloth/shop/Futbolka.png';
import Krasnoe_khudi from '@/assets/img/cloth/shop/Krasnoe_khudi.png';
import Tsep from '@/assets/img/cloth/shop/Tsep.png';
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
        img: Kepka,
        avatarImg: Kepka_na_robote,
        type: "cloth",
        pos: "top",
        rarity: 2,
        power: 300,
        price: 150
    },
    {
        id: 2,
        img: Khudi_Itmo,
        avatarImg: Khudi_na_robote,
        type: "cloth",
        pos: "mid",
        rarity: 1,
        power: 0,
        price: 50
    },
    {
        id: 3,
        img: VR_ochki,
        avatarImg: VR_bez_robota,
        type: "cloth",
        pos: "top",
        rarity: 4,
        power: 700,
        price: 200
    },
    {
        id: 4,
        img: Futbolka,
        avatarImg: Futbolka_bez_robota,
        type: "cloth",
        pos: "mid",
        rarity: 3,
        power: 450,
        price: 400
    },
    {
        id: 5,
        img: Tsep,
        avatarImg: Tsep_na_robote,
        type: "cloth",
        pos: "tail",
        rarity: 5,
        power: 999,
        price: 800
    },
    {
        id: 6,
        img: Krasnoe_khudi,
        avatarImg: Krasnoe_khudi_na_robote,
        type: "cloth",
        rarity: 1,
        pos: "mid",
        power: 100,
        price: 100
    },
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