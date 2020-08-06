import React from 'react'
import {Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

import "../shim"
import * as bitcore from 'bitcore-lib-react-native'
import { add } from 'bitcore-lib-react-native/lib/networks'

export default class Keys extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    getKeys = () => {
        let privateKey = new bitcore.PrivateKey();
        let address = privateKey.toAddress().toJSON()

        this.setState({
            private_key: JSON.stringify(privateKey.bn).substr(1, JSON.stringify(privateKey.bn).length - 2),
            private_key_extended: privateKey.bn.toBuffer({size:32}).toString('hex'),
            address: address.hash
        })
    }

    render () {
        return (
            <ScrollView>
                <TouchableOpacity
                    style = {styles.button}
                    onPress = {this.getKeys}
                >
                    <Text style = {styles.button_text}>Generate New Pair</Text>
                </TouchableOpacity>
                <Text>Private Key</Text>
                <Text style={styles.text_box}>
                    {this.state.private_key}
                </Text>
                <Text>Address</Text>
                <Text style={styles.text_box}>
                    {this.state.address}
                </Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: "lightgrey",
        width: 180,
        borderRadius: 3,
        marginBottom: 20
    },
    button_text: {
        textAlign: "center",
        fontWeight: "bold"
    },
    text_box: {
        height: 130,
        backgroundColor: "lightgrey",
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
        overflow: "hidden"
    }
})