import {Dimensions} from 'react-native';

export const WINDOW_DIMENSIONS = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const SizeConditions = {
  l: WINDOW_DIMENSIONS.width >= 450,
  m1: WINDOW_DIMENSIONS.width < 450,
  m2: WINDOW_DIMENSIONS.width >= 380,
  s: WINDOW_DIMENSIONS.width < 376,
};

const isDeviceL = SizeConditions.l;
const isDeviceM = SizeConditions.m1 && SizeConditions.m2;
const isDeviceS = SizeConditions.s;

const DeviceSize = {
  select: ({s = null, m = null, l = null, _default = null}) => {
    if (isDeviceL && l) {
      return l;
    } else if (isDeviceM && m) {
      return m;
    } else if (isDeviceS && s) {
      return s;
    } else {
      return _default;
    }
  },
};

export const DeviceSizeIs = DeviceSize.select({
  s: 'SMALL',
  m: 'MEDIUM',
  l: 'LARGE',
});

export const SIZES = {
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',
};
