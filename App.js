import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Appbar } from 'react-native-paper'

import League_bar from './components/league_bar.js'

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <Appbar></Appbar>
            <View>
                <Text>Assetto Corsa Competetizione Scheduling app+!</Text>
                <StatusBar style="auto" />
            </View>
            <League_bar></League_bar>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const theme = {
    ...DefaultTheme,
    dark: true,
    mode: 'exact',
    colors: {
        primary: '#BB86FC',
        accent: '#03DAC5',
        background: '#121212',
        surface: '#121212'
    }
}