export class Router {
    /** @type {Set<string>} */
    s;

    constructor(ps = ';', is = ',', strip = /^\?/) {
        this.ps = ps
        this.is = is
        this.strip = strip
    }

    parse(src = location.search) {
        //console.trace(src)
        this.s = new Set( 
            src.replace(this.strip, '') 
                .split(this.ps, 1)[0]
                .split(this.is)
        )
        return this.s
    }
}
