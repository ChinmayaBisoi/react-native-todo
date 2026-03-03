import React from 'react';
import {
  View,
  Text as RNText,
  TextInput,
  Pressable as RNPressable,
  FlatList as RNFlatList,
  SafeAreaView as RNSafeAreaView,
  StyleSheet,
} from 'react-native';

// Layout
export const Box = View;
export const HStack = (props: any) => <View {...props} style={[styles.row, props.style]} />;
export const VStack = (props: any) => <View {...props} style={[styles.col, props.style]} />;

// Typography (forward textDecorationLine into style for tests)
export const Text = (props: any) => {
  const { textDecorationLine, style, ...rest } = props;
  return (
    <RNText
      style={[style, textDecorationLine != null && { textDecorationLine }]}
      {...rest}
    />
  );
};

// Forms
export const Input = View;
export const InputField = React.forwardRef((props: any, ref: any) => (
  <TextInput ref={ref} {...props} />
));

export const Button = (props: any) => {
  const { children, isDisabled, ...rest } = props;
  return (
    <RNPressable disabled={isDisabled} {...rest}>
      {children}
    </RNPressable>
  );
};
export const ButtonText = RNText;

// Checkbox (single checkbox: isChecked, onChange(bool), testID)
export const Checkbox = ({
  children,
  isChecked,
  onChange,
  testID,
  ...rest
}: any) => (
  <RNPressable
    testID={testID}
    onPress={() => onChange?.(!isChecked)}
    {...rest}
  >
    {children}
  </RNPressable>
);
export const CheckboxIndicator = View;
export const CheckboxIcon = View;
export const CheckboxLabel = RNText;
export const CheckboxGroup = View;

export const Pressable = RNPressable;
export const FlatList = RNFlatList;
export const SafeAreaView = RNSafeAreaView;

// New components for redesigned UI
export const Heading = (props: any) => <RNText {...props} />;
export const Progress = (props: any) => <View {...props} />;
export const ProgressFilledTrack = (props: any) => <View {...props} />;
export const Badge = (props: any) => <View {...props} />;
export const BadgeText = (props: any) => <RNText {...props} />;

export const GluestackUIProvider = ({ children }: any) => <>{children}</>;

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  col: { flexDirection: 'column' },
});
