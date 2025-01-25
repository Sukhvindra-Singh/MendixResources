import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle,KeyboardAvoidingView,TouchableWithoutFeedback,View,Platform,Keyboard } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { KeyboardAvoidViewProps } from "../typings/KeyboardAvoidViewProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function KeyboardAvoidView({ Content,paddingAndroid,paddingIOS }: KeyboardAvoidViewProps<CustomStyle>): ReactElement {
    return (
        <KeyboardAvoidingView
            behavior={"padding"}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -paddingIOS : -paddingAndroid}
            style={{ flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                <View style={{flex:1 }}>
                    {Content}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
