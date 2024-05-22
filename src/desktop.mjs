import {createElement as e, useState, useMemo} from 'react'

export function TickingClock({showDate = false}) {
    //const [now, setNow] = useState(() => new Date())
    const now = new Date
    const _hour = now.getHours().toString().padStart(2, '0')
    const _min = now.getMinutes().toString().padStart(2, '0')
    const _sec = now.getSeconds().toString().padStart(2, '0')
    // TODO: memoize

    return e('time', null, 
        e('span', {}, `${_hour}:${_min}:${_sec}`)
    )
}