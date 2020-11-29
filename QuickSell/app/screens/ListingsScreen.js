import React, { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import listingsApi from '../api/listings'
import { useEffect } from "react";
import AppText from "../components/Text";
import Button from "../components/Button";
import { color } from "react-native-reanimated";

function ListingsScreen({ navigation }) {

  const [listings,setListings] = useState([]);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadListings();
  },[])

  const loadListings = async() => {
    setLoading(true)
    const res = await listingsApi.getListings();
    setLoading(false)
    
    if (!res.ok) return setError(true)

    setError(false)
    setListings(res.data)
  }

  return (
    <Screen style={styles.screen}>
      {error && <>
          <AppText>Couldn't retrive the listings</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      }
      <ActivityIndicator color={colors.medium} animating={true} size="large" />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
