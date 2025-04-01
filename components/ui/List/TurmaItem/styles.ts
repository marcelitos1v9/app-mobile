import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // No styles.ts do TurmaList
  itemContainer: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderLeftWidth: 6, // Largura da borda
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});