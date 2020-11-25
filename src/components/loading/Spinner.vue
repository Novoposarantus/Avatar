<template>
    <div class="spinner-wrapper" :class="wrapperClass">
        <div class="loader">Loading...</div>
    </div>
</template>

<script>
export default {
    name: "Spinner",
    props: {
        size: {
            type: String,
            required: false,
            default: "xl"
        }
    },
    computed: {
        wrapperClass() {
            return this.size;
        }
    }
}
</script>

<style lang="sass" scoped>
$width-sm: 4px
$width-xl: 10px


.spinner-wrapper 
    display: flex
    justify-content: center
    align-items: center
.loader 
    color: #3d01f5
    text-indent: -9999em
    position: relative
    font-size: 11px
    -webkit-transform: translateZ(0)
    -ms-transform: translateZ(0)
    transform: translateZ(0)
    -webkit-animation-delay: -0.16s !important
    animation-delay: -0.16s !important


//xl
.spinner-wrapper.xl
    .loader,
    .loader:before,
    .loader:after 
        background: #3d01f5
        -webkit-animation: load1-xl 1s infinite ease-in-out
        animation: load1-xl 1s infinite ease-in-out
        width: $width-xl
        height: #{$width-xl * 5}

    .loader:before,
    .loader:after 
        position: absolute
        top: 0
        content: ''

    .loader:before 
        left: -#{$width-xl * 1.5}
        -webkit-animation-delay: -0.32s
        animation-delay: -0.32s

    .loader:after 
        left: #{$width-xl * 1.5}

    @-webkit-keyframes load1-xl
        0%,
        80%,
        100% 
            box-shadow: 0 0
            height: #{$width-xl * 4}
        
        40% 
            box-sadow: 0 -#{$width-xl * 4}
    

    @keyframes load1-xl 
        0%,
        80%,
        100% 
            box-shadow: 0 0
            height: #{$width-xl * 4}
        
        40% 
            box-shadow: 0 -#{$width-xl * 4}
//end xl

//sm
.spinner-wrapper.sm
    .loader,
    .loader:before,
    .loader:after 
        background: #3d01f5
        -webkit-animation: load1-sm 1s infinite ease-in-out
        animation: load1-sm 1s infinite ease-in-out
        width: $width-sm
        height: #{$width-sm * 4}

    .loader:before,
    .loader:after 
        position: absolute
        top: 0
        content: ''

    .loader:before 
        left: -#{$width-sm * 1.5}
        -webkit-animation-delay: -0.32s
        animation-delay: -0.32s

    .loader:after 
        left: #{$width-sm * 1.5}

    @-webkit-keyframes load1-sm 
        0%,
        80%,
        100% 
            box-shadow: 0 0
            height: #{$width-sm * 4}
        
        40% 
            box-sadow: 0 -#{$width-sm * 4}
    

    @keyframes load1-sm 
        0%,
        80%,
        100% 
            box-shadow: 0 0
            height: #{$width-sm * 4}
        
        40% 
            box-shadow: 0 -#{$width-sm * 4}
//end sm
</style>