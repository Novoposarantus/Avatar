<template>
    <div class="shop-item" :class="itemClass">
        <img :src="shopItem.img" @click="onClick">
        <div v-if="isShop" class="shop-info">
            <template v-if="canBuy">
                <div><font-awesome-icon class="icon" icon="coins"/></div>
                <div class="text" :class="iconClass">{{shopItem.price}}</div>
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
            shopItemBuyed: "shopItemBuyed/data",
            itCoins: "userInfo/itCoins"
        }),
        hasMoney() {
            return this.itCoins >= this.shopItem.price
        },
        canBuy() {
            return this.isShop && ((this.isCloth && !this.shopItemBuyed.find(x => x.id == this.shopItem.id)) || !this.isCloth)
        },
        iconClass() {
            return {
                'no-money': !this.hasMoney
            }
        },
        isCloth() {
            return this.shopItem.type == "cloth";
        },
        isFood() {
            return this.shopItem.type == "food";
        },
        currentCloth() {
            return this.shopItemBuyed.filter(c => c.type == "cloth").find(c => c.active);
        },
        isActualCloth() {
            return this.isCloth && this.currentCloth && this.currentCloth.id == this.shopItem.id;
        },
        canUse() {
            return !this.isShop && ((this.isCloth && this.currentCloth && this.currentCloth.id != this.shopItem.id) || !this.currentCloth ||  this.isFood);
        },
        itemClass() {
            return {
                'common': this.shopItem.rarity == 1,
                'rare': this.shopItem.rarity == 2,
                'ultra-rare': this.shopItem.rarity == 3,
                'imortal': this.shopItem.rarity == 4,
                'arcane': this.shopItem.rarity == 5,
                'can-buy': (this.canBuy && this.hasMoney) || this.canUse,
                'active': this.isActualCloth && !this.isShop
            }
        }
    },
    methods: {
        onClick() {
            if(this.isShop) {
                this.onBuy();
            } else  {
                this.onUse();
            }
        },
        onBuy() {
            if(!this.canBuy || !this.hasMoney) return;
            this.$emit("buy");
        },
        onUse() {
            if(this.isShop || this.isActualCloth) return;
            this.$emit("use");
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
    .shop-item.active
        border-color: $task-allow
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
        .no-money
            color: red
</style>