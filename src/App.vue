<template>
  <div id="app">
    <div class="main-wrapper">
        <Header ref="header"/>
        <Main ref="main"/>
        <Footer ref="footer"/>
        <History v-if="currentHistoryStep"/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/layout/Footer';
import Main from '@/components/layout/Main';
import Header from '@/components/layout/Header';
import History from '@/components/History';
import {startGame} from '@/helpers';
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    History
  },
  computed: {
    ...mapGetters({
        currentHistoryStep: "history/currentHistory"
    })
  },
  methods: {
    ...mapMutations({
      setWindowSize: "windowSize/SET_SIZE"
    }),
    matchWindow() {
      this.setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        headerHeight: this.$refs.header.$refs.header.clientHeight,
        headerHeightWithShop: this.$refs.header.$el.clientHeight,
        mainWidth: this.$refs.main.$el.clientWidth,
        footerHeight: this.$refs.footer.$el.clientHeight
      });
    }
  },
  created() {
    startGame(this.$store);
  },
  mounted() {
    this.matchWindow();
    this.$resize.on(this.matchWindow);
    window.addEventListener('resize', this.$resize.event);
  },
  beforeDestroy() {
    this.$resize.off(this.matchWindow);
    window.removeEventListener('resize', this.$resize.event);
  }
}
</script>

<style lang="sass" >
  @import "@/assets/styles"
  @import "@/assets/styles/default-styles"
  *
    box-sizing: border-box
    -webkit-tap-highlight-color: transparent !important

  html, body
    width: 100%
    padding: 0
    margin: 0
    .main-wrapper
      display: flex
      flex-direction: column
      margin: 0 auto
      min-height: 100vh
      width: 100%
      outline: 1px solid $border-color
  
  @media screen and (min-width: $sm)
    .main-wrapper
      max-width: 480px
  @media screen and (min-width: $md)
    .main-wrapper
      max-width: 700px
    ::-webkit-scrollbar 
      width: 5px
      height: 5px
  @media screen and (max-width: $sm - 1px)
    .main-wrapper
      max-width: 480px
    ::-webkit-scrollbar 
      width: 0.1px
      height: 0.1px

  ::-webkit-scrollbar-track
    box-shadow: inset 0 0 5px #272727
    border-radius: 10px
  
  
  ::-webkit-scrollbar-thumb 
    background: #989898
    border-radius: 10px
  
</style>
