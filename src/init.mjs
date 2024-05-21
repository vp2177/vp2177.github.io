// TODO: import APPS from './apps.json'
import {getComponents} from './router.mjs'
import {createElement as e} from 'react'
import * as RD from 'react-dom/client'

function init() {
    console.info(/*R?.version*/)

    const _main = document.querySelector('#main')
    const _root = RD.createRoot(_main)
    _root.render(e('mark', null, '...', null, undefined, indexedDB, '', -1, 0, [], [1,2], false, true, e('em', {}, 'end')))
}

init()
/* TODO: Sixel */