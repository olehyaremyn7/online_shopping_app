const authLinks = [
    {name: 'Login', path: 'login'},
    {name: 'Registration', path: 'registration'}
]

const mainLinks = [
    {name: 'Dashboard', path: 'dashboard'},
    {name: 'Items', path: 'items'},
    {name: 'Add', path: 'add'},
    {name: 'Orders', path: 'orders'},
    {name: 'Messages', path: 'messages'},
    {name: 'Logout', path: 'logout'}
]

export function createHeaderTemplate(activeLink) {
    return `
        <h1>Aligator Store Administration</h1>
        <div class="links">
            ${setLinks(activeLink)}
        </div>
    `
}

function setLinks(activeLink) {
    let links
    if (activeLink === 'login' || activeLink === 'registration') {
        links = authLinks.map(link => {
            return `<a class="button ${activeLink === link.path ? 'active-link' : ''}" href="#${link.path}">${link.name}</a>`
        })
        return links
    } else {
        links = mainLinks.map(link => {
            if (link.path === 'logout') {
                return `<a 
                    class="button ${activeLink === link.path ? 'active-link' : ''}"
                    data-btn="${link.path}">${link.name}</a>`
            } else {
                return `<a 
                    class="button ${activeLink === link.path ? 'active-link' : ''}" 
                    href="#${link.path}"
                    data-btn="${link.path}">${link.name}</a>`
            }
        })
        return links
    }
}