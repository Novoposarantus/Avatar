<template>
    <div class="main-page">
        <ShopItems
            v-for="cloth in shop"
            :key="cloth.id"
            :shopItem="cloth"
            isShop
            @buy="buy(cloth)"
        />
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
        }
    },
    methods: {
        ...mapActions({
            buy: "shopItemBuyed/ADD"
        })
    }
}
</script>

<style lang="sass" scoped>
    .main-page
        text-align: center
</style>