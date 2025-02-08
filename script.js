document.addEventListener("DOMContentLoaded", function () {
    // যদি ইউজার ইতিমধ্যে লগইন করা থাকে, তাহলে সরাসরি ড্যাশবোর্ডে পাঠানো হবে
    if (localStorage.getItem("userEmail")) {
        window.location.href = "https://nahidxsr.github.io/Taka-Gor-BD/";
    }

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // লোকাল স্টোরেজ থেকে রেজিস্টারকৃত ইউজার ডাটা বের করা
        let storedEmail = localStorage.getItem("userEmail");
        let storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            alert("✅ সফলভাবে লগইন হয়েছে!");
            window.location.href = "https://nahidxsr.github.io/Taka-Gor-BD/"; // ড্যাশবোর্ডে রিডাইরেক্ট
        } else {
            alert("❌ ভুল ইমেইল বা পাসওয়ার্ড!");
        }
    });
});
