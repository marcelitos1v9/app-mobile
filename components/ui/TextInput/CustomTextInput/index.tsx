import {
     TextInput,
      TextStyle,
       ViewStyle } from "react-native";
import styles from "./styles";
import { View } from "@/components/Themed";

type CustomTextInputProps = {
    hint?: string;
    defaultValue?: string;
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    onChangeText?:(text:string)=>void
};

export default function CustomTextInput({
    hint,
    defaultValue,
    containerStyle,
    inputStyle,
    onChangeText,
    ...props
}: CustomTextInputProps) {
    return (
        <View>
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={hint}
                defaultValue={defaultValue}
                placeholderTextColor="#888"
                onChangeText={onChangeText}
                {...props}
            />
        </View>
    );
}