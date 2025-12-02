import { useRef } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { TrueSheet } from "@lodev09/react-native-true-sheet"
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
	const sheet1 = useRef<TrueSheet>(null);
	const sheet2 = useRef<TrueSheet>(null);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Button title="Open Short list" onPress={() => sheet1.current?.present()} />
			<TrueSheet
			ref={sheet1}
			detents={['auto']}
			cornerRadius={24}
			scrollable
			>
				<FlatList
				data={Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`)}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Text style={{ padding: 16, borderBottomWidth: 1 }}>{item}</Text>
				)}
				nestedScrollEnabled
				/>
			</TrueSheet>


			<Button title="Open Long list" onPress={() => sheet2.current?.present()} />
			<TrueSheet
			ref={sheet2}
			detents={['auto']}
			cornerRadius={24}
			scrollable
			>
				<View>
					<FlatList
					data={Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Text style={{ padding: 16, borderBottomWidth: 1 }}>{item}</Text>
					)}
					nestedScrollEnabled
					/>
				</View>
			</TrueSheet>
		</SafeAreaView>
	);
};

export default HomeScreen;