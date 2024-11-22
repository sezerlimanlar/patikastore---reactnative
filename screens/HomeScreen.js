import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
  } from "react-native";
  import React from "react";
  import { PRODUCTS } from "../data/data";
  
  export default function HomeScreen() {
    const numColumns = 2; // 2 sütun göstermek için sabit bir değer
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.headerTitle}>PATIKASTORE</Text>
        <TextInput style={styles.input} placeholder="Ara..." />
        <FlatList
          data={PRODUCTS}
          renderItem={({ item }) => {
            return (
              <View style={styles.productsContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: item.imgURL }}
                  resizeMode="contain" // Görüntüyü düzgün tutmak için
                />
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textPrice}>{item.price}</Text>
                <Text style={styles.textStock}>
                  {!item.inStock ? "STOKTA YOK" : ""}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
          numColumns={numColumns} // Sabit sütun sayısı
          key={numColumns} // numColumns değiştiğinde FlatList yeniden render edilir
          columnWrapperStyle={styles.columnWrapper} // Sütunlar arası boşluk
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      marginVertical: 24,
      marginHorizontal: 12,
    },
    productsContainer: {
      flex: 1,
      width: Dimensions.get("window").width / 2.5, // Genişliği dinamik olarak ayarla
      minHeight:100,
      backgroundColor: "rgba(0, 0, 0, 0.03)",
      borderRadius: 8,
      padding: 12,
      marginVertical: 8,
    },
    columnWrapper: {
      justifyContent: "space-between",
      gap:10, // Sütunlar arası boşluk
    },
    headerTitle: {
      fontSize: 32,
      fontWeight: "bold",
      color: "rgb(165, 36, 141)",
    },
    input: {
      backgroundColor: "rgba(0, 0, 0, 0.03)",
      borderRadius: 8,
      marginVertical: 12,
    },
    textStock: {
      color: "red",
      fontSize: 16,
      fontWeight: "bold",
    },
    textPrice:{
        color:"darkgray",
        fontWeight: "bold",
        marginVertical:4
    },
    textTitle:{
        fontSize:14,
        fontWeight: "bold",

    },
    image: {
      width: "100%", // Genişlik tam genişlikte olur
      height: 150, // Daha küçük bir yükseklik
      marginVertical: 12,
    },
  });
  