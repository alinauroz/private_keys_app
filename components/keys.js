import React from 'react'
import {Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

export default class Keys extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <ScrollView>
                <TouchableOpacity
                    style = {styles.button}
                >
                    <Text style = {styles.button_text}>Generate New Pair</Text>
                </TouchableOpacity>
                <Text>
                    {this.state.private_key}
                </Text>
                <Text>
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
    },
    button_text: {
        textAlign: "center",
        fontWeight: "bold"
    }
})