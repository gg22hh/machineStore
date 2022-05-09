import React, { FC, useState } from "react";
import { Button } from "../../../components/Button/Button";

interface ContactsFormProps {
    title: string;
    text: string;
    input1: string;
    input2: string;
    input3: string;
    textarea?: string;
    button: string;
}

export const ContactsForm: FC<ContactsFormProps> = ({
    title,
    text,
    input1,
    input2,
    input3,
    textarea = "",
    button,
}) => {
    const [data1, setData1] = useState<string>("");
    const [data2, setData2] = useState<string>("");
    const [data3, setData3] = useState<string>("");
    const [data4, setData4] = useState<string>("");

    const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const data = {
            input1: data1,
            input2: data2,
            input3: data3,
            textarea: data4,
        };

        setData1("");
        setData2("");
        setData3("");
        setData4("");

        console.log(data);
    };

    return (
        <form onSubmit={handleSubmitForm} className="contacts__form">
            <h1 className="contacts__form-title">{title}</h1>
            <div className="contacts__form-text">{text}</div>
            <input
                type="text"
                className="contacts__form-input"
                placeholder={input1}
                value={data1}
                onChange={(e) => setData1(e.target.value)}
            />
            <input
                type="text"
                className="contacts__form-input"
                placeholder={input2}
                value={data2}
                onChange={(e) => setData2(e.target.value)}
            />
            <input
                type="text"
                className="contacts__form-input"
                placeholder={input3}
                value={data3}
                onChange={(e) => setData3(e.target.value)}
            />
            {textarea && (
                <textarea
                    name=""
                    id=""
                    className="contacts__form-area"
                    placeholder={textarea}
                    value={data4}
                    onChange={(e) => setData4(e.target.value)}
                />
            )}

            <Button>{button}</Button>
        </form>
    );
};
