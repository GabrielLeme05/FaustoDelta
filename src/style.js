import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '50%',
    borderWidth: 2,
    borderColor:'#000',
    borderRadius: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0', // Cor de fundo
  },
  row: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  input: {
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15, // Cantos arredondados
    backgroundColor: '#fff', // Cor de fundo dos inputs
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#007bff', // Cor do botão
    borderRadius: 15, // Cantos arredondados
    alignItems: 'center',
    borderWidth: 1, // Largura da borda
    borderColor: '#007bff', // Cor da borda
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default styles;
