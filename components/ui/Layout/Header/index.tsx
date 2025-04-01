import { View } from "@/components/Themed";
import { TextStyle, ViewStyle } from "react-native";
import style from "./style"
import Title from "../../text/Title/Title";

type HeaderProps ={
    title:string;
    subtitle:string;
    containerStyle?:ViewStyle;
    titleStyle?:TextStyle;
    subtitleStyle?:TextStyle;
}

export default function Header({
    title,
    subtitle,
    containerStyle,
    titleStyle,
    subtitleStyle,
}:HeaderProps){
    return(
        <View style={[style.container, containerStyle]}>
            <Title style={titleStyle}>{title}</Title>
            <Title style={subtitleStyle}>{subtitle}</Title>
        </View>
    );
}