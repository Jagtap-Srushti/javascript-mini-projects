function generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbol){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+-=";

    let allowedChars="";
    let password="";
    if(includeLowercase) allowedChars+=lowercaseChars;
    if(includeUppercase) allowedChars+=uppercaseChars;
    if(includeNumber) allowedChars+=numberChars;
    if(includeSymbol) allowedChars+=symbolChars;


    if(passwordLength<=0){
        return "Password length must be at least 1";
    }

    if(allowedChars.length===0){
        return "At least 1 set of character needs to be selected ";
    }

    for(let i=0;i<passwordLength;i++){
        password+=randomChar(allowedChars)
    }

    return password
}

function randomChar(allowedChars){
    const index = Math.floor(Math.random() * allowedChars.length);
    return allowedChars[index];
}

function generate(){
    const length=parseInt(document.getElementById("length").value);
    const lower=document.getElementById("lower").checked;
    const upper=document.getElementById("upper").checked;
    const nums=document.getElementById("number").checked;
    const sym=document.getElementById("symbol").checked;
    const password = generatePassword(length, lower, upper, nums, sym);
    document.getElementById("result").textContent = password;

}

function copyPassword(){
    const password=document.getElementById("result").textContent;
    if (!password || password.includes("will appear here")) return;
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
}