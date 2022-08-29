import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    justifyContent: 'center',
    height: height / 2.8,
  },
  button: {
    backgroundColor: '#bc6c25',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  inputContainer: {
    position: 'absolute',
    width: '100%',
    height: height / 2.8,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  formButton: {
    backgroundColor: '#bc6c25',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    marginHorizontal: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  closeButtonContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#fefae0',
    borderRadius: 20,
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: -20,
  },
  closeButton: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
