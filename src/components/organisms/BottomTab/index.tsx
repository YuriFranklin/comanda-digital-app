import React from 'react';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {
  Container,
  Shadow,
  TabButtonContainer,
  Title,
  Icon,
  AddButtonContainer,
} from './styles';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {TouchableNativeFeedback} from 'react-native';
import CircleButton from '../../molecules/CircleButton';
import uuid from 'react-native-uuid';

interface BottomTabMenuProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const BottomTab: React.FC<BottomTabMenuProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  let Buttons: JSX.Element[] = [];

  state.routes.forEach((route, index) => {
    const {title, iconName} = descriptors[route.key].options;
    const name = title || route.name || 'undefined';
    const isFocused = state.index === index;

    const onPress = (): void => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate({key: route.key, merge: true});
      }
    };

    Buttons.push(
      <TouchableNativeFeedback
        key={uuid.v4() as string}
        accessibilityRole="button"
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#3e4bfc', false)}>
        <TabButtonContainer>
          <Icon name={iconName} isFocused={isFocused} />
          <Title isFocused={isFocused}>{name}</Title>
        </TabButtonContainer>
      </TouchableNativeFeedback>,
    );
  });

  state.routes.forEach((route, index) => {
    const {type, onAdd} = descriptors[route.key].options;
    const isFocused = state.index === index;
    if (type === 'add') {
      const initialIndex = Number((Buttons.length / 2).toFixed());

      Buttons.splice(
        initialIndex,
        0,
        <TabButtonContainer
          key={uuid.v4() as string}
          style={!isFocused && {display: 'none'}}>
          <AddButtonContainer>
            <CircleButton
              iconName="add"
              size={60}
              // @ts-ignore
              onPress={() => onAdd && onAdd()}
            />
          </AddButtonContainer>
        </TabButtonContainer>,
      );
    }
  });

  return (
    <>
      <Shadow />
      <Container>{Buttons}</Container>
    </>
  );
};

export default BottomTab;
