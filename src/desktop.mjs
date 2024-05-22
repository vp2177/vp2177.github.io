import {createElement as e, useState, useMemo} from 'react'

export function TickingClock({showDate = false}) {
    const [now, setNow] = useState(() => new Date())
    const hour = now.getHours()
    const min = now.getMinutes()
    const sec = now.getSeconds()

    return e('time', null, 
        e('span', {}, now.toTimeString())
    )
}