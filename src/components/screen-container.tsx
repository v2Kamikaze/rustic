import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  ViewStyle,
} from 'react-native';
import {useAppSafeArea} from '../hooks';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

type ContainerProps = {
  children: React.ReactNode;
  style: ViewStyle;
};

const ScrollViewContainer: React.FC<ContainerProps> = ({children, style}) => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={style}>
      {children}
    </ScrollView>
  );
};

const ViewContainer: React.FC<ContainerProps> = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

type ScreenContainer = ViewStyle & {
  scrollable?: boolean;
  children?: React.ReactNode;
};

const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

/**
 * `ScreenContainer` is a component that provides a basic layout structure for screens, supporting different keyboard behaviors, safe areas, and scrollable layouts.
 *
 * ## Usage
 * This component can be used to wrap the content of a screen and adjust the visible area based on the keyboard (for iOS) and the device's safe areas.
 *
 * It accepts the option to be scrollable or not, depending on whether the content requires scrolling.
 *
 * ### Examples
 *
 * ```tsx
 * <ScreenContainer>
 *   <Text>Screen without scrolling</Text>
 * </ScreenContainer>
 *
 * <ScreenContainer scrollable>
 *   <Text>Screen with scrolling</Text>
 * </ScreenContainer>
 * ```
 */
export const ScreenContainer: React.FC<ScreenContainer> = ({
  children,
  scrollable = false,
  ...rest
}) => {
  const {top} = useAppSafeArea();
  const {styles} = useStyles(stylesheet);

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView behavior={behavior} style={styles.container}>
      <Container style={styles.container}>
        <View
          style={[{paddingTop: top}, styles.page, styles.container, {...rest}]}>
          {children}
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
};

const stylesheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  page: {
    paddingHorizontal: theme.spacings.lg,
  },
}));
