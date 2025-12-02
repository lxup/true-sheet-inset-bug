import { useRef } from "react";
import { Button, FlatList, Text, View } from "react-native";
import { TrueSheet } from "@lodev09/react-native-true-sheet"
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
	const insets = useSafeAreaInsets();

	const sheet1 = useRef<TrueSheet>(null);
	const sheet2 = useRef<TrueSheet>(null);
	const sheet3 = useRef<TrueSheet>(null);
	const sheet4 = useRef<TrueSheet>(null);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Button title="Short list" onPress={() => sheet1.current?.present()} />
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


			<Button title="Long list" onPress={() => sheet2.current?.present()} />
			<TrueSheet
			ref={sheet2}
			detents={['auto']}
			cornerRadius={24}
			scrollable
			>
				<FlatList
				data={Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Text style={{ padding: 16, borderBottomWidth: 1 }}>{item}</Text>
				)}
				nestedScrollEnabled
				/>
			</TrueSheet>

			<Button title="Short list with inset" onPress={() => sheet3.current?.present()} />
			<TrueSheet
			ref={sheet3}
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
				contentContainerStyle={{ paddingBottom: insets.bottom }}
				nestedScrollEnabled
				/>
			</TrueSheet>

			<Button title="Long list with inset" onPress={() => sheet4.current?.present()} />
			<TrueSheet
			ref={sheet4}
			detents={['auto']}
			cornerRadius={24}
			scrollable
			>
				<FlatList
				data={Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<Text style={{ padding: 16, borderBottomWidth: 1 }}>{item}</Text>
				)}
				contentContainerStyle={{ paddingBottom: insets.bottom }}
				nestedScrollEnabled
				/>
			</TrueSheet>
		</SafeAreaView>
	);
};

export default HomeScreen;