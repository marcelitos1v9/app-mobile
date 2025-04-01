import TurmaScreen from '@/components/screen/Turma';
import Title from '@/components/ui/text/Title/Title';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet,View, Text,ScrollView,TextInput, Image } from 'react-native';


export default function ModalScreen() {
  return (
    <View style={styles.container}>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    
      <TurmaScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
