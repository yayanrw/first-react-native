import React from 'react';
import {View, Text, Image, Button} from 'react-native';

const App = () => {
  return <AppBody />;
};

const AppBody = () => {
  return (
    <View style={{padding: 16}}>
      <View
        style={{
          backgroundColor: '#f2f2f2',
          padding: 12,
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={{uri: 'https://placeimg.com/188/107/tech'}}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, marginTop: 16, fontWeight: 'bold'}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginTop: 6,
            fontWeight: 'bold',
            color: '#f2994a',
          }}>
          Rp25.000.000
        </Text>
        <Text style={{fontSize: 12, marginTop: 6, fontWeight: '300'}}>
          Jakarta, Indonesia
        </Text>
        <View
          style={{
            marginTop: 16,
            backgroundColor: '#6fcf97',
            paddingTop: 6,
            paddingBottom: 6,
            borderRadius: 25,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
