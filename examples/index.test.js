const rewire = require("rewire")
const index = rewire("./index")
const updateText = index.__get__("updateText")
// @ponicode
describe("updateText", () => {
    test("0", () => {
        let callFunction = () => {
            updateText("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            updateText("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            updateText("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            updateText("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            updateText(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
