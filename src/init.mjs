//RootWin
// TODO: import APPS from './apps.json'
import {Router} from './router.mjs'
import R from 'react'
import RDC from 'react-dom/client'
//import JQ from 'jquery'

export const router =  new Router()

function init() {
    console.info(router.parse())

    const root = document.createElement('div')
    root.className = 'root'
    document.body.appendChild(root)
    
    console.info( R.version)
}

init()
/* TODO: Sixel */
