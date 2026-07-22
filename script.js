// เมื่อโหลดหน้าเว็บเสร็จ
window.addEventListener("load", () => {
    console.log("เว็บไซต์โหลดเรียบร้อย");

    alert("🎬 ยินดีต้อนรับสู่เว็บไซต์ My Favorite Movies & Songs 🎵");
});

// ปุ่มแสดงข้อความ
const alertBtn = document.getElementById("alertBtn");

if (alertBtn) {
    alertBtn.addEventListener("click", () => {
        alert("🎉 ขอบคุณที่เข้ามาเยี่ยมชมเว็บไซต์ของผมครับ 😊");
    });
}

// เอฟเฟกต์ Hover การ์ด
const cards = document.querySelectorAll(".bento-card, .song-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// เลื่อนไปด้านบนเมื่อดับเบิลคลิกที่ Footer
const footer = document.querySelector(".footer");

if (footer) {
    footer.addEventListener("dblclick", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
