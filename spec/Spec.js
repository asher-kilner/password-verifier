const validatePassword = require("../src/index.js");

describe("new passwordSpec", function() {
    it("should return valid for 3 out of 5 tests", function(){
        expect(validatePassword.isvalid).toBeDefined();
        expect(validatePassword.isvalid("helloworld123")).toBe(true);
    });
    it("should fail on less than 3 tests", function(){
        expect(function() {
            validatePassword.isvalid("hello");
        }).toThrow(new Error("must have three of the conditions {1 upper, 1 lower, 1 number, 8+ chars, not null}"));
    });
    it("should fail when no lowercase letters present", function(){
        expect(function() {
            validatePassword.isvalid("HELLOWORLD123");
        }).toThrow(new Error("must have at least one lowercase letter"));
    });
    it("should fail when no password given", function(){
        expect(function() {
            validatePassword.isvalid();
        }).toThrow(new Error("password is null or empty"));
    });
});

xdescribe("PasswordSpec", function() { 
    it("should not be null", function(){
        expect(validatePassword.isvalid).toBeDefined();
        expect(validatePassword.isvalid("HelloWorld123")).toBe(true);
        expect(function() {
            validatePassword.isvalid();
        }).toThrow(new Error("password is null or empty"));
    });
    it("should be larger than 8 chars", function(){
        expect(function() {
            validatePassword.isvalid("Hello1");
        }).toThrow(new Error("password too short"));
    });
    it("should have one uppercase letter at least", function(){
        expect(function() {
            validatePassword.isvalid("hello world1");
        }).toThrow(new Error("provide an uppercase letter"));
    });
    it("should have one lowercase letter at least", function(){
        expect(function() {
            validatePassword.isvalid("HELLO WORLD1");
        }).toThrow(new Error("provide a lowercase letter"));
    })
    it("should have one number at least", function(){
        expect(function() {
            validatePassword.isvalid("Hello world");
        }).toThrow(new Error("provide a number"));
    })
});

