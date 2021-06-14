import React,{useState,useEffect} from 'react'
import { View, Text,TextInput,TouchableOpacity,StyleSheet,Image,Dimensions,ImageBackground,ScrollView } from 'react-native'
import * as Progress from 'react-native-progress';
import back1 from '../assets/back1.png'
import asgidbg1 from '../assets/asgidbg1.png'
import asgidbg2 from '../assets/asgidbg2.png'
import right1 from '../assets/right1.png'
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')

const Asgid = ({navigation})=> {

    const [changerogress,setChangeProgress] =  useState(0.66);

    useEffect(()=>{
        
        setTimeout(function(){
            
            setChangeProgress(1)
        }, 1000); 
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.backimage} source={back1}></Image>
                </TouchableOpacity>
                <View style={styles.headertxtcontainer}>
                    <Text style={styles.headertxt}>ANANT SEWA GROUP</Text>
                </View>
            </View>
            <ScrollView style={styles.bottomcontainer}>
                <View style={styles.progresscontainer}>
                    <Progress.Bar progress={changerogress} width={300} color={'#23287D'} 
                    ></Progress.Bar>                
                </View>
                <View style={styles.headingcontainer}>
                    <Text style={styles.headingtxt1}>ASG ID</Text>
                    <Text style={styles.headingtxt2}>please wait till your ID is being generated</Text>
                </View>
                <View style={styles.bgimgcontainer}>
                    <ImageBackground style={styles.bgimg} source={asgidbg2}>
                        <Text style={styles.bgimgtxt}>0000600705132224</Text>
                    </ImageBackground>
                </View>
            
                <View style={styles.nxtbtncontainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Asgidgenerated')}>
                        <Image source={right1}></Image>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default Asgid



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#23287D'
    },
    headercontainer:{
        flexDirection:'row',
        // paddingVertical:40,
        flex:.10,
        justifyContent:'space-around',
        marginHorizontal:10,
        alignItems:'center',
        width:width/1.14
    },
    backimage:{
       
    },
    headertxt:{
        color:'#FFFFFF',
        fontSize:18,
        fontFamily:'Roboto-Regular'
    },
    headertxtcontainer:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        
    },

    bottomcontainer:{
        width:'100%',
        backgroundColor:'#FFFFFF',
        // height:'100%',
        // alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flex:0.90,
        // justifyContent:'flex-start'
    },


    progresscontainer:{
        justifyContent:'center',
        width:'100%',
        alignItems:'center',
        height:height/10,
    },

    headingcontainer:{
        // justifyContent:'center',
        width:'100%',
        alignItems:'center',
        // height:'16%',
        // marginBottom:20,
    },
    headingtxt1:{
        fontSize:22,
        color:'#2C3A99',
        fontWeight:'bold'
    },
    headingtxt2:{
        fontSize:12,
        color:'#2C3A99'
    },

    bgimgcontainer:{
        justifyContent:'flex-start'
    },

    bgimg:{
        width:width,
        height:height/1.5,
        justifyContent:'center',
        alignItems:'center'
    },

    bgimgtxt:{
        color:'#23287D',
        fontSize:30,
        fontFamily:'Roboto-Regular',
        fontWeight:'bold',
        // width:'100%'
    
    },

    
    nxtbtncontainer:{
        justifyContent:'flex-end',
        width:'90%',
        flexDirection:'row',
        alignItems:'flex-end',
        marginBottom:20
        // backgroundColor:'yellow',
        // height:"15%",
        // height:height/40


    },
    nxttxt:{
        fontFamily:'Roboto-Regular',
        color:'#FFFFFF',
        backgroundColor:'#F19922',
        fontSize:18,
        borderColor:'#F19922',
        // marginRight:10,
        padding:8,
        paddingHorizontal:28,
        borderRadius:20,

        // margin:10,
        // marginTop:20
        
    },




})





















