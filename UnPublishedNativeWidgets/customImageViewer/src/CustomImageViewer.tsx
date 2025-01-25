import { createElement, ReactElement, useState, useEffect } from "react";
import { Image, TextStyle, ViewStyle, ImageStyle, View } from "react-native";
import { Style } from "@mendix/pluggable-widgets-tools";
import { CustomImageViewerProps } from "../typings/CustomImageViewerProps";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import { ValueStatus } from "mendix";
import { SvgXml } from "react-native-svg";
export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
    image: ImageStyle;
}

const defaultStyle: CustomStyle = {
    container: {},
    label: {
        color: "#F6BB42"
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "cover"
    }
};

export function CustomImageViewer({
    imageUrl,
    defaultURL,
    imageType,
    Base64Content,
    extention,
    bgImage,
    style
}: CustomImageViewerProps<CustomStyle>): ReactElement {
    const [image, setImage] = useState<string | undefined>(undefined);
    const [base64Image, setBase64Image] = useState<string | undefined>(undefined);
    const [imageExtention, setImageExtention] = useState<string | undefined>(undefined);
    const [ImageType, setImageType] = useState<string>("url");
    const [defaultImage, setDefaultImage] = useState(
        "https://thumbs.dreamstime.com/b/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available-236105299.jpg"
    );
    const styles = mergeNativeStyles(defaultStyle, style);

    useEffect(() => {
        if (imageUrl && imageUrl.status === ValueStatus.Available) {
            setImage(imageUrl.value);
        }
        if (bgImage && bgImage.status === ValueStatus.Available) {
            if (typeof bgImage.value === "string") {
                setImage(bgImage.value);
            }
        }
        if (defaultURL && defaultURL.status === ValueStatus.Available) {
            if (defaultURL.value) setDefaultImage(defaultURL.value);
        }
        if (Base64Content && Base64Content.status === ValueStatus.Available) {
            setBase64Image(Base64Content.value);
        }
        if (extention && extention.status === ValueStatus.Available) {
            setImageExtention(extention.value);
        }
        if (imageType) {
            setImageType(imageType);
        }
    }, [imageUrl, Base64Content, extention, bgImage]);


    return (
        <View style={styles.container}>
            {ImageType === "url" &&
                (image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Image source={{ uri: defaultImage }} style={styles.image} />
                ))}

            {ImageType === "base64" &&
                (base64Image ? (
                    <Image
                        source={{ uri: `data:image/${imageExtention};base64,${base64Image}` }}
                        style={styles.image}
                    />
                ) : (
                    <Image source={{ uri: defaultImage }} style={styles.image} />
                ))}
            {ImageType === "image" && bgImage?.value && (
                <SvgXml xml={image ?? null} width="100%" height="100%" />
            )}
        </View>
    );
}
