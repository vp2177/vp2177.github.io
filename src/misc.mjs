export class CustomElementTest extends HTMLElement {
    constructor() {
        import a from './b'
    }

    // TODO: why aren't custom element methods typed in HTMLElement?
}
