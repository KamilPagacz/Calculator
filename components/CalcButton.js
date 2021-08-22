import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class CalcButton extends React.Component {
    static defaultProps = {
        onPress:  function() {},
        title: "btn",
        color: "white",
        backgroundColor: "black",
        style: { }
    }

    render(){
        return(
        <View>
            <TouchableOpacity
                onPress={this.props.onPress}
                style={
                    [ styles.container,
                      {backgroundColor: this.props.backgroundColor},
                      {...this.props.style} ]
            }>
                <Text style={
                    [ styles.text,
                      {color: this.props.color} ]
                }>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        height: 70,
        borderRadius: 10,
        margin:5,
        borderColor: "black",
        borderWidth: 2,
    },
    text:{
        fontSize: 30,
        fontWeight:"bold",
    },
});