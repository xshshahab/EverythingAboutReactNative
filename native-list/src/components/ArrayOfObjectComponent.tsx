import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ArrayOfObjectComponent = () => {
  const users = [
    { id: 1, name: "Rahul", email: "rahul@gmail.com", age: 25 },
    { id: 2, name: "Amit", email: "amit@gmail.com", age: 28 },
    { id: 3, name: "Sneha", email: "sneha@gmail.com", age: 23 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>Age: {item.age}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // Elevation for Android
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: "#555",
  },
  email: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
});

export default ArrayOfObjectComponent;
