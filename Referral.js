import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,TextInput,Image,ScrollView,Dimensions } from 'react-native'
import back1 from '../assets/back1.png'
import name from '../assets/name.png'
import uploadimg1 from '../assets/uploadimg1.png'
import asgid1 from '../assets/asgid1.png'
import relation1 from '../assets/relation1.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import upload1 from '../assets/upload1.png'
import dash1 from '../assets/dash1.png'
// import relation1 from '../assets/relation1.png'
import RadioButtonRN from 'radio-buttons-react-native';
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')

const Referral = ({navigation})=> {

    const [person,setPerson] = useState('');
    const [asgid,setAsgid] = useState(0);


    const data = [
        {
          label: 'Relative'
         },
         {
          label: 'Friend'
         }
        ];


    const uploadSelfie = ()=>{

    }

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
                <View style={styles.dashcontainer}>
                    <Image source={dash1}></Image>
                </View>
                <View style={styles.headingcontainer}>
                    <Text style={styles.headingtxt1}>REFERRAL DETAILS</Text>
                    <Text style={styles.headingtxt2}>please fill the following details</Text>
                </View>

                <View style={styles.bottomtxtcontainer}>
                    <Image source={name}></Image>
                    <Text style={styles.bottomtxt1}>Who invited you?</Text>
                </View>
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    // keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={person}
                    onChangeText={(i)=>setPerson(i)}>
                    </TextInput>
                </View>

                <View style={styles.bottomtxtcontainer}>
                    <Image source={asgid1}></Image>
                    <Text style={styles.bottomtxt1}>Their ASG ID</Text>
                </View>
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    keyboardType="numeric"
                    secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={asgid}
                    onChangeText={(i)=>setAsgid(i)}>
                    </TextInput>
                </View>
                <View style={styles.bottomtxtcontainer}>
                    <Image source={relation1}></Image>
                    <Text style={styles.bottomtxt1}>Relation with that person</Text>
                </View>
                <View style={styles.radiocontainer}>
                    <RadioButtonRN style={styles.rn}
                    data={data}
                    selectedBtn={(e) => console.log(e)}
                    icon={
                    <Icon
                        name="check-circle"
                        size={25}
                        color="#23287D"
                    />}
                    />
                </View>
                <View style={styles.uploadtxtimg}>
                    <Text style={{color:'#2C3A99',fontSize:16,fontWeight:'bold',}}>Upload their selfie</Text>
                    <Image source={uploadimg1}></Image>
                </View>
                <View style={{marginLeft:38}}>
                    <TouchableOpacity onPress={()=>uploadSelfie()} style={{marginTop:15}}>
                        <Image source={upload1}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.nxtbtncontainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('PersonalDetails')}>
                        <Text style={styles.nxttxt}>NEXT</Text>
                    </TouchableOpacity>
                </View>
           </ScrollView>
        </View>
        
 
    )
}

export default Referral


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
    dashcontainer:{
        // marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        height:height/26
    },  
    headertxtcontainer:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%'
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
    bottomtxtcontainer:{
        flexDirection:'row',
        marginLeft:38,
        // backgroundColor:'yellow'
    },
    bottomtxt1:{
        marginLeft:15,
        color:'#2C3A99',
        fontSize:16,
        fontWeight:'bold',
        
    
    },
    valuecontainer:{
        // justifyContent:'center',
        // alignItems:'center',
        // marginLeft:15,
        marginBottom:15,
        marginLeft:38,
        // backgroundColor:'yellow'
        
    },
    inuputval:{
        fontFamily:'Roboto-Regular',
        fontSize:16,
        borderBottomColor:"#2C3A99",
        borderBottomWidth:2,
        width:'80%',
        color:'#B1BABB',

    }, 
    radiocontainer:{
        // flexDirection:'row',
        // width:'80%',
        justifyContent:'center',
        color:'#2C3A99',

        
    
    },
    rn:{
    
        // alignSelf:'center',
        // flexDirection:'row',
        margin:15,
        width:'80%',
        marginLeft:38,
        color:'#2C3A99',
        
    },
    headingcontainer:{
        // justifyContent:'center',
        width:width,
        alignItems:'center',
        height:height/6.5,
        // marginBottom:20,
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
    uploadtxtimg:{
        marginLeft:38,
        flexDirection:'row',
        width:'80%',
        justifyContent:'space-between',
        // backgroundColor:'yellow'

    },
    nxtbtncontainer:{
        justifyContent:'flex-end',
        width:width,
        flexDirection:'row',
        marginBottom:20
        // backgroundColor:'yellow'
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
        
    }

})






















