import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../constants';

function UIButton(props) {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected == true ? 'white' : null,
      }}>
      {isSelected == true && (
        <Icon
          name={'check-circle'}
          style={{
            color: 'green',
            fontSize: 20,
            position: 'absolute',
            left: 10,
            top: 10,
          }}
        />
      )}
      <Text
        style={{
          color: isSelected == true ? 'black' : colors.primary,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
export default UIButton;
