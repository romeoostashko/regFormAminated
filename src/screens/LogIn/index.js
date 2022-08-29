import {
  Text,
  TextInput,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';

import {styles} from './style';
import {DeviceSizeIs, SIZES} from '../../deviceSize';

export const LogIn = () => {
  const [isRegister, setIsRegister] = useState(false);

  const {width, height} = Dimensions.get('window');

  const imagePosition = useSharedValue(1);

  const heightDivisor = DeviceSizeIs === SIZES.SMALL ? 1.7 : 2;

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / heightDivisor, 0],
    );
    return {
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [100, 0]);
    return {
      opacity: withTiming(imagePosition.value, {duration: 700}),
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const closeButtonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 500}),
      transform: [
        {rotate: withTiming(interpolation + 'deg', {duration: 1000})},
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      zIndex: imagePosition.value === 0 ? 0 : -1,
      opacity:
        imagePosition.value === 0
          ? withTiming(1, {duration: 1200})
          : withTiming(0, {duration: 800}),
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
    setIsRegister(false);
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    setIsRegister(true);
  };

  const closeHandler = () => {
    imagePosition.value = 1;
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[StyleSheet.absoluteFillObject, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            clipPath="url(#clipPathId)"
            href={require('../../assets/silva.jpg')}
            width={width}
            height={height + 100}
            preserveAspectRatio="xMidyMid slice"
          />
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonAnimatedStyle]}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.closeButton}
            onPress={closeHandler}>
            <Text style={{color: '#555', fontWeight: 'bold'}}>X</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>

      {/*** Buttons ***/}
      <Animated.View style={[styles.buttonContainer, buttonsAnimatedStyle]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={loginHandler}
          style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={registerHandler}
          style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </Animated.View>

      {/*** Form ***/}
      <Animated.View style={[styles.inputContainer, formAnimatedStyle]}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        {!!isRegister && (
          <TextInput placeholder="Password" style={styles.input} />
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          style={styles.formButton}>
          <Text style={styles.buttonText}>
            {isRegister ? 'REGISTER' : 'LOGIN'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
