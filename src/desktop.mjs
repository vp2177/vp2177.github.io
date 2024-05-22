import {createElement as e, useState, useMemo, useEffect, useInsertionEffect} from 'react'

export function TickingClock({showDate = false, updateInterval = 2000}) {
    const now = new Date
    const _hour = now.getHours().toString().padStart(2, '0')
    const _min = now.getMinutes().toString().padStart(2, '0')
    const _sec = now.getSeconds().toString().padStart(2, '0')
    // TODO: memoize (if needed)
    const [n, setN] = [-1, () => {}] //useState(0)
    useEffect(() => {
        const i = setInterval(() => {
            setN((n) => n+1)
            console.info('Tock..')
        }, updateInterval)
        return () => clearInterval(i)
    }, [])

    return e('time', null, 
        e('span', {}, `${_hour}:${_min}:${_sec}`)
    )
}

export function RootWindow({children}) {
    return e('div', {className: 'rootWindow'},
        children
    )
}