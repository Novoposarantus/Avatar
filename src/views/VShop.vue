<template>
    <div class="main-page">
        <div>
            <ShopItems
                v-for="food in foods"
                :key="food.id"
                :shopItem="food"
                isShop
                @buy="onBuyFood(food)"
            />
        </div>
        <div>
            <ShopItems
                v-for="cloth in cloths"
                :key="cloth.id"
                :shopItem="cloth"
                isShop
                @buy="onBuy(cloth)"
            />
        </div>
    </div>
</template>

<script>
import ShopItems from '@/components/ShopItem';
import {shop} from '@/constants';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: "VShop",
    components: {
        ShopItems
    },
    computed: {
        ...mapGetters({
            currentHistoryStep: "history/currentHistory"
        }),
        shop() {
            return shop.sort((a,b) => a.price - b.price);
        },
        isShopLoading() {
            return this.$wait.loading("shop");
        },
        cloths() {
            return this.shop.filter(s => s.type == "cloth");
        },
        foods() {
            return this.shop.filter(s => s.type == "food");
        },
        canBuyCloth() {
            return !this.currentHistoryStep || this.currentHistoryStep?.buyJacket;
        },
        canBuyBattary() {
            return !this.currentHistoryStep || this.currentHistoryStep?.buyBattary;
        }
    },
    methods: {
        ...mapActions({
            buy: "shopItemBuyed/ADD",
            addCoins: "userInfo/ADD_COINS",
            setCharge: "userInfo/SET_CHARGE",
            historyNext: "history/NEXT"
        }),
        onBuy(shopItem) {
            if(!this.canBuyCloth) return;
            if(this.currentHistoryStep?.buyJacket) {
                this.historyNext();
            }
            this.buy(shopItem);
            this.addCoins(shopItem.price * -1);
        },
        onBuyFood(shopItem) {
            if(!this.canBuyBattary) return;
            if(this.currentHistoryStep?.buyBattary) {
                this.historyNext();
            }
            this.buy(shopItem);
            this.addCoins(shopItem.price * -1);
            this.setCharge(0.1);
        }
    }
}
</script>

<style lang="sass" scoped>
    .main-page
        text-align: center
</style>