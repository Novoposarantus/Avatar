<template>
    <div>
        <img 
            ref="avatar"
            :style="avatarStyle"
            class="avatar" 
            :src="AvatarImage"
        >
        <img
            v-for="cloth in currentCloths"
            :key="cloth.id"
            class="cloths"
            :style="clothStyles" 
            :src="cloth.img"
        >
    </div>
</template>

<script>
import AvatarImage from '@/assets/img/Robot_itmo.png';
import { mapGetters } from 'vuex';

export default {
    name: "Avatar",
    data() {
        return {
            AvatarImage,
            position: {}
        }
    },
    computed: {
        ...mapGetters({
            windowSizes: "windowSize/sizes",
            shopItemBuyed: "shopItemBuyed/data",
            itemsOpen: "shopItemBuyed/openItems"
        }),
        currentCloths() {
            return this.shopItemBuyed.filter(c => c.type == "cloth" || c.active);
        },
        currentAvatar() {
            if(!this.currentCloth) return AvatarImage;
            return this.currentCloth.avatarImg;
        },
        isAvatarLoading() {
            return this.$wait.loading("avatar");
        },
        avatarStyle() {
            const startHeight = Math.round(this.windowSizes?.windowHeight 
            - this.windowSizes?.headerHeight 
            - this.windowSizes?.footerHeight);
            const height = Math.round(this.windowSizes?.windowHeight 
            - this.windowSizes?.headerHeightWithShop 
            - this.windowSizes?.footerHeight);
            const width = Math.round((height/startHeight) * this.windowSizes.mainWidth);
            return {
                'height': `${height}px`,
                'width': `${width}px`
            }
        },
        clothStyles() {
            return {
                ...this.avatarStyle,
                'top': `${this.position.top}px`,
                'left': `${this.position.left}px`
            }
        }
    },
    methods: {
        matchPosition() {
            const rect = this.$refs.avatar.getBoundingClientRect();
            this.$set(this.position, 'top', rect.top);
            this.$set(this.position, 'right', rect.right);
            this.$set(this.position, 'bottom', rect.bottom);
            this.$set(this.position, 'left', rect.left);
        }
    },
    mounted() {
        this.matchPosition();
        this.$resize.on(this.matchPosition);
    },
    beforeDestroy() {
        this.$resize.off(this.matchPosition);
    }
}
</script>

<style lang="sass" scoped>
    @import "@/assets/styles"
    .cloths
        position: absolute
</style>