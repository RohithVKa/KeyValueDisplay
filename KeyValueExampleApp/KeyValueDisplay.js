import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class KeyValueDisplay extends Component {
    static DisplayMode = {
        LeftRight: "LeftRight",
        LeftLeft: "LeftLeft",
        RightLeft: "RightLeft",
        RightRight: "RightRight"
    }
    
    render() {

        const {
            keyBoxStyles=[],
            valueBoxStyles=[],
            keyStyles=[],
            valueStyles=[],
            keyValueBoxStyles=[],
            keyData,
            valueData,
            leftChild,
            rightChild,
            displayMode = KeyValueDisplay.DisplayMode.LeftRight,
            gap = 5,
            keyBoxPercent = 50,
            valueBoxPercent = 50,
        } = this.props;

        let displayModeStyleForKey
        let displayModeStyleForValue

        switch (displayMode) {
            case KeyValueDisplay.DisplayMode.LeftRight:
                displayModeStyleForKey = styles.leftAlign;
                displayModeStyleForValue = styles.rightAlign;
                break;
            case KeyValueDisplay.DisplayMode.LeftLeft:
                displayModeStyleForKey = styles.leftAlign;
                displayModeStyleForValue = styles.leftAlign;
                break;
            case KeyValueDisplay.DisplayMode.RightLeft:
                displayModeStyleForKey = styles.rightAlign;
                displayModeStyleForValue = styles.leftAlign;
                break;
            case KeyValueDisplay.DisplayMode.RightRight:
                displayModeStyleForKey = styles.rightAlign;
                displayModeStyleForValue = styles.rightAlign;
                break;
        }

        return (
            <View style={[styles.keyValueBoxStyles, ...keyValueBoxStyles]}>
                <View style={[styles.keyBox,{flex:keyBoxPercent},{marginRight:gap}, ...keyBoxStyles]}>
                    {leftChild ? leftChild : <Text style={[styles.keyStyle,displayModeStyleForKey, ...keyStyles]}> {keyData} </Text>}
                </View>
                <View style={[styles.valueBox,{flex:valueBoxPercent},{marginLeft:gap}, ...valueBoxStyles]}>
                    {rightChild ? rightChild : <Text style={[styles.valueStyle,displayModeStyleForValue, ...valueStyles]}> {valueData} </Text>}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    keyValueBoxStyles: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        marginTop: 10
    },
    keyBox: {
        backgroundColor: "blue",

    },
    keyStyle: {
    },
    valueBox: {
        backgroundColor: "red",
    },   
    valueStyle: {
        backgroundColor: "red",
    },
    leftAlign: {
        textAlign: 'left',
    },
    rightAlign: {
        textAlign: 'right',
    },

});