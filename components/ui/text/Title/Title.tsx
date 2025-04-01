import React from "react";
import { Text, TextStyle } from 'react-native'
import styles from "./styles";

type TitleProps = {
    children: React.ReactNode
    style?: TextStyle
} & React.ComponentProps<typeof Text>;

export default function Title({
    children,
    style,
    ...props
}: TitleProps) {
    return (
        <Text style={[styles.title,style]}>
            {children}
        </Text>
    );
}
