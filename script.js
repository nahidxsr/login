document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔍 ইউজার খোঁজা
    let foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert("✅ সফলভাবে লগইন হয়েছে!");
        window.location.href = "https://nahidxsr.github.io/Taka-Gor-BD/";
    } else {
        alert("❌ ভুল ইমেইল বা পাসওয়ার্ড!");
    }
});
