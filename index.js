function isvalid(str){
    var pass = 0, fail = 0;
    if(str){
        if(validLength(str))
        {
            pass += 1
        }
        else {
            fail += 1
        }
        if(hasUpper(str))
        {
            pass += 1
        }
        else {
            fail += 1
        }
        if(hasLower(str))
        {
            pass += 1
        }
        else {
            fail += 1
        }
        if(hasNumber(str))
        {
            pass += 1
        }
        else {
            fail += 1
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
    if(str.length < 8)
    {
        //throw new Error("password too short");
        return false;
    }
    else
    {
        return true;
    }
}

function hasUpper(str){
    if(str.toLowerCase() == str)
    {
        //throw new Error("provide an uppercase letter");
        return false;
    }
    else
    {
        return true;
    }
}

function hasLower(str){
    if(str.toUpperCase() == str)
    {
        //throw new Error("provide a lowercase letter");
        return false;
    }
    else
    {
        return true;
    }
}

function hasNumber(str){
    if(!(/[1-9]/.test(str)))
    {
        //throw new Error("provide a number");
        return false;
    }
    else
    {
        return true;
    }
    
}

module.exports = {
    isvalid : isvalid
};