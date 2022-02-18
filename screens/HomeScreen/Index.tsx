import { StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../../types';

import HomeMap from '../../components/HomeMap/Index';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <HomeMap />
  );
}

const styles = StyleSheet.create({});
