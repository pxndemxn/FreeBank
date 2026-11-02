import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './theme/colors';

export default function InputField({
  label,
  icon,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'none',
  isPassword = false,
}) {
  const [hidden, setHidden] = useState(isPassword);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        <Ionicons name={icon} size={15} color={colors.gray} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.grayDark}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={hidden}
          autoCorrect={false}
          selectionColor={colors.primary}
        />
        {isPassword && (
          <Pressable onPress={() => setHidden((h) => !h)} hitSlop={10}>
            <Ionicons
              name={hidden ? 'eye-outline' : 'eye-off-outline'}
              size={16}
              color={colors.gray}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 18 },
  label: { color: colors.gray, fontSize: 11, marginBottom: 6 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    color: colors.white,
    fontSize: 12,
    marginLeft: 10,
    paddingVertical: 0,
  },
});