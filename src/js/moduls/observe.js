 class Observer {
    
    constructor(){
        
        this.subscriptions = {}
    }
    subscribe(type, fn) {
        if (!this.subscriptions[type]) {
            this.subscriptions[type] = []
        }
        if (this.subscriptions[type].indexOf(fn) == -1) {
            this.subscriptions[type].push(fn)
        }
    }
    unsubscribe(type, fn) {
        let listeners = this.subscriptions[type]
        if (!listeners) return
        let index = listeners.indexOf(fn);
        if (index > -1) {
            this.subscriptions.splice(index, 1)
        }
    }
    puplish(type, evtobj) {
        if (!this.subscriptions[type]) {
            return
        }
        if (!evtobj.type) {
            evtobj.type = type
        }
        let listeners = this.subscriptions[type];

        for (let index = 0; index < listeners.length; index++) {
            //console.log(evtobj)
            listeners[index](evtobj);

        }
    }

}

export default Observer