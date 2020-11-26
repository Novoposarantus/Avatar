<template>
    <div class="shop-item" :class="itemClass">
        <img :src="shopItem.img" @click="onClick">
        <div v-if="isShop" class="shop-info">
            <template v-if="canBuy">
                <div class="d-flex">
                    <div><font-awesome-icon class="icon" icon="coins"/></div>
                    <div class="text" :class="iconClass">{{shopItem.price}}</div>
                </div>
                <div v-if="shopItem.power"  class="d-flex">
                    <div><font-awesome-icon class="icon" icon="fist-raised"/></div>
                    <div class="text" :class="powerClass">{{shopItem.power}}</div>
                </div>
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
            itCoins: "userInfo/itCoins",
            avatarPower: "userInfo/avatarPower"
        }),
        hasMoney() {
            return this.itCoins >= this.shopItem.price
        },
        hasPower() {
            return this.avatarPower >= this.shopItem.power
        },
        canBuy() {
            return this.isShop && ((this.isCloth && !this.shopItemBuyed.find(x => x.id == this.shopItem.id)) || !this.isCloth)
        },
        iconClass() {
            return {
                'no-money': !this.hasMoney
            }
        },
        powerClass() {
            return {
                'no-money': !this.hasPower
            }
        },
        isCloth() {
            return this.shopItem.type == "cloth";
        },
        isFood() {
            return this.shopItem.type == "food";
        },
        currentCloth() {
            return this.shopItemBuyed.filter(c => c.type == "cloth" && c.active);
        },
        isActualCloth() {
            return this.isCloth 
            && this.currentCloth 
            && this.currentCloth.length > 0 
            && this.currentCloth.find(c => c.id == this.shopItem.id);
        },
        canUse() {
            return !this.isShop
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
            if(!this.canBuy || !this.hasMoney || !this.hasPower) return;
            this.$emit("buy");
        },
        onUse() {
            if(this.isShop) return;
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
        justify-content: space-between
        background: white
        font-size: 20px
        .icon
            margin-right: 10px
            color: $menu
        .no-money
            color: red
</style>