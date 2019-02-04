// @flow

type CalculateSizeReturnValue = {
  width: number,
  height: number,
};

export const calculateSize = (): CalculateSizeReturnValue => {
  const {
    innerWidth: windowWidth,
    innerHeight: windowHeight,
  } = window;
  const defaultRatioWidth = 1024;
  const defaultRatioHeight = 600;

  if (windowWidth / defaultRatioWidth > windowHeight / defaultRatioHeight) {
    return {
      width: Math.floor(windowHeight / (defaultRatioHeight / defaultRatioWidth)),
      height: windowHeight,
    };
  }

  return {
    width: windowWidth,
    height: Math.floor(windowWidth / (defaultRatioWidth / defaultRatioHeight)),
  };
};

export default {
  calculateSize,
};
