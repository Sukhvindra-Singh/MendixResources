// import { ValueStatus, DynamicValue, NativeImage } from "mendix";
// import { Dispatch, SetStateAction } from "react";
// import { Image as RNImage, ImageURISource, Platform } from "react-native";
// import { ImageTypeEnum } from "../../typings/CustomImageViewerProps";
// import { DimensionsType } from "../components/ImageIconSVG";
// import { calculateSvgDimensions } from "./svgUtils";
// export declare interface GlyphIcon {
//     readonly type: "glyph";
//     readonly iconClass: string;
// }
// export declare interface NativeImageIcon {
//     readonly type: "image";
//     readonly iconUrl: Readonly<ImageURISource | string>;
// }

// export type CustomImageProps = ImageURISource | GlyphIcon | NativeImageIcon | number | string | undefined;
// export declare interface CustomImageObjectProps {
//     type: string | undefined;
//     image: CustomImageProps;
// }

// export async function convertImageProps(
//     bgImage: DynamicValue<NativeImage> | undefined,
//     datasource: ImageTypeEnum
// ): Promise<CustomImageObjectProps> {
//     const fallback: CustomImageObjectProps = {
//         type: undefined,
//         image: undefined
//     };
//     switch (datasource) {
//         case "image": {
//             const imageSource =
//                 bgImage?.status === ValueStatus.Available ? bgImage: null;

//             if (!imageSource) {
//                 return fallback;
//             }

//             if (typeof imageSource.value === "number") {
//                 return {
//                     type: "staticImage", // Static image
//                     image: imageSource.value
//                 };
//             } else if (typeof imageSource.value === "string") {
//                 return {
//                     type: "staticSVG", // Static image SVG
//                     image: imageSource.value
//                 };
//             } else if (imageSource.value?.uri && imageSource.value?.name?.endsWith(".svg")) {
//                 return {
//                     type: "dynamicSVG", // Dynamic image SVG
//                     image: (Platform.OS === "android" ? "file:///" : "") + imageSource.value.uri
//                 };
//             } else if (imageSource.value?.uri) {
//                 return {
//                     type: "dynamicImage", // Dynamic image
//                     image: {
//                         ...imageSource.value,
//                         uri: (Platform.OS === "android" ? "file:///" : "") + imageSource.value.uri
//                     }
//                 };
//             }
//             return fallback;
//         }
//         default:
//             return fallback;
//     }
// }

// export function getImageDimensions(source: CustomImageObjectProps): Promise<{ width: number; height: number }> {
//     return new Promise((resolve, reject) => {
//         switch (source?.type) {
//             case "staticImage":
//                 const { width, height } = RNImage.resolveAssetSource(source?.image as ImageURISource);
//                 resolve({
//                     width,
//                     height
//                 });
//                 break;
//             case "dynamicImage":
//                 const uri = (source?.image as ImageURISource)?.uri as string;
//                 if (uri) {
//                     RNImage.getSize(
//                         uri,
//                         (width, height) => {
//                             resolve({ width, height });
//                         },
//                         reject
//                     );
//                 } else {
//                     resolve({ width: 0, height: 0 });
//                 }
//                 break;
//             case "staticSVG":
//                 resolve(calculateSvgDimensions(source.image as string));
//                 break;
//             case "dynamicSVG":
//                 resolve({ width: 0, height: 0 });
//                 break;
//             default:
//                 resolve({ width: 0, height: 0 });
//                 break;
//         }
//     });
// }

// export function onLayoutSetDimensions(
//     width: number,
//     height: number,
//     setDimensions: Dispatch<SetStateAction<DimensionsType | undefined>>,
//     initialDimensions?: DimensionsType
// ): void {
//     if (initialDimensions?.width && initialDimensions?.height) {
//         let newWidth;
//         let newHeight;
//         const heightScale = height ? height / initialDimensions.height : 1;
//         const widthScale = width ? width / initialDimensions.width : 1;

//         if (widthScale < heightScale) {
//             newWidth = widthScale < 1 ? width : initialDimensions.width;
//             newHeight = widthScale < 1 ? initialDimensions.height * widthScale : initialDimensions.height;
//         } else if (widthScale > heightScale) {
//             newWidth = heightScale < 1 ? initialDimensions.width * heightScale : initialDimensions.width;
//             newHeight = heightScale < 1 ? height : initialDimensions.height;
//         } else {
//             // If scales are equal
//             newWidth = widthScale < 1 ? initialDimensions.width * widthScale : initialDimensions.width;
//             newHeight = heightScale < 1 ? initialDimensions.height * heightScale : initialDimensions.height;
//         }

//         setDimensions({
//             width: newWidth,
//             height: newHeight
//         });
//     }
// }
