// JavaScript source code
//======================================
// TRACKING HELPER
//======================================

window.dataLayer =
    window.dataLayer || [];

function trackEvent(
    eventName,
    eventData = {}
) {

    window.dataLayer.push({

        event: eventName,

        ...eventData

    });

    console.log(
        "[TRACK]",
        eventName,
        eventData
    );

}
//======================================
// PHONE CLICK
//======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(
                'a[href^="tel:"]'
            )
            .forEach(item => {

                item.addEventListener(
                    "click",
                    () => {

                        trackEvent(
                            "phone_click"
                        );

                    }
                );

            });

    }
);


//======================================
// MESSENGER CLICK
//======================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(
                ".messenger-btn"
            )
            .forEach(item => {

                item.addEventListener(
                    "click",
                    () => {

                        trackEvent(
                            "messenger_click"
                        );

                    }
                );

            });

    }
);









