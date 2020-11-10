import React, { useState } from 'react';
import { View, StyleSheet, Linking, ActivityIndicator } from 'react-native';
import { Button, Text } from '../components';
import colors from '../utils/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/constants';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { normalizeX } from '../utils/functions';
import { invokeAPI } from '../networking';

const Home = ({ navigation }) => {

  const [loading, setLoading] = useState(false);

  const openAppSettings = () => {
    Linking.canOpenURL('app-settings:').then((supported) => {
      if (!supported) {
        console.log('Can\'t handle settings url');
      } else {
        return Linking.openURL('app-settings:');
      }
    }).catch((err) => console.error('Can\'t open url:', err));
  }

  const onSuccess = async (product) => {
    setLoading(true);
    const resp = await invokeAPI(product.data);
    setLoading(false);
    if (resp) {
      navigation.navigate('ProductDetails', { details: resp.products[0] });
    }
  }

  const notAuthorizedView = (
    <View style={styles.unauthorizedView}>
      <Text size={20} boldest style={styles.darkFont}>App needs to access your camera so that you can scan barcodes</Text>
      <Button style={{ marginTop: 20 }} onPress={openAppSettings} title='Enable Camera Permission' />
    </View>
  )

  return (
    <View style={styles.container}>
      {loading ?
        <ActivityIndicator style={{ marginTop: SCREEN_HEIGHT / 3 }} size='large' color={colors.THEME} /> :
        <QRCodeScanner
          onRead={onSuccess}
          showMarker={true}
          markerStyle={{ height: '40%', width: SCREEN_WIDTH / 1.2 }}
          notAuthorizedView={notAuthorizedView}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND
  },
  unauthorizedView: {
    marginHorizontal: normalizeX(15),
    backgroundColor: colors.LIGHT_GREY,
    paddingHorizontal: 16,
    paddingVertical: 28,
    borderRadius: 8,
    shadowOpacity: .2,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 }
  }
});

export default Home;