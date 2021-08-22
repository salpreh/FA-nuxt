const rewire = require("rewire")
const api = rewire("./api")
const RestaurantApi = api.__get__("RestaurantApi")
// @ponicode
describe("RestaurantApi", () => {
    test("0", () => {
        let callFunction = () => {
            RestaurantApi({ API_URL: "https://croplands.org/app/a/reset?token=" }, "Expressway")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            RestaurantApi({ API_URL: "https://accounts.google.com/o/oauth2/revoke?token=%s" }, "Port")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            RestaurantApi({ API_URL: "https://twitter.com/path?abc" }, "Harbors")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            RestaurantApi({ API_URL: "www.google.com" }, "Expressway")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            RestaurantApi({ API_URL: "http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg" }, "Harbors")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            RestaurantApi(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
