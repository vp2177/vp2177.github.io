// TODO: import APPS from './apps.json'
import {getComponents} from './router.mjs'
import R, {createElement as e} from 'react'
import RD from 'react-dom/client'

function init() {
    try {
        console.info(router.parse(), R.version)
    } catch {
        console.warn('!')
    }

    const _main = document.querySelector('#main')
    const _root = RD.createRoot(_main)
    _root.render(e('mark', null, '...', null, undefined, indexedDB, '', -1, 0, [], [1,2], false, true, e('em', {}, 'end')))
}

init()
/* TODO: Sixel */
