function checkfunc() {
    let rawSentence = document.getElementById("entryfield").value;
    let preprocessedSentence = rawSentence.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    document.getElementById("result").value = preprocessedSentence; // cleaned spaces, punctuation and converted to lower case

    let isPalindrome = true;
    for (let i = 0; i < preprocessedSentence.length / 2; i++) {
        if (preprocessedSentence[i] !== preprocessedSentence[preprocessedSentence.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (preprocessedSentence.length === 0) {
        document.getElementById("result").value = "Please enter a valid entry.";
    } else if (isPalindrome) {
        document.getElementById("result").value = "The expression is a palindrome.";
    } else {
        document.getElementById("result").value = "The expression is not a palindrome.";
    }
}

