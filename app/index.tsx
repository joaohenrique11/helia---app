import { BellRingingIcon, BookBookmarkIcon, ChatsTeardropIcon, MagnifyingGlassIcon, SlidersHorizontalIcon } from "phosphor-react-native";
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

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
      <Text style={styles.userName}>Olá João Henrique</Text>
      <View style={styles.inputContainer}>
        <MagnifyingGlassIcon size={30} color='#757575' weight='duotone' />
        <TextInput
        style={styles.input}
          placeholder='Busque sua casa aqui'
          placeholderTextColor='#757575'
        />

        <SlidersHorizontalIcon size={30} color='#1AB65C' weight='duotone' />
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

  userName: {
    paddingTop: 30,
    paddingBottom: 30,
    color: "#F4F4F4",
    fontSize: 25,
    fontWeight: 800
  },

  inputContainer: {
    width: '100%',
    height: 56,
    backgroundColor: '#1F222A',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 20,
  },

  input: {
    flex: 1,
    color: '#F4F4F4'
  }
})