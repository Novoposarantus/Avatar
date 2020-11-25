<template>
    <div class="header" :style="headerStyle">
        <div class="person-info" ref="header">
            <div class="d-flex">
                <div class="person-info-details" :class="powerClass">
                    <div><font-awesome-icon class="icon" icon="fist-raised"/></div>
                    <Spinner 
                        v-if="isPowerLoading"
                        size="sm"
                    />
                    <div v-else class="text">{{avatarPower}}</div>
                </div>
                <div class="person-info-details" :class="itcoinsClass">
                    <div><font-awesome-icon class="icon" icon="coins"/></div>
                    <Spinner
                        v-if="isItCoinsLoading"
                        size="sm"
                    />
                    <div v-else class="text">{{itCoins}}</div>
                </div>
            </div>
            <div v-if="showCloth">
                <button
                    type="button"
                    class="cloth-button"
                    @click="triggerShop"
                >
                    <font-awesome-icon class="icon" icon="tshirt"/> 
                </button>
            </div>
        </div>
        <div class="items" v-if="showItems">
            <ShopItems
                class="shop-item"
                v-for="cloth in shopItemBuyed"
                :key="cloth.id"
                :shopItem="cloth"
            />
        </div>
    </div>
</template>

<script>
import ShopItems from '@/components/ShopItem';
import Spinner from '@/components/loading/Spinner';
import { mapGetters } from 'vuex'

export default {
    name: "PersonInfo",
    components: {
        Spinner,
        ShopItems
    },
    data() {
        return {
            showItems: false
        }
    },
    computed: {
        ...mapGetters({
            avatarPower: "userInfo/avatarPower",
            itCoins: "userInfo/itCoins",
            shopItemBuyed: "shopItemBuyed/data",
            windowSizes: "windowSize/sizes"
        }),
        isPowerLoading() {
            return this.$wait.loading("avatar-power");
        },
        isItCoinsLoading() {
            return this.$wait.loading("itcoins");
        },
        powerClass() {
            return {
                'loading': this.isPowerLoading
            }
        },
        itcoinsClass() {
            return {
                'loading': this.isItCoinsLoading
            }
        },
        showCloth() {
            return this.shopItemBuyed.length > 0;
        },
        headerStyle() {
            return {
                'width': `${this.windowSizes?.mainWidth}px`
            }
        }
    },
    methods: {
        triggerShop() {
            this.showItems = !this.showItems;
            setTimeout(() => {
                this.$resize.event();
            }, 0);
        }
    }
}
</script>

<style lang="sass" scoped>
    @import "@/assets/styles"
    .header
        position: fixed
        background: white
        border-bottom: 1px solid $border-color

    .person-info
        display: flex
        justify-content: space-between
        align-items: center
        .person-info-details
            display: flex
            align-items: center
            padding: 5px
            margin-right: 20px
            .icon
                margin-right: 10px
        .person-info-details.loading
            align-items: flex-end
            .icon
                margin-right: 20px
        .icon
            margin-right: 10px
            color: $menu
        .text
            font-size: 20px
    .cloth-button
        cursor: pointer
        border: none
        outline: none
        background: transparent
    @media screen and (max-width: $sm - 1px)
        .icon
            font-size: 40px
    @media screen and (min-width: $sm)
        .icon
            font-size: 32px
    .items
        display: flex
        overflow: auto
        white-space: nowrap
        .shop-item
            display: block
</style>