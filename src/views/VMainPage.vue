<template>
    <div class="main-page">
        <div class="main-page-item" ref="item" >
            <Spinner
                v-if="isAvatarLoading"
                class="spinner"
            />
            <Avatar v-else/>
        </div>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Spinner from '@/components/loading/Spinner';

export default {
    name: "VMainPage",
    components: {
        Spinner,
        Avatar
    },
    computed: {
        isAvatarLoading() {
            return this.$wait.loading("avatar");
        }
    }
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