import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Image,Dimensions,ScrollView } from 'react-native'
import back1 from '../assets/back1.png'
import uploadimgdone from '../assets/uploadimgdone.png'
import share from '../assets/share.png'
import download from '../assets/download.png'
import dash1 from '../assets/dash1.png'
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')

const Reciept = ({navigation})=> {
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
                    <Text style={styles.headingtxt1}>RECEIPT & LINKS</Text>
                    <Text style={styles.headingtxt2}>you can download the following on click</Text>
                </View>
                <View style={styles.maincontainer1}>
                    <View style={styles.profilecontainer}>
                        <Text style={styles.profilecontainername}>Srividya Avadhani</Text>
                        <Text style={styles.profilecontainernamestatus}>Profie completed</Text>
                    </View>
                    <View style={styles.profileimgcontainer}>
                        <Image source={uploadimgdone}></Image>
                    </View>
                </View>

                <View style={styles.main2}>
                    <View style={styles.maincontainer2}>
                        <View style={styles.maintxtcontainer2}>
                            <Text style={styles.maintxt2}>Payment Receipt</Text>
                        </View>
                        <View style={styles.mainimgcontainer2}>
                            <TouchableOpacity>
                                <Image source={share}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={download}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.maincontainer2}>
                        <View style={styles.maintxtcontainer2}>
                            <Text style={styles.maintxt2}>ASG - ID & installation links</Text>
                        </View>
                        <View style={styles.mainimgcontainer2}>
                            <TouchableOpacity>
                                <Image source={share}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={download}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.maincontainer2}>
                        <View style={styles.maintxtcontainer2}>
                            <Text style={styles.maintxt2}>Terms & Condition PDF</Text>
                        </View>
                        <View style={styles.mainimgcontainer2}>
                            <TouchableOpacity>
                                 <Image source={share}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={download}></Image>
                             </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.nxtbtncontainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Mainscreen')}>
                        <Text style={styles.nxttxt}>NEXT</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        </View>
    )
}

export default Reciept

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
        height:height/26,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'yellow',
        // marginHorizontal:10
        
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
        // justifyContent:'flex-start',
        
    },

    headingcontainer:{
        justifyContent:'center',
        width:width,
        alignItems:'center',
        height:height/6.50,
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
    maincontainer1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10,
        // backgroundColor:'pink',
        height:height/8
    },
    profilecontainer:{
        // backgroundColor:'lightblue',
        justifyContent:'center',
        
    },
    profilecontainername:{
        color:'#2C3A99'
    },
    profilecontainernamestatus:{
        color:'green'
    },
    profileimgcontainer:{
        justifyContent:'center'
    },
    main2:{
        height:height/2.26,
        // backgroundColor:'pink',
        justifyContent:'center'
    },
    maincontainer2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:10,
        marginRight:10,
        // backgroundColor:'yellow',
        // paddingVertical:20,
        alignItems:'center'
    },
    maintxtcontainer2:{
        // paddingVertical:20,
        // backgroundColor:'pink'
    },
    maintxt2:{
        fontSize:18,
        color:'#2C3A99',
        paddingVertical:30,
        // backgroundColor:'green'
    },
    mainimgcontainer2:{
        flexDirection:'row',
        width:width/3.4,
        justifyContent:'space-between',
        // backgroundColor:'lightblue',
        // paddingVertical:20,
        alignItems:'center'

    },
    nxtbtncontainer:{
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems:'flex-end',
        // backgroundColor:'yellow',
        // height:"15%",
        height:height/10,
        marginHorizontal:10


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























