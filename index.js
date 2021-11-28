function isvalid(str){
    var pass = 0, fail = 0;
    if(str){
        (validLength(str)) ? pass += 1 : fail += 1;
        (hasUpper(str)) ? pass += 1 : fail += 1;
        (hasNumber(str)) ? pass += 1 : fail += 1;
        if(hasLower(str))
        {
            pass += 1
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

function hasUpper(str){
    return (str.toLowerCase() != str) ? true : false; 
}

function hasLower(str){
    return (str.toUpperCase() != str) ? true : false;
}

function hasNumber(str){
    return (/[1-9]/.test(str)) ? true : false;
}

module.exports = {
    isvalid : isvalid
};