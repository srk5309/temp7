import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,Dimensions } from 'react-native'
import back1 from '../assets/back1.png'
import setting1 from '../assets/setting1.png'
import donate from '../assets/donate.png'
import reward from '../assets/reward.png'
import invite from '../assets/invite.png'
import karaan from '../assets/karaan.png'
import paymentimg from '../assets/paymentimg.png'
import rahul from '../assets/rahul.png'
import rohan from '../assets/rohan.png'
import shreya from '../assets/shreya.png'
import uploadimg1 from '../assets/uploadimg1.png'
import uploadimgdone from '../assets/uploadimgdone.png'
import veena from '../assets/veena.png'
import myprofile from '../assets/myprofile.png'
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')


const Mainscreen = ({navigation})=> {
    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.backimage} source={back1}></Image>
                </TouchableOpacity>

                <View style={styles.headertxtcontainer}>
                    <Text style={styles.headertxt}>ANANT SEWA GROUP</Text>
                </View>

                <TouchableOpacity>
                    <Image source={setting1}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomcontainer}>

                <View style={styles.postercontainer}>
                    <View style={styles.postercontent}>
                        <Text style={styles.postertxt}>DONATE</Text>
                        <Image source={donate} style={styles.img}></Image>
                    </View>

                    <View style={styles.postercontent}>
                        <Text style={styles.postertxt}>INVITE</Text>
                        <Image source={invite} style={styles.img}></Image>
                    </View>

                    <View style={styles.postercontent}>
                        <Text style={styles.postertxt}>REAWARD</Text>
                        <Image source={reward} style={styles.img}></Image>
                    </View>

                </View>

                <View style={styles.middlecontainer}>
                    <Text style={styles.contacttxt}>CONTACTS</Text>
                    <TouchableOpacity>
                        <Text style={styles.addasgidbtn}>+ Add ASG ID</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.contactimgcontainer}>

                    <View style={styles.contactimgcontainer1}>
                        <View style={styles.contactimgtxtindividual}>
                            <Image source={uploadimgdone} style={styles.contactimg}></Image>
                            <Text>Alia</Text>
                        </View>
                        <View style={styles.contactimgtxtindividual}>
                            <Image source={paymentimg} style={styles.contactimg}></Image>
                            <Text>Kunal</Text>
                        </View>
                        <View style={styles.contactimgtxtindividual}>
                            <Image source={rohan} style={styles.contactimg}></Image>
                            <Text>Rohan</Text>
                        </View>
                        <View style={styles.contactimgtxtindividual}>
                            <Image source={shreya} style={styles.contactimg}></Image>  
                            <Text>Shreya</Text>
                        </View>
                    </View>

                    <View style={styles.contactimgcontainer2}>
                        <Image source={veena}></Image>
                        <Image source={karaan}></Image>
                        <Image source={rahul}></Image>
                        <Image source={shreya}></Image>  
                    </View>

                </View>

                <View style={styles.bottombtncontainer}>
                    <View style={styles.bottombtncontainer1}>
                        <View style={styles.btncontainer1}>
                            <Image source={myprofile}></Image>
                            <Text style={styles.bottomtxt}>My People</Text>
                        </View>

                        <View style={styles.btncontainer1}>
                            <Image source={myprofile}></Image>
                            <Text style={styles.bottomtxt}>My Rewards</Text>
                        </View>
                    </View>


                    <View style={styles.bottombtncontainer1}>
                        <View style={styles.btncontainer1}>
                            <Image source={myprofile}></Image>
                            <Text style={styles.bottomtxt}>My Chats</Text>
                        </View>

                        <View style={styles.btncontainer1}>
                            <Image source={myprofile}></Image>
                            <Text style={styles.bottomtxt}>Transactions</Text>
                        </View>
                    </View>



                
                </View>




            </View>
        </View>
    )
}



export default Mainscreen


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#23287D',
        // justifyContent:'center'
    },
    headercontainer:{
        flexDirection:'row',
        // paddingVertical:40,
        flex:.10,
        justifyContent:'space-between',
        marginHorizontal:15,
        // backgroundColor:'yellow',
        alignItems:'center'
    },
    backimage:{
        // margin:15,
    },
    headertxt:{
        color:'#FFFFFF',
        fontSize:18,
        fontFamily:'Roboto-Regular'
    },
    headertxtcontainer:{
        // flexDirection:'row',
        // justifyContent:'space-between',
        // alignItems:'center',
        // width:'80%',
    },
    bottomcontainer:{
        width:width,
        backgroundColor:'#FFFFFF',
        // height:'100%',
        // alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flex:0.90,
        justifyContent:'flex-start',
        
    },
    postercontainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:10,
        // backgroundColor:'yellow',
        flex:0.15,
        marginTop:7
    },
    postercontent:{
        justifyContent:'center',
        alignItems:'center'    
    
    },
    img:{
        width:width/4,
        height:height/14
    },
    postertxt:{
        color:"#23287D",
        fontWeight:"bold",
        marginBottom:12
    },
    middlecontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        // backgroundColor:'yellow',
        flex:0.15,
        // justifyContent:'center',
        alignItems:'flex-end',
        marginBottom:10
    },
    addasgidbtn:{
        color:'#FFFFFF',
        backgroundColor:'#F19922',
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:25,
        fontWeight:"bold"
    },  
    contacttxt:{
        color:'#23287D',
        fontWeight:"bold",
        fontSize:16   
    },
    contactimgcontainer:{
        marginHorizontal:10,
        // backgroundColor:'pink',
        flex:0.40,
        // alignItems:'center',
        justifyContent:'space-around'
    },
    contactimgtxtindividual:{
        alignItems:'center'
    },
    contactimg:{
        // height:height/
    },
    contactimgcontainer1:{
        flexDirection:'row',
        justifyContent:'space-between',
        // marginBottom:15
    },
    contactimgcontainer2:{  
        
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bottombtncontainer:{    
        marginHorizontal:10,
        // backgroundColor:'yellow',
        flex:0.20,
        justifyContent:'center',
        // alignItems:'center'
    },
    bottombtncontainer1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    btncontainer1:{
        flexDirection:'row',
        backgroundColor:'pink',
        // paddingHorizontal:10,
        paddingVertical:10,
        width:width/2.50,
        justifyContent:'center',
        alignItems:'center'
    },
    bottomtxt:{
        color:'#FFFFFF',
        marginLeft:5,
        fontWeight:'bold',
        fontSize:18
    }






})




















