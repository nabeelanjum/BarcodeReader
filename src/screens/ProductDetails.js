import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button, Text } from '../components';
import colors from '../utils/colors';
import { normalizeX, normalizeY } from '../utils/functions';

const ProductDetails = () => {

  // const { details } = props.route.params;

  const details = {
    images: ['https://images.barcodelookup.com/4859/48596913-1.jpg'],
    brand: 'Vasline',
    category: 'Health & Beauty > Personal Care',
    description: 'convenience bottle 3.5oz can be carried anywhere',
    features: [
      "contain micro-droplets of vaseline jelly",
      "rich and heavy",
      "non greasy lotion",
      "clinicaly proven to restor very dry skin in 5 days"
    ],
    manufacturer: 'Unilever',
    label: 'Unilever',
    product_name: 'Vaseline Intensive Care Lotion Advanced Strengh 100gr=3.5oz Pack of 6 plus one free Panten Pro-v Deep Fortifying Treament 1.7oz'
  };

  const { images, brand, category, description, features, manufacturer, label, product_name } = details;

  return (
    <ScrollView style={styles.container}>
      {images.length > 0 && <Image style={styles.productImage} source={{ uri: details.images[0] }} />}
      <View style={styles.detailsBody}>

        <Text numberOfLines={2} boldest size={16}>{product_name}</Text>
        <Text color={colors.LIGHT_TEXT}>{category}</Text>

        <View style={styles.productDetailsSection}>
          <Text bolder>Description:</Text>
          <Text style={styles.detailsText}>{description}</Text>
        </View>

        <View style={styles.productDetailsSection}>
          <Text bolder>Manufacturer:</Text>
          <Text style={styles.detailsText}>{manufacturer}</Text>
        </View>

        <View style={styles.productDetailsSection}>
          <Text bolder>Product Details:</Text>
          {features.map((feature, i) =>
            <View style={{ marginLeft: 8 }}>
              <Text style={styles.detailsText} key={i}>→ {feature}</Text>
            </View>
          )}
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BACKGROUND
  },
  productImage: {
    width: '100%',
    height: normalizeY(150),
    resizeMode: 'contain',
    backgroundColor: colors.LIGHT_GREY
  },
  detailsBody: {
    padding: normalizeX(12),
  },
  productDetailsSection: {
    marginTop: normalizeY(20),
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'rgb(242, 239, 248)',
  },
  detailsText: {
    marginTop: normalizeY(4)
  }
});

export default ProductDetails;