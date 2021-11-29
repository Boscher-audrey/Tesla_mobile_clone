import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
} from 'react-native'
import styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  faCog,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons'
import Menu from '../Menu'

const CarItem = () => {
  const [locked, setLocked] = useState(true)
  const clickLock = () => {
    if (locked) {
      setLocked(false)
    } else {
      setLocked(true)
    }
  }

  const [fanStatus, setFanStatus] = useState(true)
  const [animationValue, setAnimationValue] = useState(0)
  const clickFan = () => {
    if (fanStatus) {
      setAnimationValue(1)
      setFanStatus(false)
    } else {
      setAnimationValue(0.01)
      setFanStatus(true)
    }
  }

  const [spinValue, setSpinValue] = React.useState(new Animated.Value(0.01))
  React.useEffect(() => {
    runAnimationFn(animationValue)
  })

  const runAnimationFn = (aValue) => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: aValue,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start()
  }

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.backgroundImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ShipyMobile</Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
        </TouchableOpacity>
      </View>
      {/* Mileage */}
      <View style={styles.batterySection}>
        <Image
          source={require('../../assets/battery.png')}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>

      {/* Control icons */}
      <ScrollView>
        <View style={styles.controls}>
          <TouchableOpacity onPress={clickFan}>
            <View style={styles.controlsButton}>
              <Animated.Image
                style={{
                  width: 24,
                  height: 24,
                  transform: [{ rotate: spin }],
                }}
                source={require('../../assets/fan-solid.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickLock}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={locked ? faLock : faUnlockAlt}
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Menu />
      </ScrollView>
    </View>
  )
}

export default CarItem
