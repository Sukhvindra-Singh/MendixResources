import {FlatList,View} from 'react-native'
import {createElement,useCallback,ReactNode} from 'react'
import {ListWidgetValue,ObjectItem } from "mendix";

interface FlatListComponentProps {
    items: ObjectItem[] | undefined
    content: ListWidgetValue,
    pagesize: number,
    footercontent?: ReactNode
    onClickLoadMore?: any
}

const FlatListComponent = ({items,content,pagesize,footercontent}:FlatListComponentProps) => {
    const renderItem = useCallback(
        ({ item}:any) => {
            return( 
            <View style={{width:"100%"}}>
                {content?.get(item)}
            </View>)
    },
        [content] // Re-create the renderItem only when content changes
    );


  return (
    <FlatList
                data={items || []}
                renderItem={renderItem}  // Use memoized function to render items
                keyExtractor={(item) => item.id.toString()}  // Ensure unique key for each item
                initialNumToRender={pagesize}  // Number of items to render initially
                maxToRenderPerBatch={pagesize}  // Items to render in one batch
                windowSize={21}  // Controls how many items are rendered off-screen for smooth scrolling
                removeClippedSubviews={false}  // Further optimizes memory by removing off-screen items
                getItemLayout={(data, index) =>{
                    console.log(data);
                    return { length: 80, offset: 80 * index, index };  
                }} // Provide consistent row heights (if items have a fixed height)
                ListFooterComponent={<View>{footercontent ? footercontent : null}</View>}
            />
  )
}

export default FlatListComponent

