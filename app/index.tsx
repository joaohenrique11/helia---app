import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { BellRingingIcon, BookBookmarkIcon, ChatsTeardropIcon } from "phosphor-react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ChatsTeardropIcon size={30} color='#1AB65C' weight='duotone' />
          <Text style={styles.headerLeftText}>Helia</Text>
        </View>
        <View style={styles.headerRight}>
          <BellRingingIcon size={30} color='#F4F4F4' weight='duotone' />
          <BookBookmarkIcon size={30} color='#F4F4F4' weight='duotone' />
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A20",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerLeftText: {
    color: "#F4F4F4",
    fontSize: 24,
    fontWeight: 800
  },
})