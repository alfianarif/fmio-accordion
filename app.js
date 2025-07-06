const lists = document.querySelectorAll(".list");

// Buka pertanyaan pertama saat halaman dibuka
if (lists.length > 0) {
    lists[0].classList.add("active");
    lists[0].querySelector("p").style.display = "block";
    lists[0].querySelector(".plus").style.display = "none";
    lists[0].querySelector(".minus").style.display = "block";
}

lists.forEach((list, index) => {
    const toggleButton = list.querySelector(".viewhide");
    const answer = list.querySelector("p");
    const plusIcon = list.querySelector(".plus");
    const minusIcon = list.querySelector(".minus");

    const toggle = () => {
        const isActive = list.classList.contains("active");

        // Tutup semua
        lists.forEach((item) => {
            item.classList.remove("active");
            item.querySelector("p").style.display = "none";
            item.querySelector(".plus").style.display = "block";
            item.querySelector(".minus").style.display = "none";
        });

        // Jika tadi belum aktif, buka dia
        if (!isActive) {
            list.classList.add("active");
            answer.style.display = "block";
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
        }
    };

    toggleButton.addEventListener("click", toggle);

    // Tambahkan akses keyboard
    list.querySelector(".question").addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
        }

        // Navigasi kiri/kanan pakai arrow keys
        if (e.key === "ArrowDown" && index < lists.length - 1) {
            lists[index + 1].querySelector(".question").focus();
        }
        if (e.key === "ArrowUp" && index > 0) {
            lists[index - 1].querySelector(".question").focus();
        }
    });
});
