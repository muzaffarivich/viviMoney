import React from 'react';
import {StyleSheet, View, TextInput, Pressable, Platform} from 'react-native';
import {SearchIcon} from '../../assets/icon/icon';
import {colors} from '../../constants/color';
import {windowWidth} from '../../constants/size';
import {useNavigation} from '@react-navigation/core';
import {Routes} from '../../constants/routes';

export interface SearchInputProps {
  setText: () => {};
}
//@ts-ignore
const SearchInput = ({setText = () => {}}: SearchIconProps, ref = null) => {
  // ({}: SearchInputProps,) => {
  return (
    <View style={[styles.container]}>
      <Pressable
        hitSlop={5}
        android_ripple={{
          color: colors.black,
          radius: 20,
          borderless: true,
        }}>
        <SearchIcon size={30} />
      </Pressable>
      <TextInput
        // ref={ref}
        style={styles.text}
        placeholder={'Search'}
        placeholderTextColor={colors.lingthGray}
        onChangeText={setText}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 45,
    alignItems: 'center',
    paddingLeft: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    width: windowWidth - 80,
    backgroundColor: colors.lingthBlack,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 30,
    width: '100%',
    ...Platform.select({ios: {padding: 15}}),
  },
});
