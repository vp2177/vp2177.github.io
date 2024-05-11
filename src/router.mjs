export class Router {
    constructor(ps = ';', is = ',') {
        this.ps = ps
        this.is = is
        this.s = new Set()
    }

    parse(src = location.search) {
        console.trace(src)
        this.s = new Set( 
            src.split(this.ps, 1)[0]
                .split(this.is)
        )
        return this
    }
}