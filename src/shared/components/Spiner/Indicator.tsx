import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

export interface propTypes {
  animationEasing?: any;
  animationDuration?: number;

  animating?: boolean;
  interaction?: boolean;

  style?: any;
  renderComponent?: (ob: any) => void;
  count?: number;
}

export const Indicator = ({
  animationEasing = Easing.linear,
  animationDuration = 1000,

  animating = true,
  interaction = true,

  style,
  renderComponent,
  count = 6,
  ...props
}: propTypes) => {
  let animationState = 0;
  let savedValue = 0;
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [current, setCurrent] = useState(animating);

  const startAnimation = () => {
    if (animationState !== 0) {
      return;
    }

    const animation = Animated.timing(progress, {
      duration: animationDuration,
      easing: animationEasing,
      useNativeDriver: true,
      isInteraction: interaction,
      toValue: 1,
    });

    Animated.loop(animation).start();

    animationState = 1;
  };

  const resumeAnimation = () => {
    if (animationState !== 0) {
      return;
    }

    Animated.timing(progress, {
      useNativeDriver: true,
      isInteraction: interaction,
      duration: (1 - savedValue) * animationDuration,
      toValue: 1,
    }).start(({ finished }) => {
      if (finished) {
        progress.setValue(0);

        animationState = 0;
        startAnimation();
      }
    });

    savedValue = 0;
    animationState = 1;
  };

  const saveAnimation = (value) => {
    savedValue = value;
    animationState = 0;

    if (animating) {
      resumeAnimation();
    }
  };
  const stopAnimation = () => {
    if (animationState !== 1) {
      return;
    }

    const listener = progress.addListener(({ value }) => {
      progress.removeListener(listener);
      progress.stopAnimation(() => saveAnimation(value));
    });

    animationState = -1;
  };

  useEffect(() => {
    if (animating) {
      startAnimation();
    }
  }, []);

  useEffect(() => {
    if (animating && !current) {
      resumeAnimation();
    }
    if (!animating && current) {
      stopAnimation();
    }
  }, [animating]);

  const renderComponents = (item, index) => {
    if (typeof renderComponent === 'function') {
      return renderComponent({ index, count, progress });
    }

    return null;
  };

  return (
    <Animated.View {...props}>
      {Array.from(new Array(count), renderComponents)}
    </Animated.View>
  );
};
