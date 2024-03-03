const checkbtn = document.getElementById("check-btn");
const ogInput = document.getElementById("text-input");
const result = document.getElementById("result");

const resetInput = () => {
    ogInput.value = "";
};

const checkPalindrome = () => {
    const inputValue = ogInput.value.trim();
    const processedInput = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedInput = processedInput.split("").reverse().join("");
    if (inputValue === "") {
        alert("Please input a value");
        return;
    }
    
    
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

ogInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        checkPalindrome();
    }
});
