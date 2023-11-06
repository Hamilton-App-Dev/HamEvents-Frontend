import { useIonToast } from "@ionic/react";
import createGoogleCalendarLink from "../utils/createCalendarLink";
import { Card } from "../types";

const useCalendarToast = (card: Card) => {
    const [presentToast] = useIonToast();
    const msg = `RSVP'd to ${card.name}! Would you like to save to your calendar?`;
    const toastOptions = {
        message: msg,
        duration: 10000,
    };

    const showCalendarToast = () => {
        const googleCalendarUrl = createGoogleCalendarLink(card);

        presentToast({
            ...toastOptions,
            buttons: [
                {
                    text: "Yes",
                    role: "info",
                    handler: () => {
                        window.open(googleCalendarUrl, "_system");
                    },
                },
                {
                    text: "No",
                    role: "cancel",
                },
            ],
        });
    };
    return [showCalendarToast];
};

export default useCalendarToast;
