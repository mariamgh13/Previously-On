import cookie from 'js-cookie'

export async function checkToken() {
    let cookies = cookie.get('token')
    
    if (cookies) {
        return await JSON.parse(cookies)
    }
    else {
        return false
    }
}