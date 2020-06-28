module.exports = class InMemoryRepository {
    constructor(fs, path) {
        this.fs = fs
        this.path = path
    }   

    generateId() {
        return Date.now()
    }

    getData() {
        let rawData = this.fs.readFileSync(this.path)
        return JSON.parse(rawData)
    }

    save(data) {
        let oldData = this.getData()
        
        oldData[this.generateId()] = data

        this.fs.writeFile(this.path, JSON.stringify(oldData), function(e) {
            if (e) {
                console.log(e)
                return false
            }
        })

        return true
    }
}