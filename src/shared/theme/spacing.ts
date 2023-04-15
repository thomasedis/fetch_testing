import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const [shortDimension] = width < height ? [width, height] : [height, width];
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;

export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;

export const sizeScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const CONTAINER_SPACING = 24;
export const CONTAINER_FLUID_SPACING = 16;

export const spacing = {
  // Spacing
  border: 1,
  small: 8,
  default: 10,
  base: 12,
  regular: 16,
  double: 20,
  medium: 24,
  icon: 28,
  large: 32,
  button: 40,
  big_button: 48,
  picture: 54,

  // Device metrics
  deviceWidth: Dimensions.get('window').width,
  deviceHeight: Dimensions.get('window').height,
};

export const size = {
  // fontSize
  h1: scale(19),
  title: scale(17),
  subTitle: scale(16),
  description: scale(12),
  small: scale(10),
};

export const propsToStyle = <T = Record<string, number | string>>(
  arrStyle: Array<T>,
) => {
  return arrStyle
    .filter(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      (x) => x !== undefined && !Object.values(x).some((v) => v === undefined),
    )
    .reduce((prev: Record<string, number | string>, curr) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const firstKey = Object.keys(curr)[0] as keyof T;
      const firstValue = curr[firstKey];

      if (
        !['opacity', 'zIndex', 'flex'].includes(firstKey as string) &&
        typeof firstValue === 'number'
      ) {
        (curr[firstKey] as unknown as number) = sizeScale(firstValue);
      }
      return { ...prev, ...curr };
    }, {} as Record<string, number | string>);
};
