const validatePassword = require("../index.js");


describe("PasswordSpec", function() { 
    it("should be larger than 8 chars", function(){
        expect(validatePassword.validLength).toBeDefined();
        expect(validatePassword.validLength("hello world")).toBe(true);
        expect(function() {
            validatePassword.validLength("hello");
        }).toThrow();
    });
    it("should not be null", function(){
        expect(validatePassword.isvalid).toBeDefined();
        expect(validatePassword.isvalid).toThrow();
        expect(validatePassword.isvalid("HelloWorld123")).toBe(true)
    });
    it("should have one uppercase letter at least", function(){
        expect(validatePassword.hasUpper).toBeDefined();
        expect(validatePassword.hasUpper("Hello world")).toBe(true);
        expect(function() {
            validatePassword.hasUpper("hello world");
        }).toThrow();
    });
    it("should have one lowercase letter at least", function(){
        expect(validatePassword.hasLower).toBeDefined();
        expect(validatePassword.hasLower("hELLO WORLD")).toBe(true);
        expect(function() {
            validatePassword.hasLower("HELLO WORLD");
        }).toThrow();
    })
    it("should have one number at least", function(){
        expect(validatePassword.hasNumber).toBeDefined();
        expect(validatePassword.hasNumber("hello world 1")).toBe(true);
        expect(function() {
            validatePassword.hasNumber("hello world");
        }).toThrow();
    })
});

