import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,TextInput,Image,TouchableOpacity,Button,Dimensions } from 'react-native'
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';
import back1 from '../assets/back1.png'
import upload1 from '../assets/upload1.png'
import uploadimgnotdone from '../assets/uploadimgnotdone.png'
import uploadimgdone from '../assets/uploadimgdone.png'
import btnright from '../assets/btnright.png'
import call from '../assets/call.png'
import email1 from '../assets/email1.png'
import * as Progress from 'react-native-progress';
import name from '../assets/name.png'
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')
const OtherDetails = ({navigation})=> {

    const [uploadbtn1,setUploadbtn1] = useState(upload1)
    const [uploadstatus,setUploadStatus] = useState(uploadimgnotdone) 
    const [selfietxt,setSelfietxt] = useState('Upload your selfie')

    const [image,setImage] = useState(uploadimgnotdone)


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const handleUploadbtnPress = ()=>{

        

    }

    const takePhotoFromCamera = ()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            freeStyleCropEnabled:true
          }).then(image => {
            console.log(image);
            setImage(image.path)
            setUploadbtn1(btnright)
            setUploadStatus(uploadimgdone)
            setSelfietxt('Selfie Uploaded')
            toggleModal()
          });
    }

    const chooseFromGallery = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            freeStyleCropEnabled:true
          }).then(image => {
            console.log(image);
            setImage(image.path)
            setUploadbtn1(btnright)
            setUploadStatus(uploadimgdone)
            setSelfietxt('Selfie Uploaded')
            toggleModal()
          });

    }

    const [emailid,setEmailid] = useState(0);
    const [whatsappno,setWhatsappno] = useState(0)
    const [changerogress,setChangeProgress] =  useState(0.33);

    


    useEffect(()=>{
        
        setTimeout(function(){
            
            setChangeProgress(0.66)
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
                    <Text style={styles.headingtxt1}>OTHER DETAILS</Text>
                    <Text style={styles.headingtxt2}>please fill the following details</Text>
                </View>
                <View style={styles.selfiesectioncontainer}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={email1}></Image>
                        <Text style={styles.selfiesectiontxt1}>{selfietxt}</Text>
                    </View>
                    <Image source={uploadstatus}></Image>
                </View>
                <View style={styles.selfieuploadbtncontainer}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Image source={uploadbtn1}></Image>
                    </TouchableOpacity>

                    <Modal isVisible={isModalVisible}
                    coverScreen={true}
                    hasBackdrop
                    backdropColor={'black'}
                    backdropOpacity={0.40}>
                        <View style={styles.modalview}>
                            <TouchableOpacity style={styles.modalbtn} onPress={takePhotoFromCamera}>
                                <Text style={styles.modalbtntxt}>Take a Photo</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalbtn} onPress={chooseFromGallery}>
                                <Text style={styles.modalbtntxt}>Choose From Gallery</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.modalbtn} onPress={toggleModal}>
                                <Text style={styles.modalbtntxt}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </View>
                <View style={styles.bottomtxtcontainer}>
                    <Image source={email1}></Image>
                    <Text style={styles.bottomtxt1}>E-mail ID</Text>
                </View>
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    // keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={emailid}
                    onChangeText={(i)=>setEmailid(i)}>
                    </TextInput>
                </View>


                <View style={styles.bottomtxtcontainer}>
                    <Image source={call}></Image>
                    <Text style={styles.bottomtxt1}>WhatsApp Number</Text>
                </View>
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    // keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={whatsappno}
                    onChangeText={(i)=>setWhatsappno(i)}>
                    </TextInput>
                </View>

                <View style={styles.nxtbtncontainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Asgid')}>
                        <Text style={styles.nxttxt}>NEXT</Text>
                    </TouchableOpacity>
                </View>




            </View>
        </View>
    )
}

export default OtherDetails



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
        width:width,
        alignItems:'center',
        height:height/10,
        // backgroundColor:'yellow'
    },

    headingcontainer:{
        // justifyContent:'center',
        width:width,
        alignItems:'center',
        height:height/7.5,
        marginBottom:20,
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

    selfiesectioncontainer:{
        flexDirection:'row',
        marginLeft:38,
        width:'80%',
        justifyContent:'space-between'
    },

    selfiesectiontxt1:{
        marginLeft:15,
        color:'#2C3A99',
        fontWeight:'bold'
    },

    selfieuploadbtncontainer:{
        marginLeft:38,
        marginBottom:18
    },

    bottomtxtcontainer:{
        flexDirection:'row',
        marginLeft:38,
        width:'100%',
    },
    bottomtxt1:{
        marginLeft:15,
        color:'#2C3A99',
        fontWeight:'bold'
    
    },
    valuecontainer:{
        // justifyContent:'center',
        // alignItems:'center',
        // marginLeft:15,
        marginBottom:15,
        marginLeft:38
        
    },
    inuputval:{
        fontFamily:'Roboto-Regular',
        fontSize:16,
        borderBottomColor:"#2C3A99",
        borderBottomWidth:2,
        width:'80%',
        color:'#B1BABB',
    },

    nxtbtncontainer:{
        justifyContent:'flex-end',
        width:'90%',
        flexDirection:'row',
        alignItems:'flex-end',
        // backgroundColor:'yellow',
        // height:"15%",
        height:height/6


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
        
    },

    modalview:{
        flex:0.30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'skyblue',
        borderRadius:20
    },

    modalbtn:{
        backgroundColor:'#23287D',
        margin:10,
        borderRadius:25

    },
    modalbtntxt:{
        color:'white',
        padding:10,
        paddingHorizontal:40,
        fontSize:20
        
    }


})





















