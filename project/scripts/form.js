document.addEventListener("DOMContentLoaded", function () {
    // --- Relationship Battery Form Logic ---
    // Populate Likert options if present
    const likertOptions = [
        { value: "7", label: "Strongly Agree" },
        { value: "6", label: "Agree Moderately" },
        { value: "5", label: "Agree a Little" },
        { value: "4", label: "Neither Agree nor Disagree" },
        { value: "3", label: "Disagree a Little" },
        { value: "2", label: "Disagree Moderately" },
        { value: "1", label: "Strongly Disagree" }
    ];

    for (let i = 1; i <= 7; i++) {
        const select = document.getElementById('q' + i);
        if (select && select.options.length === 1) {
            likertOptions.forEach(opt => {
                const option = document.createElement("option");
                option.value = opt.value;
                option.textContent = opt.label;
                select.appendChild(option);
            });
        }
    }

    // --- Display fill count on both pages ---
    function updateFillCount(displayId) {
        const fillKey = "checkinCount";
        let count = parseInt(localStorage.getItem(fillKey)) || 0;
        const countText = count === 1
            ? "You have completed 1 relationship check-in."
            : `You have completed ${count} relationship check-ins.`;
        const elem = document.getElementById(displayId);
        if (elem) elem.textContent = countText;
    }
    updateFillCount('fill-count');

    // --- Relationship Battery SCORE PAGE LOGIC ---
    if (window.location.pathname.endsWith("score.html")) {
        // Parse GET params for q1-q7
        function getQueryParams() {
            const params = {};
            location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => {
                params[key] = decodeURIComponent(value);
            });
            return params;
        }
        const params = getQueryParams();
        let total = 0, answered = 0;
        for (let i = 1; i <= 7; i++) {
            const val = parseInt(params['q' + i], 10);
            if (!isNaN(val)) {
                total += val;
                answered++;
            }
        }
        let percent = 0;
        if (answered === 7) {
            percent = Math.round((total / 49) * 100);
            // Increment check-in count in localStorage
            let checkinCount = Number(localStorage.getItem("checkinCount") || 0) + 1;
            localStorage.setItem("checkinCount", checkinCount);
            localStorage.setItem("relationshipBatteryScore", percent);
        } else {
            percent = parseInt(localStorage.getItem("relationshipBatteryScore") || 0, 10);
        }

        // Show score
        const scoreOutput = document.getElementById("score-output");
        if (scoreOutput) {
            scoreOutput.innerHTML =
                (answered === 7)
                    ? `<strong>${percent}%</strong>`
                    : `Incomplete submission. Please answer all questions.`;
        }
        // Battery bar
        const bar = document.getElementById("battery-bar");
        if (bar) {
            bar.style.width = percent + "%";
            bar.setAttribute("aria-valuenow", percent);
            if (percent < 40) bar.className = "battery-bar low";
            else if (percent < 60) bar.className = "battery-bar mid";
            else bar.className = "battery-bar high";
        }

        // Personalized feedback message
        const improveMsg = document.getElementById("improve-msg");
        if (improveMsg) {
            if (answered === 7) {
                if (percent < 40)
                    improveMsg.innerHTML = "Your relationship battery is low.";
                else if (percent < 75)
                    improveMsg.innerHTML = "Your relationship battery is moderate.";
                else
                    improveMsg.textContent = "Excellent! Your relationship battery is strong.";
            } else {
                improveMsg.textContent = "";
            }
        }

        // Show/hide improve-section (Book a session) only if not strong
        const improveSection = document.getElementById("improve-section");
        if (improveSection) {
            if (percent < 75 && answered === 7) {
                improveSection.classList.add("show");
            } else {
                improveSection.classList.remove("show");
            }
        }
        // Show fill count
        const count = parseInt(localStorage.getItem("checkinCount") || 0, 10);
        const fillElem = document.getElementById("fill-count");
        if (fillElem) {
            fillElem.textContent = (count === 1)
                ? "You have completed 1 relationship check-in."
                : `You have completed ${count} relationship check-ins.`;
        }
    }

    // --- Session Type Logic (Guarded!) ---
    const sessionType = document.getElementById('sessionType');
    if (sessionType) {
        sessionType.addEventListener('change', function () {
            var type = this.value;
            const coupleFields = document.querySelector('.couple-fields');
            const groupFields = document.querySelector('.group-fields');
            if (coupleFields) coupleFields.style.display = type === 'couple' ? 'block' : 'none';
            if (groupFields) groupFields.style.display = type === 'group' ? 'block' : 'none';
        });
    }

    // --- Session FORM PAGE LOGIC ---
    const form = document.getElementById('sessionForm');
    if (form) {
        form.addEventListener('submit', function () {
            localStorage.setItem('justSubmittedSession', 'yes');
        });
    }

    // --- Thank You Page Logic (for session submissions) ---
    if (window.location.pathname.endsWith("submitted.html")) {
        if (localStorage.getItem('justSubmittedSession') === 'yes') {
            let sessionCount = Number(localStorage.getItem("sessionCount") || 0);
            sessionCount += 1;
            localStorage.setItem("sessionCount", sessionCount);
            localStorage.removeItem('justSubmittedSession');
        }
        let sessionCount = Number(localStorage.getItem("sessionCount") || 0);
        const submissionCountSpan = document.getElementById("submissionCount");
        if (submissionCountSpan) submissionCountSpan.textContent = sessionCount;
        const submissionMsg = document.getElementById("submissionMsg");
        if (submissionMsg) {
            submissionMsg.textContent = `You have scheduled ${sessionCount} session${sessionCount > 1 ? 's' : ''} from this browser.`;
        }
    }

    // --- Contact Form Submission Count ---
    // On the contact form page (contact.html)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function () {
            try {
                const key = "contactSubmissionCount";
                let count = parseInt(localStorage.getItem(key)) || 0;
                localStorage.setItem(key, count + 1);
            } catch (e) {
                // ignore
            }
        });
    }

    // On the thank you page (contact-submission.html)
    const contactCountDiv = document.getElementById("contact-count");
    if (contactCountDiv) {
        // As a fallback, also increment count on page load, if we have GET params
        try {
            const key = "contactSubmissionCount";
            // If there are any search params, assume form was submitted.
            if (window.location.search.length > 0) {
                let count = parseInt(localStorage.getItem(key)) || 0;
                localStorage.setItem(key, count + 1);
            }
            // Now display the count
            let count = parseInt(localStorage.getItem(key)) || 0;
            contactCountDiv.textContent = count === 1
                ? "You have submitted this form 1 time from this browser."
                : `You have submitted this form ${count} times from this browser.`;
        } catch (e) {
            contactCountDiv.textContent = "";
        }
    }
});
