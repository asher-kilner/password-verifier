function isvalid(str){
    var pass = 0, fail = 0;
    if(str){
        (validLength(str)) ? pass += 1 : fail += 1;
        (hasNumber(str)) ? pass += 1 : fail += 1;
        var upperLower = UpperLower(str);
        if(upperLower == "lower")
        {
            pass += 1
        } 
        else if(upperLower == "mixed")
        {
            pass += 2
        }
        else{
            throw new Error("must have at least one lowercase letter");
        }
        
        if(pass >= 2){
            return true;
        }
        else{
            throw new Error("must have three of the conditions {1 upper, 1 lower, 1 number, 8+ chars, not null}");
        }
    }
    throw new Error("password is null or empty");
}

function validLength(str){
    return (str.length >= 8) ? true : false;
}
function UpperLower(str){
    if(/[a-z]/.test(str) && /[A-Z]/.test(str)){
        return "mixed"
    }
    else if(/[a-z]/.test(str)){
        return "lower"
    }
    else{
        return "upper"
    }
}
function hasNumber(str){
    return (/[1-9]/.test(str)) ? true : false;
}

module.exports = {
    isvalid : isvalid
};