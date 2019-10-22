/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import KeyValueDisplay from './KeyValueDisplay'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header /> */}
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>


            <KeyValueDisplay keyData={"small key"} valueData={"small value"}/>
            <KeyValueDisplay keyData={"Long key:CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events"} valueData={"Long value:CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events"}/>
            <KeyValueDisplay keyData={"Long key:CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events"} valueData={"small value"}/>
            <KeyValueDisplay keyData={"small key"}  valueData={"Long value:CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events"}/>


            <KeyValueDisplay keyData={"small key"} valueData={"small value"} displayMode="LeftLeft"/>
            <KeyValueDisplay keyData={"Long key:CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events"} valueData={"Long value:CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events"}  displayMode="LeftLeft"/>
            <KeyValueDisplay keyData={"Long key:CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events"} valueData={"small value"} displayMode="LeftLeft"/>
            <KeyValueDisplay keyData={"small key"}  valueData={"Long value:CNET news editors and reporters provide top technology news, with investigative reporting and in-depth coverage of tech issues and events"} displayMode="LeftLeft"/>
         
            <KeyValueDisplay keyData={"iPhone"} valueData={"$234"}/>
            <KeyValueDisplay keyData={"iPad"} valueData={"$43445"}/>
            <KeyValueDisplay keyData={"iPod"} valueData={"$145"}/>
            <KeyValueDisplay keyData={"iMac"} valueData={"$333445"}/>

            <KeyValueDisplay keyData={<Text>displayMode:RightLeft</Text>} valueData={"$333445"} displayMode={"RightLeft"}/>

            <KeyValueDisplay keyData={<Text>gap:40</Text>} valueData={"$333445"} displayMode={"RightLeft"} gap={40}/>



          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
