import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button, Text } from '../components';
import colors from '../utils/colors';
import { normalizeX, normalizeY } from '../utils/functions';

const ProductDetails = ({ route }) => {

  const { details } = route.params;

  const { images, description, category, brand, label, features, manufacturer, product_name } = details;

  return (
    <ScrollView style={styles.container}>
      {images.length > 0 && <Image style={styles.productImage} source={{ uri: details.images[0] }} />}

      <View style={styles.detailsBody}>

        <Text numberOfLines={2} boldest size={16}>{product_name}</Text>
        {category != 0 && <Text color={colors.LIGHT_TEXT}>{category}</Text>}

        {description != 0 &&
          <View style={styles.productDetailsSection}>
            <Text bolder>Description:</Text>
            <Text style={styles.detailsText}>{description}</Text>
          </View>
        }

        {manufacturer != 0 &&
          <View style={styles.productDetailsSection}>
            <Text bolder>Manufacturer:</Text>
            <Text style={styles.detailsText}>{manufacturer}</Text>
          </View>
        }

        {brand != 0 &&
          <View style={styles.productDetailsSection}>
            <Text bolder>Brand:</Text>
            <Text style={styles.detailsText}>{brand}</Text>
          </View>
        }

        {label != 0 &&
          <View style={styles.productDetailsSection}>
            <Text bolder>Label:</Text>
            <Text style={styles.detailsText}>{label}</Text>
          </View>
        }

        {(features.length > 0) &&
          <View style={styles.productDetailsSection}>
            <Text bolder>Product Details:</Text>
            {features.map((feature, i) =>
              <View key={i} style={{ marginLeft: 8 }}>
                <Text style={styles.detailsText}>→ {feature}</Text>
              </View>
            )}
          </View>
        }

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
    height: normalizeY(180),
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