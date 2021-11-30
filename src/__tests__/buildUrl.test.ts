import { buildUrl } from "../buildUrl"

describe('buildUrl', () => {
    it('builds url for url http://localhost and path test', () => {
        expect(buildUrl('http://localhost', 'test')).toEqual('http://localhost/test')
    })
    it('builds url for url http://localhost/ and path /test', () => {
        expect(buildUrl('http://localhost/', '/test')).toEqual('http://localhost/test')
    })
    it('builds url for url http://localhost and path /test', () => {
        expect(buildUrl('http://localhost', '/test')).toEqual('http://localhost/test')
    })
    it('builds url for url http://localhost/ and path test', () => {
        expect(buildUrl('http://localhost/', 'test')).toEqual('http://localhost/test')
    })
})