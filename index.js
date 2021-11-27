function isvalid(str){
    if(str && validLength(str) && hasUpper(str) && hasLower(str) && hasNumber(str)){
        return true;
    }
    throw new Error("password is null or empty");
}

function validLength(str){
    if(str.length < 8)
    {
        throw new Error("password too short");
    }
    else
    {
        return true;
    }
}

function hasUpper(str){
    if(str.toLowerCase() == str)
    {
        throw new Error("provide an uppercase letter");
    }
    else
    {
        return true;
    }
}

function hasLower(str){
    if(str.toUpperCase() == str)
    {
        throw new Error("provide a lowercase letter");
    }
    else
    {
        return true;
    }
}

function hasNumber(str){
    if(!(/[1-9]/.test(str)))
    {
        throw new Error("provide a number");
    }
    else
    {
        return true;
    }
    
}

module.exports = {
    isvalid : isvalid
};