import { View, ScrollView } from "react-native";
import {createElement} from "react";
import {ListWidgetValue,ObjectItem } from "mendix";

interface ScrollViewComponentProps {
    items: ObjectItem[] | undefined;
    content: ListWidgetValue;
}
const ScrollViewComponent = ({ items, content }: ScrollViewComponentProps) => {
    return (
        <ScrollView>
            <View>{items ? items.map(i => content.get(i)) : null}</View>
        </ScrollView>
    );
};

export default ScrollViewComponent;
