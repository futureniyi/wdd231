const membershipIds = ["np", "bronze", "silver", "gold"];

membershipIds.forEach(id => {
    const openBtn = document.getElementById(`${id}-btn`);
    const modal = document.getElementById(`modal-${id}`);
    const closeBtn = modal.querySelector(".close-btn");

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener("click", () => modal.showModal());
        closeBtn.addEventListener("click", () => modal.close());

        // Optional: Close modal if user clicks outside dialog content
        modal.addEventListener("click", e => {
            if (e.target === modal) {
                modal.close();
            }
        });
    }
});
