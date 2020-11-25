<template>
    <div class="main-page">
        <div class="main-page-item" ref="item" >
            <Spinner
                v-if="isAvatarLoading"
                class="spinner"
            />
            <img 
                v-else
                :style="avatarStyle"
                class="avatar" 
                :src="currentAvatar"
            >
        </div>
    </div>
</template>

<script>
import AvatarImage from '@/assets/img/avatar/Avatar.png';
import Spinner from '@/components/loading/Spinner';
import { mapGetters } from 'vuex';

export default {
    name: "VMainPage",
    components: {
        Spinner
    },
    data() {
        return {
            windowHeight: 0
        }
    },
    computed: {
        ...mapGetters({
            windowSizes: "windowSize/sizes",
            shopItemBuyed: "shopItemBuyed/data"
        }),
        currentCloth() {
            return this.shopItemBuyed.filter(c => c.type == "cloth").find(c => c.active);
        },
        currentAvatar() {
            if(!this.currentCloth) return AvatarImage;
            return this.currentCloth.avatarImg;
        },
        isAvatarLoading() {
            return this.$wait.loading("avatar");
        },
        avatarStyle() {
            const height = Math.round((this.windowSizes.windowHeight 
            - this.windowSizes.headerHeightWithShop 
            - this.windowSizes.footerHeight) * 1);
            return {
                'height': `${height}px`
            }
        }
    },
}
</script>

<style lang="sass" scoped>
    @import "@/assets/styles"
    .main-page
        display: flex
        flex-direction: column
        .main-page-item
            flex: 1 0 auto
            display: flex
            justify-content: center
            align-items: flex-end    
            height: 100%
            width: 100%
    .spinner
        margin-bottom: 50vh
        
</style>