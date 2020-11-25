import Vue from 'vue';
import ResizePlug from './resize-plug';
import RouterPlug from './router-plug';
import FontAwesomeIcon from './fortawesome-vue';
import WaitPlug from './wait-plug';

export default async function (app) {
    let inject = (name, plugin) => {
        let key = `$${name}`;
        app[key] = plugin;
        app.store[key] = plugin;

        Vue.use(() => {
            // eslint-disable-next-line no-prototype-builtins
            if (Vue.prototype.hasOwnProperty(key)) {
                return
            }
            Object.defineProperty(Vue.prototype, key, {
                get() {
                    return this.$root.$options[key]
                }
            })
        })
    };

    WaitPlug(app, inject);
    ResizePlug(inject);
    RouterPlug(app, inject);
    FontAwesomeIcon();
}