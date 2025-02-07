document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    // এখানে লগইন যাচাই করার লজিক লিখুন
    if (phoneNumber === "01700000000" && password === "12345") {
        alert("Login successful!");
    } else {
        alert("Invalid phone number or password.");
    }
});
