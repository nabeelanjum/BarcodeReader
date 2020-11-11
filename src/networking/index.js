import { Alert } from 'react-native';

const BASE_URL = 'https://api.barcodelookup.com/v2/products';
const API_KEY = '5uhzft62bxexroakdofe06uor6s9ab';

export async function invokeAPI(productCode) {
  try {

    const url = `${BASE_URL}?barcode=${productCode}&formatted=y&key=${API_KEY}`;
    console.log('URL for API call:', url);

    const headers = {
      'Content-Type': 'application/json',
    };

    let resp = await fetch(url, {
      method: 'GET',
      headers
    });
    console.log('RESPONSE:', resp);

    const response = await handleResponse(resp);
    return response;

  } catch (error) {
    Alert.alert('Oops', `Something went wrong, ${error}`);
    console.log('In catch block:', error);
  }
}

async function handleResponse(response) {
  switch (response.status) {
    case 200:
      const respJson = await response.json();
      console.log('RESPONSE_JSON:', respJson);
      return respJson;
    case 403:
      throw 'Invalid or expired API key';
    case 404:
      throw 'Product not found';
    case 429:
      throw 'Your API plan has exceeded limit';
    default:
      throw 'Please try again later';
  }
}