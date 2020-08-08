import React from 'react'
import {Text, ScrollView, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import QRCode from 'react-native-qrcode';
import { ConfirmDialog } from 'react-native-simple-dialogs';

import "../shim"
import * as bitcore from 'bitcore-lib-react-native'

export default class Keys extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    confirmGetKeys = () => {
        for (i = 0; i < 4; i++) {
            let privateKey = new bitcore.PrivateKey();
            let address = privateKey.toAddress().toJSON()

            this.setState({
                ['private_key_' + i]: JSON.stringify(privateKey.bn).substr(1, JSON.stringify(privateKey.bn).length - 2),
                ['address_' + i]: address.hash,
                pk: "private_key_0"
            })
        }
    }

    getKeys = () => {
        this.setState({
            viewConfirm : true
        });
    }

    deletePrivateKey = () => {
        this.setState({
            "viewConfirmDel" : true
        })
    }

    confirmDeleteKey = () => {
        this.setState({
            [this.state.pk] : "DELETED " + this.state.pk
        })
    }

    render () {
        return (
            <ScrollView>
                <View style={{flexDirection:"row"}}>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {this.getKeys}
                    >
                        <Text style = {styles.button_text}>G</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {{... styles.button, width: Dimensions.get('window').width * 0.33, height: Dimensions.get('window').width * 0.33}}
                        onPress = {() => this.setState({"pk" : "private_key_0"})}
                    >
                        <QRCode
                            value={this.state.address_0}
                            size={Dimensions.get('window').width - 55}
                            bgColor='grey'
                            fgColor='white'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {styles.button}
                        onPress = {this.deletePrivateKey}
                    >
                        <Text style = {{... styles.button_text, color: "red"}}>D</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.text_box}>
                    {this.state[this.state.pk]}
                </Text>
                <TouchableOpacity
                    style = {{... styles.button, width: Dimensions.get('window').width * 0.33, marginLeft: Dimensions.get('window').width * 0.33 - 30, height: Dimensions.get('window').width * 0.33}}
                    onPress = {() => this.setState({"pk" : "private_key_1"})}
                >
                        <QRCode
                            value={this.state.address_1}
                            size={Dimensions.get('window').width - 55}
                            bgColor='grey'
                            fgColor='white'
                        />
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{... styles.button, width: Dimensions.get('window').width * 0.33, marginLeft: Dimensions.get('window').width * 0.33 - 30, height: Dimensions.get('window').width * 0.33}}
                    onPress = {() => this.setState({"pk" : "private_key_2"})}
                >
                        <QRCode
                            value={this.state.address_2}
                            size={Dimensions.get('window').width - 55}
                            bgColor='grey'
                            fgColor='white'
                        />
                </TouchableOpacity>
                <TouchableOpacity
                    style = {{... styles.button, width: Dimensions.get('window').width * 0.33, marginLeft: Dimensions.get('window').width * 0.33 - 30, height: Dimensions.get('window').width * 0.33}}
                    onPress = {() => this.setState({"pk" : "private_key_3"})}
                >
                        <QRCode
                            value={this.state.address_3}
                            size={Dimensions.get('window').width - 55}
                            bgColor='grey'
                            fgColor='white'
                        />
                </TouchableOpacity>
                <ConfirmDialog
                    title="Generate New Key"
                    message="Are you sure about that? This action will generate new keys and remove any previuosly generated key and address."
                    visible={this.state.viewConfirm}
                    onTouchOutside={() => this.setState({viewConfirm: false})}
                    positiveButton={{
                        title: "YES",
                        onPress: () => { 
                            this.confirmGetKeys();
                            this.setState({viewConfirm: false})
                        }
                    }}
                    negativeButton={{
                        title: "NO",
                        onPress: () => this.setState({viewConfirm: false})
                    }}
                />
                <ConfirmDialog
                    title="Delete Private Key"
                    message="You are going to delete your private key."
                    visible={this.state.viewConfirmDel}
                    onTouchOutside={() => this.setState({viewConfirmDel: false})}
                    positiveButton={{
                        title: "YES",
                        onPress: () => { 
                            this.confirmDeleteKey();
                            this.setState({viewConfirmDel: false})
                        }
                    }}
                    negativeButton={{
                        title: "NO",
                        onPress: () => this.setState({viewConfirmDel: false})
                    }}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 3,
        marginBottom: 20,
        width:Dimensions.get('window').width * 0.33 - 40,
        height:Dimensions.get('window').width * 0.33 - 40,
        marginLeft: 5,
        marginRight: 5
    },
    button_text: {
        textAlign: "center",
        fontSize: 72
    },
    text_box: {
        height: 60,
        backgroundColor: "red",
        padding: 10,
        color: "white",
        marginBottom: 20,
        borderRadius: 5,
        overflow: "hidden"
    },
    qr: {
        marginLeft: 200
    }
})