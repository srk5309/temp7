import React,{useState,useRef} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,Button,TextInput,Dimensions } from 'react-native'
import otp1 from '../assets/otp1.png' 
import back1 from '../assets/back1.png'
import { color } from 'react-native-reanimated'
// import OtpInputs from 'react-native-otp-inputs'
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import OTPTextInput from 'react-native-otp-textinput'
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')

const Otpscreen = ({navigation})=> {

    const [color,setColor] = useState('#F19922');
    const [fotp,setFotp] = useState('');

    const [i1,setI1] = useState('')
    const [i2,setI2] = useState('');
    const [i3,setI3] = useState('')
    const [i4,setI4] = useState('');
    


    const inref1 = useRef();    
    const inref2 = useRef();
    const inref3 = useRef();    
    const inref4 = useRef();



    const handleValidate = ()=>{
        setColor('green')   
        setFotp(i1+i2+i3+i4)
        setTimeout(function(){
            
            navigation.navigate('Login')
        }, 1000); 
        
    }

    const chang1 = (i)=>{
        inref2.current.focus()
        setI1(i)
    }

    const chang2 = (i)=>{
        inref3.current.focus()
        setI2(i)
    }

    const chang3 = (i)=>{
        inref4.current.focus()
        setI3(i)
    }



    return (
        <View style={styles.maincontainer}>
            <View style={styles.backimgcontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.backimage} source={back1}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.imagecontainer}>
                <Image source={otp1}></Image>
            </View>
            <View style={styles.txtcontainer}>
                <Text style={styles.txt}>Enter OTP</Text>
                <Text style={styles.txt}>Sent on your mobile number</Text>
            </View>
            <View style={styles.otpcontainer}>
                <TextInput style={styles.otp1}
                keyboardType="numeric"
                ref={inref1}
                // placeholder="Name"
                // placeholderTextColor="white"
                value={i1}
                maxLength={2}
                onChangeText={(i)=>chang1(i)}>
                </TextInput>

                <TextInput style={styles.otp1}
                keyboardType="numeric"
                ref={inref2}
                // placeholder="Name2"
                // placeholderTextColor="white"
                value={i2}
                maxLength={1}
                onChangeText={(i)=>chang2(i)}>
                </TextInput>


                <TextInput style={styles.otp1}
                keyboardType="numeric"
                ref={inref3}
                // placeholder="Name2"
                // placeholderTextColor="white"
                value={i3}
                maxLength={1}
                onChangeText={(i)=>chang3(i)}>
                </TextInput>

                <TextInput style={styles.otp1}
                keyboardType="numeric"
                ref={inref4}
                // placeholder="Name2"
                // placeholderTextColor="white"
                value={i4}
                maxLength={1}
                onChangeText={(i)=>setI4(i)}>
                </TextInput>
        
            </View>
            <Text>{fotp}</Text>
            <View style={styles.infocontainer}>
                <TouchableOpacity onPress={()=>handleValidate()}>
                    <Text style={[styles.btntxt,{backgroundColor:color}]}>VALIDATE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Otpscreen


const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#23287D',
    },
    imagecontainer:{
        flex:0.60,
        backgroundColor:'#23287D',
        justifyContent:'center',
        alignItems:'center'
    },
    infocontainer:{
        flex:0.10,
        backgroundColor:'#23287D',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        margin:20
    },
    btntxt:{
        fontFamily:'Roboto-Regular',
        color:'white',
        backgroundColor: {color},
        fontSize:16,
        borderColor:'#F19922',
        padding:10,
        paddingHorizontal:20,
        borderRadius:20
    },


    // borderStyleBase: {
    //     width: 30,
    //     height: 45,
    //     // color:'green',
    //     // backgroundColor:'green'
    //   },
    
    //   borderStyleHighLighted: {
    //     borderColor: "#03DAC6",
    //   },
    
    //   underlineStyleBase: {
    //     width: 30,
    //     height: 45,
    //     borderWidth: 0,
    //     borderBottomWidth: 1,
    //   },
    
    //   underlineStyleHighLighted: {
    //     borderColor: "#03DAC6",
    //   },
      txtcontainer:{
        justifyContent:'center',
        alignItems:'center'
      },
      txt:{
          color:'white'
      },
      backimgcontainer:{

    },
    backimage:{
        margin:15
    },
    otp1:{
        backgroundColor:'#23287D',
        borderBottomColor:'#707070',
        borderWidth:4,
        margin:15,
        // justifyContent:'center',
        // alignItems:'center',
        fontSize:24,
        alignSelf:'center',
        width:width/7,
        // height:'38%',
        color:'#FFFFFF',
        borderLeftWidth:0,
        borderRightWidth:0,
        borderTopWidth:0,
    },
    otpcontainer:{
        flexDirection:'row',
        // justifyContent:'space-between',
        width:width,
        justifyContent:'center',
        alignItems:'center',
        flex:0.30
        // marginTop:40
        
    }
})























