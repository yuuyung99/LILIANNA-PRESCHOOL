
//======================================
// ALWAYS LOAD FROM TOP
//======================================

if ('scrollRestoration' in history) {

    history.scrollRestoration = 'manual';

}

window.addEventListener('load', () => {

    window.scrollTo(0, 0);

});

//======================================
// LILIANNA POPUP
//======================================

document.addEventListener("DOMContentLoaded", () => {

    const popup =
        document.getElementById("popupForm");

    const openButtons =
        document.querySelectorAll(".open-popup");

    const closeButton =
        document.querySelector(".lili-popup-close");



    //======================================
    // OPEN POPUP
    //======================================

    function openPopup() {

        if (!popup) return;

        popup.classList.add("active");

        document.body.style.overflow = "hidden";

    }



    //======================================
    // CLOSE POPUP
    //======================================

    function closePopup() {

        if (!popup) return;

        popup.classList.remove("active");

        document.body.style.overflow = "";

    }



    //======================================
    // OPEN BUTTONS
    //======================================

    openButtons.forEach(button => {

        button.addEventListener("click", openPopup);

    });



    //======================================
    // CLOSE BUTTON
    //======================================

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closePopup
        );

    }



    //======================================
    // CLICK OVERLAY
    //======================================

    if (popup) {

        popup.addEventListener("click", (e) => {

            if (e.target === popup) {

                closePopup();

            }

        });

    }



    //======================================
    // ESC KEY
    //======================================

    document.addEventListener("keydown", (e) => {

        if (
            popup &&
            e.key === "Escape" &&
            popup.classList.contains("active")
        ) {

            closePopup();

        }

    });

});

//======================================
// GOOGLE SHEET SUBMIT
//======================================

document.addEventListener("DOMContentLoaded", () => {

    const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbziDUXANbACqH2kdpY6BgXlT9JrxMjB5rLPu34HBAzD2tsdWHRK_aDm65ijZ-UWozp7/exec";

    const forms = document.querySelectorAll(
        "#contactForm, #contactFormFooter"
    );



    forms.forEach(form => {

        form.addEventListener("submit", async (e) => {

            e.preventDefault();



            const submitBtn =
                form.querySelector(
                    'button[type="submit"]'
                );

            const originalText =
                submitBtn.innerHTML;



            //======================================
            // GET DATA
            //======================================

            const formData = {

                name:
                    form.name.value.trim(),

                phone:
                    form.phone.value.trim(),

                age:
                    form.age.value

            };



            //======================================
            // PHONE VALIDATION
            //======================================

            const phoneRegex = /^0\d{9}$/;

            if (
                !phoneRegex.test(
                    formData.phone
                )
            ) {

                alert(
                    "Số điện thoại phải gồm 10 số và bắt đầu bằng số 0."
                );

                form.phone.focus();

                return;

            }



            //======================================
            // LOADING STATE
            //======================================

            submitBtn.disabled = true;

            submitBtn.innerHTML = `
                <i class="fa-solid fa-spinner btn-spinner"></i>
                ĐANG GỬI...
            `;



            try {

                const response =
                    await fetch(
                        SCRIPT_URL,
                        {
                            method: "POST",

                            body: JSON.stringify(
                                formData
                            )
                        }
                    );

                const result =
                    await response.json();



                //======================================
                // SUCCESS
                //======================================

                if (
                    result.result === "success"
                ) {

                    form.reset();



                    const popup =
                        document.getElementById(
                            "popupForm"
                        );

                    if (popup) {

                        popup.classList.remove(
                            "active"
                        );

                    }



                    document.body.style.overflow =
                        "";



                    const successPopup =
                        document.getElementById(
                            "successPopup"
                        );

                    if (successPopup) {

                        successPopup.classList.add(
                            "active"
                        );

                    }

                } else {

                    throw new Error(
                        result.message
                    );

                }

            } catch (error) {

                console.error(error);

                alert(
                    "Có lỗi xảy ra. Vui lòng thử lại."
                );

            } finally {

                submitBtn.disabled = false;

                submitBtn.innerHTML =
                    originalText;

            }

        });

    });

});

//======================================
// PHONE INPUT ONLY NUMBER
//======================================

document.addEventListener("DOMContentLoaded", () => {

    const phoneInputs =
        document.querySelectorAll(
            'input[name="phone"]'
        );

    phoneInputs.forEach(input => {

        input.addEventListener("input", function () {

            this.value = this.value
                .replace(/\D/g, "")
                .slice(0, 10);

        });

    });

});


//======================================
// SUCCESS POPUP
//======================================

document.addEventListener("DOMContentLoaded", () => {

    const successPopup =
        document.getElementById("successPopup");

    const successBtn =
        document.getElementById("successBtn");



    //======================================
    // CLOSE BUTTON
    //======================================

    if (successBtn) {

        successBtn.addEventListener("click", () => {

            successPopup.classList.remove("active");

        });

    }



    //======================================
    // CLICK OVERLAY
    //======================================

    if (successPopup) {

        successPopup.addEventListener("click", (e) => {

            if (e.target === successPopup) {

                successPopup.classList.remove(
                    "active"
                );

            }

        });

    }



    //======================================
    // ESC KEY
    //======================================

    document.addEventListener("keydown", (e) => {

        if (
            e.key === "Escape" &&
            successPopup &&
            successPopup.classList.contains("active")
        ) {

            successPopup.classList.remove(
                "active"
            );

        }

    });

});

//======================================
// IMAGE VIEWER
//======================================

document.addEventListener("DOMContentLoaded", () => {

    const images =
        document.querySelectorAll(
            ".facility-item img, .activity-item img"
        );

    const imageViewer =
        document.querySelector(".image-viewer");

    const viewerImage =
        document.querySelector(".image-viewer-img");

    const closeViewer =
        document.querySelector(".image-viewer-close");



    if (
        !imageViewer ||
        !viewerImage ||
        !closeViewer
    ) {
        return;
    }



    //======================================
    // OPEN IMAGE
    //======================================

    images.forEach(image => {

        image.addEventListener("click", () => {

            viewerImage.src = image.src;

            imageViewer.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });



    //======================================
    // CLOSE BUTTON
    //======================================

    closeViewer.addEventListener("click", () => {

        imageViewer.classList.remove("active");

        document.body.style.overflow = "";

    });



    //======================================
    // CLICK OVERLAY
    //======================================

    imageViewer.addEventListener("click", (e) => {

        if (e.target === imageViewer) {

            imageViewer.classList.remove("active");

            document.body.style.overflow = "";

        }

    });



    //======================================
    // ESC KEY
    //======================================

    document.addEventListener("keydown", (e) => {

        if (
            e.key === "Escape" &&
            imageViewer.classList.contains("active")
        ) {

            imageViewer.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});

//======================================
// SCROLL REVEAL
//======================================

document.addEventListener("DOMContentLoaded", () => {

    const reveals =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );

    reveals.forEach(item => {

        observer.observe(item);

    });

});


//======================================
// BACK TO TOP
//======================================

document.addEventListener("DOMContentLoaded", () => {

    const backToTop =
        document.querySelector(".back-to-top");

    if (!backToTop) return;



    //======================================
    // SHOW BUTTON
    //======================================

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });



    //======================================
    // SCROLL TOP
    //======================================

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});










