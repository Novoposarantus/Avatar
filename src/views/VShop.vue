<template>
    <div class="main-page">
        <div>
            <ShopItems
                v-for="food in foods"
                :key="food.id"
                :shopItem="food"
                isShop
                @buy="onBuy(food)"
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
import { mapActions } from 'vuex';

export default {
    name: "VShop",
    components: {
        ShopItems
    },
    data() {
        return {
            shop
        }
    },
    computed: {
        isShopLoading() {
            return this.$wait.loading("shop");
        },
        cloths() {
            return this.shop.filter(s => s.type == "cloth");
        },
        foods() {
            return this.shop.filter(s => s.type == "food");
        }
    },
    methods: {
        ...mapActions({
            buy: "shopItemBuyed/ADD",
            addCoins: "userInfo/ADD_COINS"
        }),
        onBuy(shopItem) {
            this.buy(shopItem);
            this.addCoins(shopItem.price * -1);
        }
    }
}
</script>

<style lang="sass" scoped>
    .main-page
        text-align: center
</style>