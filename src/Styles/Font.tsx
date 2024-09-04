import React from "react";
import { Color } from "./Color"

interface FontPropsType {
    text?: string;
    kind?: keyof typeof fonts;
    color?: keyof typeof Color;
}

export const Font = ({ text, kind = "", color: textColor = "black" }: FontPropsType) => {
    const textColorStyle = textColor ? { color: Color[textColor] } : {};

    return <p style={{...fonts[kind], ...textColorStyle}}>{text}</p>
};

const fonts: {[key: string]: React.CSSProperties} = {
    "": {},
    Heading1: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "42px",
        fontWeight: "600",
    },
    Heading2: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "32px",
        fontWeight: "600",
    },
    Heading3: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "24px",
        fontWeight: "600",
    },
    Heading4: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "20px",
        fontWeight: "600",
    },
    SubTitle1: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "18",
        fontWeight: "600"
    },
    SubTitle2: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "16",
        fontWeight: "600"
    },
    SubTitle3: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "14",
        fontWeight: "600"
    },
    Body1: {    
        fontSize: "20",
        fontWeight: "500"
    },
    Body2: {
        fontSize: "16",
        fontWeight: "500"
    },
    Body3: {
        fontSize: "14",
        fontWeight: "500"
    },
    Body4: {
        fontSize: "10",
        fontWeight: "500"
    },
    Caption1: {
        fontSize: "18",
        fontWeight: "400"
    },
    Caption2: {
        fontSize: "16",
        fontWeight: "400"
    },
    Caption3: {
        fontFamily: "Pretendard-Regular",
        fontSize: "12",
        fontWeight: "400"
    },
    Label1: {
        fontSize: "18",
        fontWeight: "400"
    },
    Label2: {
        fontSize: "16",
        fontWeight: "400"
    },
    Label3: {
        fontFamily: "Pretendard-Medium",
        fontSize: "12",
        fontWeight: "400"
    },
    Button1: {
        fontSize: "24",
        fontWeight: "600"
    },
    Button2: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "16",
        fontWeight: "600"
    },
    Button3: {
        fontFamily: "Pretendard-Semibold",
        fontSize: "12",
        fontWeight: "600"
    },
};