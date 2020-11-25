class Resize {
    constructor() {
        this.callBackArray = [];
    }

    on(callBack) {
        if(this.callBackArray.includes(callBack)) return;
        this.callBackArray.push(callBack);
    }

    off(callBack) {
        if(!this.callBackArray.includes(callBack)) return;
        this.callBackArray.splice(this.callBackArray.indexOf(callBack), 1);
    }

    get event() {
        return () => {
            this.callBackArray.forEach(callback => {
                callback();
            });
        }
    }
}

export default function (inject) {
    const resize = new Resize();
    inject("resize", resize);
}