const lists = document.querySelectorAll(".list");

lists.forEach((list) => {
    const question = list.querySelector(".question");
    question.setAttribute("tabindex", "0");

    const viewhide = list.querySelector(".viewhide");
    viewhide.addEventListener("click", () => {
        const isActive = list.classList.contains("active");

        // Tutup semua
        lists.forEach((l) => l.classList.remove("active"));

        // Kalau sebelumnya gak aktif, buka yang ini
        if (!isActive) {
            list.classList.add("active");
        }
    });

    question.addEventListener("focus", () => {
        lists.forEach((l) => l.classList.remove("active"));
        list.classList.add("active");
    });

    question.addEventListener("keydown", (e) => {
        const index = [...lists].indexOf(list);

        switch (e.key) {
            case "ArrowDown":
                e.preventDefault();
                if (index < lists.length - 1) {
                    const next = lists[index + 1].querySelector(".question");
                    next.focus();
                }
                break;
            case "ArrowUp":
                e.preventDefault();
                if (index > 0) {
                    const prev = lists[index - 1].querySelector(".question");
                    prev.focus();
                }
                break;
            case "ArrowLeft":
                e.preventDefault();
                lists[0].querySelector(".question").focus();
                break;
            case "ArrowRight":
                e.preventDefault();
                lists[lists.length - 1].querySelector(".question").focus();
                break;
        }
    });
});

lists[0].classList.add("active");
