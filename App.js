import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'


// 1) The TouchableMenuIcon will always be displayed on the top-left hand side of the app

class TouchableMenuIcon extends Component {

  toggleDrawer=()=>{    
    this.props.navigationProps.toggleDrawer();
  }
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
          <Image
            source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
            style={{ width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

// 2) Touching the menu icon opens up the SideMenu which you can style however you want

class SideMenu extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'column', marginTop:30, justifyContent: 'space-around'}}>
         <Button
              title="Screen 1"
              onPress={() => {
                this.props.navigation.navigate('RootStackScreen1');
                this.props.navigation.closeDrawer();

              }}
          />
          <Button
              title="Screen 2"
              onPress={() => {
                this.props.navigation.navigate('RootStackScreen2');
                this.props.navigation.closeDrawer();

              }}
            />
          <Button
              title="Screen 3"
              onPress={() => {
                this.props.navigation.navigate('RootStackScreen3');
                this.props.navigation.closeDrawer();

              }}
            />
        </View>
      </View>
    );
  }
}

// 3) A navigation stack RootStack holds the 3 screens in this example

class RootStackScreen1 extends Component {
  render() {
    return (
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 23}}> Root Stack: Screen 1</Text>
        <Button
          title="Next Screen"
          onPress={() => {
            this.props.navigation.navigate('RootStackScreen2');
          }}
        />
      </View>
    );
  }
}
class RootStackScreen2 extends Component {
  render() {
    return (
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 23}}> Root Stack: Screen 2</Text>
        <Button
          title="Next Screen"
          onPress={() => {
            this.props.navigation.navigate('RootStackScreen3');
          }}
        />
        <Button
          title="Previous Screen"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}
class RootStackScreen3 extends Component {
  render() {
    return (
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize: 23}}> Root Stack: Screen 3</Text>
        <Button
          title="Previous Screen"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    RootStackScreen1: RootStackScreen1,
    RootStackScreen2: RootStackScreen2,
    RootStackScreen3: RootStackScreen3
  },
  {
    initialRouteName: 'RootStackScreen1',  
    navigationOptions: ({ navigation }) => ({
      title: "Root Stack", 
      headerLeft: <TouchableMenuIcon navigationProps={ navigation }/>
    })
  }
);



// 4) MyDrawerNavigator wraps the root stack and makes the side menu show up!

export default MyDrawerNavigator = createDrawerNavigator(  
  {
    RootStack: RootStack,
  },
  {
    contentComponent: SideMenu
  }
);
