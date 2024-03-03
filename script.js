let checkbtn = document.getElementById("check-btn")
let oginput = document.getElementById("text-input")
let result = document.getElementById("result")
const reset=() => { 
   oginput.value=""
 }
const checkPalindrom=() => { 
    let lowerstr = (oginput.value).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    let reversestr = lowerstr.split("").reverse().join("")
    if (oginput.value === "") {
        alert("Please input a value")
    }
    else {
        if (lowerstr === reversestr) {
            result.classList.remove("hide")
            result.innerHTML=`${oginput.value.bold()} is a palindrome`
        }
        else {
            result.classList.remove("hide")
            result.innerHTML=`${oginput.value.bold()} is not a palindrome`
        }
        reset()
    }
 }

checkbtn.addEventListener("click", (e) => {
    e.preventDefault()
    checkPalindrom()
})

oginput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkPalindrom();
     reset()
    }
  });