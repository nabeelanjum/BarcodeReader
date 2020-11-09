import React from 'react';
import { View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { Button, Text } from '../components';
import colors from '../utils/colors';
import { isAndroid } from '../utils/constants';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { normalizeX } from '../utils/functions';
import { invokeAPI } from '../networking';

const Home = () => {

  const getCameraPermission = async () => {

  }

  const openAppSettings = () => {
    if (isAndroid) {
      getCameraPermission();
    } else {
      Linking.canOpenURL('app-settings:').then((supported) => {
        if (!supported) {
          console.log('Can\'t handle settings url');
        } else {
          return Linking.openURL('app-settings:');
        }
      }).catch((err) => console.error('Can\'t open url:', err));
    }
  }

  const onSuccess = async (product) => {
    const resp = await invokeAPI(product.data);
    console.log(resp);
  }

  const notAuthorizedView = (
    <View style={styles.unauthorizedView}>
      <Text size={20} boldest style={styles.darkFont}>App needs to access your camera so that you can scan barcodes</Text>
      <Button style={{ marginTop: 20 }} onPress={openAppSettings} title='Enable Camera Permission' />
    </View>
  )

  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        notAuthorizedView={notAuthorizedView}
      />
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