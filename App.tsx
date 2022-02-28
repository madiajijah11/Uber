import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import 'react-native-gesture-handler';
import * as Location from 'expo-location';
import RootNavigator from './navigation/Root';

navigator.geolocation = Location;

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar />
        <RootNavigator />
      </SafeAreaProvider>
    );
  }
}
