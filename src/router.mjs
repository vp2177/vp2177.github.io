export function getComponents(src = location.search, replace = /^\?/, comma = ',', semicolon = ';') { 
    return src.replace(replace, '').split(semicolon, 1)[0].split(comma)
}

/**
 * Set `location.search` with components
 * @param {string[]} cs
 */
export function setComponentsQ(cs, extra = '', comma = ',', semicolon = ';') {
    location.search = cs.join(comma) + (extra? semicolon + extra : '')
}
