/* eslint-disable react-native/no-inline-styles */
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const DialogModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Text
                style={{
                    fontSize: 30,
                    color: '#fff',
                }}
            >
                DialogModal Component
            </Text>

            <TouchableOpacity
                onPress={() => setModalVisible(true)}
            >
                <Text>Open Modal</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View
                    style={{ width: 300, height: 300, backgroundColor: 'crimson' }}
                >
                    <Text>This is my modal</Text>
                    <TouchableOpacity
                        onPress={() => setModalVisible(false)}
                    >
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default DialogModal;
