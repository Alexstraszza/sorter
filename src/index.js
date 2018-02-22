class Sorter {
    constructor() {
        this.array = []
        this.comparator = (a, b) => {
            return a - b
        }
    }

    add(element) {
        this.array.push(element);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        let tmp = []
        for (let i = 0; i < indices.length; i++) {
            tmp.push(this.array[indices[i]])
        }
        tmp.sort(this.comparator)
        indices.sort()
        for (let i = 0; i < indices.length; i++) {
            this.array[indices[i]] = tmp[i]
        }

    }

    setComparator(compareFunction) {
        this.comparator = compareFunction
    }
}


module.exports = Sorter
