import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle, SafeAreaView } from "react-native";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import { Style } from "@mendix/pluggable-widgets-tools";
import { ListviewTwoProps } from "../typings/ListviewTwoProps";
import FlatListComponent from "./components/FlatListComponent";
// import ScrollViewComponent from "./components/ScrollViewComponent";
// import InfiniteScrollComponent from "./components/InfiniteScrollComponent";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

const defaultStyle: CustomStyle = {
    container: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    label: {
        color: "black"
    }
};
export function ListviewTwo({ style, pagesize = 20, dataSource, content,footercontent }: ListviewTwoProps<CustomStyle>): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);
   
    return (
        <SafeAreaView style={styles.container}>
            <FlatListComponent items={dataSource?.items} content={content} pagesize={pagesize} footercontent={footercontent}/>
            {/* <ScrollViewComponent items={dataSource?.items} content={content} pagesize={pagesize}/> */}
            {/* <InfiniteScrollComponent items={dataSource?.items} content={content} pagesize={pagesize} /> */}
        </SafeAreaView>
    );
}

