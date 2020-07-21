(function () {
    let uniqueId = 0

    return class Extensible {
        constructor () {
            this.id = uniqueId++
        }

        extend (template) {
            for (let prop in template) {
                if (template.hasOwnProperty(prop)) {
                    if (typeof template[prop] === 'function') {
                        Extensible.prototype[prop] = template[prop]
                    } else {
                        this[prop] = template[prop]
                    }
                }
            }
        }
    }
})()
