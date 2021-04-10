import request from '../utils/request'

export function searchMusicByKeyword(params) {
    return request({
        url: '/api/www/search/searchMusicBykeyWord',
        method: 'get',
        params: params
    })
}
