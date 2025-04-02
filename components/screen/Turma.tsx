import Title from '@/components/ui/text/Title/Title';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Text, ScrollView, TextInput, Image, Button } from 'react-native';
import Header from '../ui/Layout/Header';
import ImageComponent from '../ui/Image/ImageComponent';
import CustomTextInput from '../ui/TextInput/CustomTextInput';
import { TurmaType } from '@/types/TurmaType';
import TurmaList from '../ui/List/TurmaList';
import { useEffect, useState } from 'react';
import Counter from '../ui/useState/Counter';

const courseColors = [
  '#FF6B6B', // Vermelho
  '#4ECDC4', // Turquesa
  '#45B7D1', // Azul claro
  '#96CEB4', // Verde água
  '#FFEEAD', // Amarelo
  '#D4A5A5', // Rosa
];

const turmasData: TurmaType[] = Array.from({ length: 6 }, (_, i) => ({
  id: `${i + 1}`,
  name: `DSM${i + 1}`,
  color: courseColors[i % courseColors.length] // Cicla pelas cores
}));


export default function TurmaScreen() {
  const [searchQuery,setSearcQuery]=useState('')
  const filteredTurmas = turmasData.filter(turma =>
    turma.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [selectedTurmaColor, setSelectedTurmaColor] = useState(courseColors[2])

  const [selectedTurmaName, setSelectedTurmaName] = useState('')


  return (
    <View style={styles.container}>
      <>
        <Counter />
        <Header
          title='Turma'
          subtitle={selectedTurmaName}
          titleStyle={{ color: selectedTurmaColor }}
          subtitleStyle={{ color: selectedTurmaColor }}
        />
        <ImageComponent
          uri='https://i.pinimg.com/originals/c6/69/c0/c669c0fc50112bbda1ad0d16856aee98.png'
          color={selectedTurmaColor}
        />
        <CustomTextInput
          hint="Digite o nome da turma..."
          inputStyle={styles.customInput}
          onChangeText={setSearcQuery}
        />
      </>

      <TurmaList
        turmas={filteredTurmas}
        style={styles.listContainer}
        onTurmaPress={(turmaData)=> {setSelectedTurmaColor(turmaData.color)
          setSelectedTurmaName(turmaData.name)}}
      />

      <View style={styles.separator} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

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
  customInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  listContainer: {
    paddingHorizontal: 16
  }
});
