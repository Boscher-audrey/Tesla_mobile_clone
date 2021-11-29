import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  header: {
    marginTop: 35,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: -1,
  },
  batterySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryImage: {
    height: 14,
    width: 50,
    marginRight: 12,
  },
  batteryText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  status: {
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 250,
  },
  controlsButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 18,
    margin: 15,
  },
})

export default styles
