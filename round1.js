
function checkFlag() {
    const input = document.getElementById("flagInput");
    const result = document.getElementById("result");

    const correctFlag = "flag{Eleven}";

    if (input.value.trim() === correctFlag) {
        input.style.borderColor = "#22c55e";
        input.style.color = "#22c55e";
        result.textContent = "Correct";
        result.style.color = "#22c55e";
    } else {
        input.style.borderColor = "#dc2626";
        input.style.color = "#fca5a5";
        result.textContent = "Error";
        result.style.color = "#dc2626";
    }
}

