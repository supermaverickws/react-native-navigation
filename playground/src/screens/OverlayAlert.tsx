import React from 'react';
import { StyleSheet, Text, Button, View, ViewStyle, TextStyle } from 'react-native';
import { Navigation, NavigationComponentProps } from 'lib/src';
import { component } from '../commons/Layouts';
import Screens from './Screens';
import testIDs from '../testIDs';

const { OVERLAY_ALERT_HEADER, DISMISS_BTN, SET_INTERCEPT_TOUCH } = testIDs;

export default class OverlayAlert extends React.PureComponent<NavigationComponentProps> {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title} testID={OVERLAY_ALERT_HEADER}>
          Test view
        </Text>
        <Button title="Dismiss" testID={DISMISS_BTN} onPress={this.dismiss} />
        <Button title="Set Root" onPress={this.setRoot} />
        <Button
          title="Set Intercept touch"
          testID={SET_INTERCEPT_TOUCH}
          onPress={this.setInterceptTouch}
        />
      </View>
    );
  }

  dismiss = () => Navigation.dismissOverlay(this.props.componentId);
  setRoot = () => Navigation.setRoot({ root: component(Screens.Pushed) });

  setInterceptTouch = () =>
    Navigation.mergeOptions(this.props.componentId, {
      overlay: {
        interceptTouchOutside: false,
      },
    });
}

type Style = {
  root: ViewStyle;
  title: TextStyle;
};

const styles = StyleSheet.create<Style>({
  root: {
    position: 'absolute',
    backgroundColor: 'green',
    alignItems: 'center',
    height: 160,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    marginTop: 8,
  },
});
