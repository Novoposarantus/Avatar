class Router {
    constructor(store) {
        this.store = store;
    }

    get route() {
        return this.store.state.router.route;
    }

    push(route) {
        this.store.commit("router/SET", route);
    }
}

export let router;

export default function ({store}, inject) {
    router = new Router(store);
    inject("router", router);
}