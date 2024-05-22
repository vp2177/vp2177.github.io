// TODO: import APPS from './apps.json'
import {getComponents} from './router.mjs'
import {MovableWindow} from './window.mjs'
import {RootWindow, TickingClock} from './desktop.mjs'
import {createElement as e} from 'react'
import RD from 'react-dom/client'

function init() {
    //console.info(R?.version)

    const _main = document.querySelector('#main')
    const _root = RD.createRoot(_main)
    _root.render(e(RootWindow, null,
        e(MovableWindow, {}, e(TickingClock) )
    ))
}

init()
/* TODO: Sixel */