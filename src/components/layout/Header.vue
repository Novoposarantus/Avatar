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
            <div v-if="showCharge">
                Заряд: {{charge * 100}}%
            </div>
            <div class="d-flex align-center">
                <div v-if="showCloth">
                    <button
                        type="button"
                        class="cloth-button"
                        @click="triggerCloth"
                    >
                        <font-awesome-icon class="icon" icon="tshirt"/> 
                    </button>
                </div>
                <div v-if="showFood">
                    <button
                        type="button"
                        class="cloth-button"
                        @click="triggerFood"
                    >
                        <font-awesome-icon class="icon" icon="car-battery"/> 
                    </button>
                </div>
            </div>
        </div>
        <div class="items" v-if="showClothItems">
            <ShopItems
                class="shop-item"
                v-for="cloth in cloths"
                :key="cloth.id"
                :shopItem="cloth"
                @use="onDress(cloth)"
            />
        </div>
        <div class="items" v-if="showFoodItems">
            <ShopItems
                class="shop-item"
                v-for="food in foods"
                :key="food.id"
                :shopItem="food"
                @use="onUse(food)"
            />
        </div>
    </div>
</template>

<script>
import ShopItems from '@/components/ShopItem';
import Spinner from '@/components/loading/Spinner';
import {pages} from '@/constants';
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Header",
    components: {
        Spinner,
        ShopItems
    },
    data() {
        return {
            showClothItems: false,
            showFoodItems: false,
        }
    },
    computed: {
        ...mapGetters({
            avatarPower: "userInfo/avatarPower",
            currentHistoryStep: "history/currentHistory",
            itCoins: "userInfo/itCoins",
            shopItemBuyed: "shopItemBuyed/data",
            windowSizes: "windowSize/sizes",
            charge: "userInfo/charge",
            showCharge: "userInfo/showCharge",
        }),
        cloths() {
            return this.shopItemBuyed.filter(c => c.type == "cloth")
        },
        foods() {
            return this.shopItemBuyed.filter(c => c.type == "food")
        },
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
            return this.cloths.length > 0;
        },
        showFood() {
            return this.foods.length > 0;
        },
        headerStyle() {
            return {
                'width': `${this.windowSizes?.mainWidth}px`
            }
        },
        canOpenCloths() {
            return !this.currentHistoryStep || this.currentHistoryStep?.wardrobe;
        },
        canOpenFoodList() {
            return !this.currentHistoryStep || this.currentHistoryStep?.oppenFoodList;
        },
        canDress() {
            return !this.currentHistoryStep || this.currentHistoryStep?.dressJacet;
        },
        canUse() {
            return !this.currentHistoryStep || this.currentHistoryStep?.useBattary;
        }
    },
    methods: {
        ...mapActions({
            dress: "shopItemBuyed/DRESS",
            use: "shopItemBuyed/USE",
            setTasksAllow: "tasks/SET_ALLOW",
            historyNext: "history/NEXT",
            triggerOpen: "shopItemBuyed/TRIGGER_OPEN"
        }),
        triggerCloth() {
            if(!this.canOpenCloths) return;
            if(this.currentHistoryStep?.wardrobe) {
                this.historyNext();
            }
            this.$router.push({name: pages.main.name});
            this.showFoodItems = false;
            this.showClothItems = !this.showClothItems;
            this.resize();
        },
        triggerFood() {
            if(!this.canOpenFoodList) return;
            this.$router.push({name: pages.main.name});
            this.showClothItems = false;
            this.showFoodItems = !this.showFoodItems;
            this.resize();
        },
        onDress(shopItem) {
            if(!this.canDress) return;
            if(this.currentHistoryStep?.dressJacet) {
                this.historyNext();
            }
            this.dress(shopItem);
            this.setTasksAllow(2);
        },
        onUse(shopItem) {
            if(!this.canUse) return;
            if(this.currentHistoryStep?.useBattary) {
                this.historyNext();
            }
            shopItem.callback(this.$store);
            this.use(shopItem);
        },
        resize() {
            setTimeout(() => {
                this.$resize.event();
                setTimeout(() => {
                    this.$resize.event();
                }, 0);
            }, 0);
        } 
    },
    watch: {
        '$router.route': function(newValue) {
            if(newValue.name == pages.main.name) return;
            this.showClothItems = false;
            this.showFoodItems = false;
            this.resize();
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
            font-size: 32px
            margin-right: 10px
            color: $menu
        .text
            font-size: 20px
    .cloth-button
        cursor: pointer
        border: none
        outline: none
        background: transparent
    .items
        display: flex
        overflow: auto
        white-space: nowrap
        .shop-item
            display: block
</style>