//RootWin
import APPS from './apps.json'
import {Router} from './router.mjs'

export const router =  new Router()

function init() {
    router.parse()
    console.trace(APPS)

    const root = document.createElement('div')
    root.className = 'root'
    document.body.appendChild(root)
}

init()
/* TODO: Sixel */
