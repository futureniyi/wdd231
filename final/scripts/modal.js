const newsIds = ["modal-news-1", "modal-news-2", "modal-news-3"];

newsIds.forEach(id => {
    const openBtn = document.getElementById(`${id}-btn`);
    const modal = document.getElementById(id);
    const closeBtn = modal.querySelector(".close-btn");

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener("click", () => modal.showModal());
        closeBtn.addEventListener("click", () => modal.close());

        // Close modal if user clicks outside dialog content
        modal.addEventListener("click", e => {
            if (e.target === modal) {
                modal.close();
            }
        });
    }
});
