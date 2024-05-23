/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Button, FlatList, StyleSheet, Alert} from 'react-native';
import {colors} from '../constants';
import UIHeader from '../components/UIHeader';

interface Device {
  id: string;
  name: string;
  status: string;
}

const devicesData: Device[] = [
  {id: '1', name: 'Thiết bị 1', status: 'Bật'},
  {id: '2', name: 'Thiết bị 2', status: 'Tắt'},
];

const ManageDevicesScreen: React.FC = () => {
  const [devices, setDevices] = useState<Device[]>(devicesData);

  const addDevice = () => {
    // Logic để thêm thiết bị mới
    Alert.alert('Thêm thiết bị', 'Chức năng này sẽ được thêm sau.');
  };

  const editDevice = (id: string) => {
    // Logic để sửa thiết bị
    Alert.alert('Sửa thiết bị', `Chỉnh sửa thiết bị với ID: ${id}`);
  };

  const deleteDevice = (id: string) => {
    // Logic để xóa thiết bị
    Alert.alert('Xóa thiết bị', 'Bạn có chắc chắn muốn xóa thiết bị này?', [
      {text: 'Hủy', style: 'cancel'},
      {
        text: 'Xóa',
        style: 'destructive',
        onPress: () => {
          setDevices(devices.filter(device => device.id !== id));
        },
      },
    ]);
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.primary}}>
      <UIHeader title="Manage Devices" navigation={undefined} />
      <View style={styles.container}>
        <Button title="Thêm thiết bị mới" onPress={addDevice} color="#6200EE" />
        <FlatList
          data={devices}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.deviceContainer}>
              <View style={styles.deviceInfo}>
                <Text style={styles.deviceText}>{item.name}</Text>
                <Text style={styles.deviceStatus}>
                  Trạng thái: {item.status}
                </Text>
              </View>
              <View style={styles.buttonContainer}>
                <Button title="Sửa" onPress={() => editDevice(item.id)} />
                <Button
                  title="Xóa"
                  onPress={() => deleteDevice(item.id)}
                  color="red"
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.primary,
  },
  deviceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  deviceInfo: {
    flex: 1,
  },
  deviceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceStatus: {
    fontSize: 14,
    color: '#777',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ManageDevicesScreen;
