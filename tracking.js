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