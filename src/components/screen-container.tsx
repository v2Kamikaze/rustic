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

type ScreenContainer = {
  scrollable?: boolean;
  children?: React.ReactNode;
};

const behavior = Platform.OS === 'ios' ? 'padding' : undefined;

export const ScreenContainer: React.FC<ScreenContainer> = ({
  children,
  scrollable = false,
}) => {
  const {top, bottom} = useAppSafeArea();
  const {styles} = useStyles(stylesheet);

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView behavior={behavior} style={styles.container}>
      <Container style={styles.container}>
        <View style={[{paddingTop: top, paddingBottom: bottom}, styles.page]}>
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
