import { StyleSheet, View } from 'react-native';
import { RootTabScreenProps } from '../../types';

import HomeMap from '../../components/HomeMap/Index';
import CovidMessage from '../../components/CovidMessage/Index';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View>
        <HomeMap />
        <CovidMessage />
    </View>
  );
}

const styles = StyleSheet.create({});
