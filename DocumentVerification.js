import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,TextInput,Image,Dimensions } from 'react-native'
import back1 from '../assets/back1.png'
import * as Progress from 'react-native-progress';
import acld from '../assets/acld.png'
import pcld from '../assets/pcld.png'
import dlld from '../assets/dlld.png'
import { spring } from 'react-native-reanimated';
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')


const DocumentVerification = ({navigation})=> {

    const [aadharcard,setAadharCard] = useState(0);
    const [pancard,setPanCard] = useState(0);
    const [drivinglicense,setDrivingLicense] = useState(0)

    const [changerogress,setChangeProgress] =  useState(0.01);

    useEffect(()=>{
        
        setTimeout(function(){
            
            setChangeProgress(0.33)
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
            <View style={styles.bottomcontainer}>
                <View style={styles.progresscontainer}>
                    <Progress.Bar progress={changerogress} width={300} color={'#23287D'} 
                    ></Progress.Bar>                
                </View>
                <View style={styles.headingcontainer}>
                    <Text style={styles.headingtxt1}>DOCUMENT VERIFICATION</Text>
                    <Text style={styles.headingtxt2}>please fill details whatever applicable</Text>
                </View>

                <View style={styles.bottomtxtcontainer}>
                    
                    <Text style={styles.bottomtxt1}>Aadhar Card Number</Text>
                    <Image source={acld}></Image>
                </View>
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={aadharcard}
                    onChangeText={(i)=>setAadharCard(i)}>
                    </TextInput>
                </View>





                <View style={styles.bottomtxtcontainer}>
                    
                    <Text style={styles.bottomtxt1}>Pan Card Number</Text>
                    <Image source={pcld}></Image>
                </View> 
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={pancard}
                    onChangeText={(i)=>setPanCard(i)}>
                    </TextInput>
                </View>




                <View style={styles.bottomtxtcontainer}> 
                    <Text style={styles.bottomtxt1}>Driving License ID</Text>
                    <Image source={dlld}></Image>
                </View> 
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={drivinglicense}
                    onChangeText={(i)=>setDrivingLicense(i)}>
                    </TextInput>
                </View>


                <View style={styles.nxtbtncontainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('OtherDetails')}>
                        <Text style={styles.nxttxt}>NEXT</Text>
                    </TouchableOpacity>
                </View>



            </View>
        </View>
    )
}

export default DocumentVerification



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
        width:width,
        backgroundColor:'#FFFFFF',
        // height:'100%',
        // alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flex:0.90,
        justifyContent:'flex-start'
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
        height:'16%',
        height:height/7.5,
        // backgroundColor:'yellow'
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









    bottomtxtcontainer:{
        flexDirection:'row',
        // marginLeft:38,
        justifyContent:'space-between',
        width:'80%',
        // backgroundColor:"yellow",
        marginHorizontal:40,
    },
    bottomtxt1:{
        // marginLeft:15,
        color:'#2C3A99',
        fontWeight:'bold',
        fontSize:16

    
    },
    valuecontainer:{
        // justifyContent:'center',
        // alignItems:'center',
        // marginLeft:38,
        marginBottom:15,
        width:"100%",
        
        // backgroundColor:"yellow"
        
    },
    inuputval:{
        fontFamily:'Roboto-Regular',
        fontSize:18,
        borderBottomColor:"#2C3A99",
        borderBottomWidth:2,
    
        color:'#B1BABB',
        marginHorizontal:40
    },




    nxtbtncontainer:{
        justifyContent:'flex-end',
        width:'90%',
        flexDirection:'row',
        alignItems:'flex-end',
        // backgroundColor:'yellow',
        height:height/8


    },
    nxttxt:{
        fontFamily:'Roboto-Regular',
        color:'#FFFFFF',
        backgroundColor:'#F19922',
        fontSize:18,
        borderColor:'#F19922',
        // marginRight:10,
        padding:10,
        paddingHorizontal:30,
        borderRadius:20,
        marginHorizontal:10,
        // margin:10,
        // marginTop:20
    }
})





















