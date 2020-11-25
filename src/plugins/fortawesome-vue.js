import Vue from "vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faShoppingCart,
    faUserAstronaut,
    faTasks,
    faFistRaised,
    faCoins,
    faTshirt,
    faCarBattery,
    faCheck
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faShoppingCart,
    faUserAstronaut,
    faTasks,
    faFistRaised,
    faCoins,
    faTshirt,
    faCarBattery,
    faCheck
);

export default function () {
    Vue.component('font-awesome-icon', FontAwesomeIcon)
}
