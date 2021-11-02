module.exports = class {
    constructor(iterator) {
        this._data = [];
        if (iterator) {
            for (let val of iterator) {

                if (!this._data.includes(val)) {
                    this._data.push(val);
                }
            }
        }
    }
    // реализация
    [Symbol.iterator] = function*() {
        for (let v of Object.values(this._data)) {
            yield v;
        }
    }
    get [Symbol.toStringTag]() {
        return '^_^'
    }

    add(value) {
        if (!this.has(value)) {
            this._data.push(value);
        }
        return this;
    }

    has(obj) {
        return this._data.includes(obj);
    }

    delete(val) {
        const pos = this._data.indexOf(val);
        if (~pos) {
            this._data.splice(pos, 1);
        }
    }

    keys() {
        let self = this;
        function* _iter() {
            for (let v of Object.values(self._data)) {
                yield v;
            }
        }
        return _iter();
    }

    values() {
        let self = this;
        function* _iter() {
            for (let v of Object.values(self._data)) {
                yield v;
            }
        }
        return _iter();
    }

    entries() {
        let self = this;
        function* _iter() {
            for (let v of Object.values(self._data)) {
                yield [v, v];
            }
        }
        return _iter();
    }

    clear() {
        this._data = [];
    }

    forEach(callback) {
        for (let v of this._data) {
            callback(v);
        }
    }

    get size() {
        return this._data.length;
    }

    call() {
        return '[object ^_^]';
    }

    toString() {
        return '[object ^_^]';
    }
    valueOf() {
        return this;
    }
}

