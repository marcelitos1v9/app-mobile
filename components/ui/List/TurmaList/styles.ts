import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
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