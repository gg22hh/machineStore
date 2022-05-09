import React, { FC } from "react";
import { ContactsForm } from "./components/ContactsForm";
import "./Contacts.scss";

export const Contacts: FC = () => {
    return (
        <div className="contacts">
            <div className="container">
                <div className="contacts__inner">
                    <ContactsForm
                        title="Contact"
                        text="Here you can send us a message with your wishes or questions and we will answer you"
                        input1="Name"
                        input2="e-mail"
                        input3="Subject"
                        textarea="Message"
                        button="Send Message"
                    />
                    <ContactsForm
                        title="Newsletter"
                        text="Also you can subscribe to get actual infirmation from shop about our products"
                        input1="First name"
                        input2="Last name"
                        input3="e-mail"
                        button="Subscribe"
                    />
                </div>
            </div>
        </div>
    );
};
