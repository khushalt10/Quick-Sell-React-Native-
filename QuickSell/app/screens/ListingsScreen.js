import React, { useEffect, useState } from "react";
import {  FlatList, StyleSheet } from "react-native";

import routes from '../navigation/routes'
import Button from '../components/Button'
import Card from "../components/Card";
import listingApi from '../api/listings' 
import colors from "../config/colors";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import ActivityIndicator from "../components/ActivityIndicator";


function ListingsScreen({navigation}) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadListings();
  },[])

  const loadListings = async() => {
    setLoading(true);
    const res = await listingApi.getListings();
    setLoading(false);

    if (!res.ok) return setError(true);

    setError(false);
    setListings(res.data);
  }

  return (
    <Screen style={styles.screen}>
      {error && <>
          <AppText>Couldn't retrive the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />    
      </>}
      <ActivityIndicator visible={true} />
      {/* <FlatList
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
      /> */}
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
