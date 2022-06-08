import { getDefaultHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

const statusBarHeight = Constants.statusBarHeight;

function useHeaderHeight() {
  const frame = useSafeAreaFrame();
  const insets = useSafeAreaInsets();
  const headerFullHeight = getDefaultHeaderHeight(frame, false, insets.top);
  
  const headerHeight = headerFullHeight-statusBarHeight;

  return headerHeight;
};

function useNavBarHeight() {
  const screenHeight = Dimensions.get('screen').height;
  const windowHeight = Dimensions.get('window').height;

  if (screenHeight > windowHeight) {
    return screenHeight - windowHeight + statusBarHeight;
  }else 
    return 0;
};

export {
  useHeaderHeight,
  useNavBarHeight
}