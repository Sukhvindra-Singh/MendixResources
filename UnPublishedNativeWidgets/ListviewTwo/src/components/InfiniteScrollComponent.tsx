import { FlatList, View, ActivityIndicator } from "react-native";
import { useState, useCallback, createElement, useEffect } from "react";
import { ListWidgetValue, ObjectItem } from "mendix";

interface FlatListComponentProps {
    items: ObjectItem[] | undefined;
    content: ListWidgetValue;
    pagesize: number;
}

const InfiniteScrollComponent = ({ items, content, pagesize }: FlatListComponentProps) => {
    // State to manage pagination and loading status
    const [isLoading, setIsLoading] = useState(false);
    const [visibleItems, setVisibleItems] = useState<ObjectItem[]>([]); // Items to render on the screen
    const [page, setPage] = useState(1); // Track the current page
    const itemsPerPage = pagesize; // Number of items to render per page

    // Simulate loading more data (pagination)
    const loadMoreData = useCallback(() => {
        if (isLoading) return; // Prevent loading while already fetching

        setIsLoading(true);
        setTimeout(() => {
            // Simulate fetching more items from the existing `items`
            const nextPageItems = items?.slice(page * itemsPerPage, (page + 1) * itemsPerPage) || [];
            setVisibleItems(prevItems => [...prevItems, ...nextPageItems]);
            setPage(prevPage => prevPage + 1); // Increment the page number
            setIsLoading(false);
            console.warn("pageno.", page);
        }, 1000); // Simulate a delay in fetching more data
    }, [isLoading, page, items]);

    // Load initial data
    useEffect(() => {
        if (items) {
            const initialItems = items.slice(0, itemsPerPage);
            setVisibleItems(initialItems);
        }
    }, [items]);

    // Memoized renderItem function
    const renderItem = useCallback(
        ({ item }: { item: ObjectItem }) => (
            <View style={{width:"100%"}}>{content?.get(item)}</View>
        ),
        [content]
    );

    // getItemLayout helps with performance by knowing the height of each item
    const getItemLayout = (data: any, index: number) => {
        console.log(data);
        return {
            length: 100, // Fixed height for each item (adjust if your item height is different)
            offset: 100 * index, // Position of the item
            index
        };
    };

    // Trigger load more data when reaching the end of the list
    const onEndReached = useCallback(() => {
        if (items && items.length > page * itemsPerPage) {
            loadMoreData();
        }
    }, [loadMoreData]);

    return (
        <FlatList
            data={visibleItems} // Only render the visible items
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()} // Ensure unique key for each item
            initialNumToRender={pagesize} // Number of items to render initially
            maxToRenderPerBatch={pagesize} // Items to render in one batch
            windowSize={pagesize > 50 ? 50 : pagesize} // Controls how many items are rendered off-screen for smooth scrolling
            removeClippedSubviews={false} // Keep off-screen items in memory for smooth scrolling
            getItemLayout={getItemLayout} // Optimize rendering by specifying item height
            onEndReached={onEndReached} // Trigger when user reaches the end of the list
            onEndReachedThreshold={0.7} // Trigger `onEndReached` when 50% of the list is visible
            ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null} // Show loading spinner while fetching more data
        />
    );
};

export default InfiniteScrollComponent;
