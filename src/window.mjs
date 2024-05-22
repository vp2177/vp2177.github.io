import {createElement as e} from 'react'

export function MovableWindow({title = 'Untitled', children}) {
    return e('div', {className: 'window'}, 
        e('header', {},
            e('em', {className: 'title'}, title)
        ),
        e('output', null, children)
    )
}
