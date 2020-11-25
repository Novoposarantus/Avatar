import Vue from "vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faShoppingCart,
    faUserAstronaut,
    faTasks,
    faFistRaised,
    faCoins,
    faTshirt
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faShoppingCart,
    faUserAstronaut,
    faTasks,
    faFistRaised,
    faCoins,
    faTshirt
);

export default function () {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
}
