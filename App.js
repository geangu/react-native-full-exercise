import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Details from './src/pages/Details';
import Home from './src/pages/Home';
import { Provider } from 'react-redux';
import store from './src/data/store';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView>
          <NativeRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:characterId" element={<Details />} />
            </Routes>
          </NativeRouter>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}
