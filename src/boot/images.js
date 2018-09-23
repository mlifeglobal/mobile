import { Asset } from 'expo';
import { Image } from 'react-native';

const imageAssets = [];

const cacheImages = images =>
  images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
    return Asset.fromModule(image).downloadAsync();
  });

export { imageAssets, cacheImages };
