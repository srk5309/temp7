import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,TextInput,Dimensions } from 'react-native'
import call2 from '../assets/call2.png'
import lock2 from '../assets/lock2.png'
import phone2 from '../assets/phone2.png'

import call from '../assets/call.png'
import lock from '../assets/lock.png'
import phone from '../assets/phone.png'

import stage21 from '../assets/stage21.png'
import stage22 from '../assets/stage22.png'
import back1 from '../assets/back1.png'
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')

const Stage2 = ({navigation})=> {

    const [name,setName] = useState('');
    const [phno,setPhno] = useState(0);



    return (
        <View style={styles.maincontainer}>
            <View style={styles.backimgcontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.backimage} source={back1}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.imagecontainer}>
                <Image source={stage21} style={styles.img} resizeMode={'stretch'} ></Image>
            </View>
            <View style={styles.inputcontainer}>
                <View style={styles.inputcontainer1}>
                    <Image source={phone}></Image>
                    <TextInput style={styles.inuputval}
                    // keyboardType=""
                    placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={name}
                    onChangeText={(i)=>setName(i)}>
                    </TextInput>
                </View>
                <View style={styles.inputcontainer1}>
                    <Image source={call}></Image>
                    <TextInput style={styles.inuputval2}
                    keyboardType="numeric"
                    placeholder="Phone Number"
                    placeholderTextColor="#B1BABB"
                    value={phno}
                    onChangeText={(i)=>setPhno(i)}>
                    </TextInput>
                </View>
            </View>
            <View style={styles.infocontainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('Otpscreen')}>
                    <Text style={styles.btntxt}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Stage2

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#23287D',
        
    },
    imagecontainer:{
        flex:0.68,
        backgroundColor:'#23287D',
        justifyContent:'center',
        alignItems:'center',
        // marginTop:20
    },
    img:{
        // width:"80%",
        // height:"80%"
    },
    infocontainer:{
        backgroundColor:'#23287D',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        margin:20,
        // height:'10%',
        flex:0.10
    },
    btntxt:{
        fontFamily:'Roboto-Regular',
        color:'white',
        backgroundColor:'#F19922',
        fontSize:16,
        borderColor:'#F19922',
        padding:10,
        paddingHorizontal:20,
        borderRadius:20,
        
    },
    inputcontainer:{
        flex:0.30,
        // paddingTop:80
        // height:height,
        justifyContent:'center',
        // backgroundColor:'yellow'

    },
    inputcontainer1:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // width:'80%',

    },
    inuputval:{
        fontFamily:'Roboto-Regular',
        fontSize:14,
        borderBottomColor:"#B1BABB",
        borderBottomWidth:2,
        width:width/1.44,
        color:'#B1BABB'
    },
    inuputval2:{
        fontFamily:'Roboto-Regular',
        fontSize:14,
        borderBottomColor:"#B1BABB",
        borderBottomWidth:2,
        width:width/1.44,
        color:'#B1BABB'

    },
    backimgcontainer:{

    },
    backimage:{
        margin:15
    }

})























