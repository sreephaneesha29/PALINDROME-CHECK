const checkbtn = document.getElementById("check-btn");
const oginput = document.getElementById("text-input");
const result = document.getElementById("result");

const resetInput = () => {
    oginput.value = "";
};

const checkPalindrome = () => {
    const inputValue = oginput.value.trim();
    if (inputValue === "") {
        alert("Please input a value");
        return;
    }
    
    const processedInput = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedInput = processedInput.split("").reverse().join("");
    
    if (processedInput === reversedInput) {
        result.innerHTML = `${inputValue.bold()} is a palindrome`;
    } else {
        result.innerHTML = `${inputValue.bold()} is not a palindrome`;
    }
    
    result.classList.remove("hide");
    resetInput();
};

checkbtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkPalindrome();
});

oginput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        checkPalindrome();
    }
});
