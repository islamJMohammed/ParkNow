import React from 'react';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';


import {Text,ImageBackground,View,StyleSheet,Dimensions, TouchableOpacity ,Button,Image} from 'react-native';


const WelcomeScreen=()=>{
  return(
    <View style={ styles.container } >
    <View style={ styles.header } >        
        <Image
              source={require("../assets/logo3.png")}
              resizeMode="stretch" 
              style={ styles.logo } 
          
          />
       
         



        </View>      
         
        
        <LinearGradient  colors={["#fff","#fff"]} 
             start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.1}}
             locations={[0,0.5,0.6]}
            style={ styles.footer } >
            <Text style={ styles.title }>Find near parking Park Now !</Text>
            <Text style={ styles.text }>Sign in with account</Text>   
            <View style={ styles.button }>
                <TouchableOpacity onPress={()=>alert("hi")}>
                    <LinearGradient
                    colors={["#6f1282","#c37dd1"]}
                    style={ styles.signIn }
                    >
                 <Text   style={ styles.textSign } >Get Started </Text>
                 <Icon name="arrow-right" size={20} color="#fff" />
                   </LinearGradient>
                </TouchableOpacity>
            </View >
            </LinearGradient>            
        </View>  
     
      
    
                      
   
  );


  }
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#6f1282",
    },
    imgBackground: {
       width:  windowWidth,
       height:windowHeight,
   
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
    },
    footer:{
        flex:1,
       // backgroundColor:"#8b0000",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        paddingVertical:50,
        paddingHorizontal:30
    },
    title:{
        color:"#6f1282",
        fontSize:25,
        fontWeight:"bold",
    },
    text:{
        color:"#c37dd1",
        marginTop:20,
    },
    button:{
        alignItems:"flex-end",
        marginTop:30,
    },
    signIn:{
        width:180,
        height:55,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        flexDirection:"row",
     
    },
    textSign:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:17,
    },
    logo:{
        width:  windowWidth*0.5,
        height:windowHeight*0.26,

    }


});

export  default WelcomeScreen;