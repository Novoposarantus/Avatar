<template>
    <div class="shop-item" :class="itemClass" >
        <img :src="shopItem.img">
        <div v-if="isShop" class="shop-info" @click="onBuy">
            <template v-if="canBuy">
                <div><font-awesome-icon class="icon" icon="coins"/></div>
                <div class="text">{{shopItem.price}}</div>
            </template>
            <div v-else>
                Куплен
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: "ShopItem",
    props: {
        shopItem: {
            type: Object,
            required: true
        },
        isShop: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        ...mapGetters({
            shopItemBuyed: "shopItemBuyed/data"
        }),
        canBuy() {
            return this.isShop && !this.shopItemBuyed.find(x => x.id == this.shopItem.id)
        },
        itemClass() {
            return {
                'common': this.shopItem.rarity == 1,
                'rare': this.shopItem.rarity == 2,
                'ultra-rare': this.shopItem.rarity == 3,
                'imortal': this.shopItem.rarity == 4,
                'arcane': this.shopItem.rarity == 5,
                'can-buy': this.canBuy
            }
        }
    },
    methods: {
        onBuy() {
            if(!this.canBuy) return;
            this.$emit("buy");
        }
    }
}
</script>

<style lang="sass" scoped>
    @import "@/assets/styles"
    .shop-item
        cursor: default
        margin: 5px
        display: inline-block
        border: 4px solid black
    .shop-item.can-buy
        cursor: pointer
    .shop-item.common
        background: $common-back
        border-color: $common
    .shop-item.rare
        background: $rare-back
        border-color: $rare
    .shop-item.ultra-rare
        background: $ultra-rare-back
        border-color: $ultra-rare
    .shop-item.imortal
        background: $imortal-back
        border-color: $imortal
    .shop-item.arcane
        background: $arcane-back
        border-color: $arcane
    @media screen and (max-width: $sm - 1px)
        img
            max-width: 150px
    @media screen and (min-width: $sm)
        img
            max-width: 200px
    .shop-info
        padding: 5px
        display: flex
        background: white
        font-size: 20px
        .icon
            margin-right: 10px
            color: $menu
</style>