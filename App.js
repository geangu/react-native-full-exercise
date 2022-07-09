import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

import Home from './src/pages/Home';
import Details from './src/pages/Details';

export default function App() {
  return (
    <SafeAreaView>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:characterId" element={<Details />} />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}
