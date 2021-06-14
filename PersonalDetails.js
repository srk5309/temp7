import React,{useState,useEffect} from 'react'
import { View, Text,SafeAreaView,ScrollView,StyleSheet,TouchableOpacity,Image,TextInput,Dimensions } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Snackbar from 'react-native-snackbar';
import DatePicker from 'react-native-date-picker'
import * as Progress from 'react-native-progress';
import back1 from '../assets/back1.png'
import name from '../assets/name.png'
import dash1 from '../assets/dash1.png'
var {height} = Dimensions.get('window')
var {width} = Dimensions.get('window')

const brothersName = [];
const brothersDob = []


const sistersName = [];
const sistersDob = []

const PersonalDetails = ({navigation})=> {

    const [changerogress,setChangeProgress] =  useState(0);

    useEffect(()=>{
        
        setTimeout(function(){
            
            setChangeProgress(0.01)
        }, 1000); 
    },[])


    const [city,setCity] = useState('')

    const [counter1,setCounter1] = useState(1)
    const [counter2,setCounter2] = useState(1)

    const [datebrothers,setDateBrothers] = useState('')
    const [datesisters,setDateSisters] = useState('')

    const brotherPressed = ()=>{
        if(!brothername){
            return Snackbar.show({
                text:"please enter a brother (" + counter1 + ") name",
                duratio:Snackbar.LENGTH_SHORT,
                backgroundColor:"grey",
                textColor:"white"
              })
        }
        else if(!datebrothers){
            return Snackbar.show({
                text:"please select a dob of brother ("+counter1+")",
                duratio:Snackbar.LENGTH_SHORT,
                backgroundColor:"grey",
                textColor:"white"
              })
        }
        brothersName.push(brothername)
        brothersDob.push(datebrothers)
        setBrotherName('')
        setDateBrothers('')
        setCounter1(counter1+1)
        console.log(brothersName)
        console.log(brothersDob)
    }

    const sisterPressed = ()=>{
        if(!sistername){
            return Snackbar.show({
                text:"please enter a sister (" + counter2 + ") name",
                duratio:Snackbar.LENGTH_SHORT,
                backgroundColor:"grey",
                textColor:"white"
              })
        }
        else if(!datesisters){
            return Snackbar.show({
                text:"please select a dob of sister ("+counter2+")",
                duratio:Snackbar.LENGTH_SHORT,
                backgroundColor:"grey",
                textColor:"white"
              })
        }
        sistersName.push(sistername)
        sistersDob.push(datesisters)
        setSisterName('')
        setDateSisters('')
        setCounter2(counter2+1)
        console.log(sistersName)
        console.log(sistersDob)
    }

    const [personname,setPersonName] = useState('');
    const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
    const showDatePicker1 = () => {
        setDatePickerVisibility1(true);
    };
    const hideDatePicker1 = () => {
        setDatePickerVisibility1(false);
    };
    const handleConfirm1 = (date) => {
        console.warn("A date has been picked 1: ", date);
        hideDatePicker1();
    };


    const [fathername,setFatherName] = useState('');
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };
    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };
    const handleConfirm2 = (date) => {
        console.warn("A date has been picked 2: ", date);
        hideDatePicker2();
    };



    const [mothername,setMotherName] = useState('');
    const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);
    const showDatePicker3 = () => {
        setDatePickerVisibility3(true);
    };
    const hideDatePicker3 = () => {
        setDatePickerVisibility3(false);
    };
    const handleConfirm3 = (date) => {
        console.warn("A date has been picked 3: ", date);
        console.log(typeof(date+""))
        hideDatePicker3();
    };



    const [brothername,setBrotherName] = useState('');
    const [isDatePickerVisible4, setDatePickerVisibility4] = useState(false);
    const showDatePicker4 = () => {
        setDatePickerVisibility4(true);
    };
    const hideDatePicker4 = () => {
        setDatePickerVisibility4(false);
    };
    const handleConfirm4 = (date) => {
        console.warn("A date has been picked 4: ", date);
        setDateBrothers(date+"")
        hideDatePicker4();
    };


    const [sistername,setSisterName] = useState('');
    const [isDatePickerVisible5, setDatePickerVisibility5] = useState(false);
    const showDatePicker5 = () => {
        setDatePickerVisibility5(true);
    };
    const hideDatePicker5 = () => {
        setDatePickerVisibility5(false);
    };
    const handleConfirm5 = (date) => {
        console.warn("A date has been picked 5: ", date);
        setDateSisters(date+"")
        hideDatePicker5();
    };


    const [isDatePickerVisible6, setDatePickerVisibility6] = useState(false);
    const showDatePicker6 = () => {
        setDatePickerVisibility6(true);
    };
    const hideDatePicker6 = () => {
        setDatePickerVisibility6(false);
    };
    const handleConfirm6 = (date) => {
        console.warn("A date has been picked 6: ", date);
        setDateSisters(date+"")
        hideDatePicker6();
    };



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
                        <Text style={styles.headingtxt1}>PERSONAL DETAILS</Text>
                        <Text style={styles.headingtxt2}>please fill the following details</Text>
                    </View>
                    <ScrollView>
                        <>
                        <View style={styles.bottomtxtcontainer}>
                            <Image source={name}></Image>
                            <Text style={styles.bottomtxt1}>Name</Text>
                            <Text> (as per document)</Text>
                        </View>
                        <View style={styles.valuecontainer}>
                            <TextInput style={styles.inuputval}
                            // keyboardType="numeric"
                            // secureTextEntry
                            // placeholder="Name"
                            placeholderTextColor="#B1BABB"
                            value={personname}
                            onChangeText={(i)=>setPersonName(i)}>
                            </TextInput>
                        </View>
                        <View style={styles.dobtxtview}>
                            <TouchableOpacity onPress={showDatePicker1}>
                                <Text style={styles.dobtxt}>DOB</Text>
                            </TouchableOpacity>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible1}
                            mode="date"
                            onConfirm={handleConfirm1}
                            onCancel={hideDatePicker1}
                            // isDarkModeEnabled={true}
                            />
                        </>

                        



























                        <>
                        <View style={styles.bottomtxtcontainer}>
                            <Image source={name}></Image>
                            <Text style={styles.bottomtxt1}>Father's Name</Text>
                            
                        </View>
                        <View style={styles.valuecontainer}>
                            <TextInput style={styles.inuputval}
                            // keyboardType="numeric"
                            // secureTextEntry
                            // placeholder="Name"
                            placeholderTextColor="#B1BABB"
                            value={fathername}
                            onChangeText={(i)=>setFatherName(i)}>
                            </TextInput>
                        </View>
                        <View style={styles.dobtxtview}>
                            <TouchableOpacity onPress={showDatePicker2}>
                                <Text style={styles.dobtxt}>DOB</Text>
                            </TouchableOpacity>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible2}
                            mode="date"
                            onConfirm={handleConfirm2}
                            onCancel={hideDatePicker2}
                            // isDarkModeEnabled={true}
                        />
                        </>




                        <>
                        <View style={styles.bottomtxtcontainer}>
                            <Image source={name}></Image>
                            <Text style={styles.bottomtxt1}>Mother's Name</Text>
                            
                        </View>
                        <View style={styles.valuecontainer}>
                            <TextInput style={styles.inuputval}
                            // keyboardType="numeric"
                            // secureTextEntry
                            // placeholder="Name"
                            placeholderTextColor="#B1BABB"
                            value={mothername}
                            onChangeText={(i)=>setMotherName(i)}>
                            </TextInput>
                        </View>
                        <View style={styles.dobtxtview}>
                            <TouchableOpacity onPress={showDatePicker3}>
                                <Text style={styles.dobtxt}>DOB</Text>
                            </TouchableOpacity>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible3}
                            mode="date"
                            onConfirm={handleConfirm3}
                            onCancel={hideDatePicker3}
                            // isDarkModeEnabled={true}
                        />
                        </>


                        <>
                        <View style={styles.bottomtxtcontainer}>
                            <Image source={name}></Image>
                            <Text style={styles.bottomtxt1}>Brother's Name</Text>
                            <Text>{ " ("+ counter1+ ")"}</Text>
                            <View style={{justifyContent:'flex-end',width:'40%',flexDirection:'row'}}>
                                <TouchableOpacity onPress={brotherPressed}>
                                    <Text style={{fontSize:42,color:'#27A3FF',top:-15}}>+</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        <View style={styles.valuecontainer}>
                            <TextInput style={styles.inuputval}
                            // keyboardType="numeric"
                            // secureTextEntry
                            // placeholder="Name"
                            placeholderTextColor="#B1BABB"
                            value={brothername}
                            onChangeText={(i)=>setBrotherName(i)}>
                            </TextInput>
                        </View>
                        <View style={styles.dobtxtview}>
                            <TouchableOpacity onPress={showDatePicker4}>
                                <Text style={styles.dobtxt}>DOB</Text>
                            </TouchableOpacity>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible4}
                            mode="date"
                            onConfirm={handleConfirm4}
                            onCancel={hideDatePicker4}
                            // isDarkModeEnabled={true}
                        />
                        </>

                        
                        <>
                        <View style={styles.bottomtxtcontainer}>
                            <Image source={name}></Image>
                            <Text style={styles.bottomtxt1}>Sister's Name</Text>
                            <Text>{ " ("+ counter2+ ")"}</Text>
                            <View style={{justifyContent:'flex-end',width:'42%',flexDirection:'row'}}>
                                <TouchableOpacity onPress={sisterPressed}>
                                    <Text style={{fontSize:42,color:'#27A3FF',top:-15}}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.valuecontainer}>
                            <TextInput style={styles.inuputval}
                            // keyboardType="numeric"
                            // secureTextEntry
                            // placeholder="Name"
                            placeholderTextColor="#B1BABB"
                            value={sistername}
                            onChangeText={(i)=>setSisterName(i)}>
                            </TextInput>
                        </View>
                        <View style={styles.dobtxtview}>
                            <TouchableOpacity onPress={showDatePicker5}>
                                <Text style={styles.dobtxt}>DOB</Text>
                            </TouchableOpacity>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible5}
                            mode="date"
                            onConfirm={handleConfirm5}
                            onCancel={hideDatePicker5}
                            // isDarkModeEnabled={true}
                        />

                        </>


                        <>
                        <View style={styles.bottomtxtcontainer}>
                            <Image source={name}></Image>
                            <Text style={styles.bottomtxt1}>City</Text>
                        </View>
                        <View style={styles.valuecontainer}>
                            <TextInput style={styles.inuputval}
                            // keyboardType="numeric"
                            // secureTextEntry
                            // placeholder="Name"
                            placeholderTextColor="#B1BABB"
                            value={city}
                            onChangeText={(i)=>setCity(i)}>
                            </TextInput>
                        </View>
                        </>


                        <>
                        <View style={styles.bottomtxtcontainer}>
                            <Image source={name}></Image>
                            <Text style={styles.bottomtxt1}>Anniversary</Text>
                        </View>
                        <View style={styles.dobtxtview}>
                            <TouchableOpacity onPress={showDatePicker6}>
                                <Text style={styles.dobtxt}>DOB</Text>
                            </TouchableOpacity>
                        </View>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible6}
                            mode="date"
                            onConfirm={handleConfirm6}
                            onCancel={hideDatePicker6}
                            // isDarkModeEnabled={true}
                        />
                        </>

                        <View style={styles.nxtbtncontainer}>
                            <TouchableOpacity onPress={()=>navigation.navigate('DocumentVerification')}>
                                <Text style={styles.nxttxt}>NEXT</Text>
                            </TouchableOpacity>
                        </View>




                    </ScrollView>



                </View>
            
            </View>
    
    )
}

export default PersonalDetails




const styles = StyleSheet.create({

    scrollcontainer:{
        // justifyContent:'center',
        // alignItems:'center',
        // flex:1,
        backgroundColor:'lightblue'
    },

    tmp:{
        paddingVertical:40
    },


    container:{
        flex:1,
        backgroundColor:'#23287D',
        // width:'100%'
    },
    headercontainer:{
        flexDirection:'row',
        // paddingVertical:40,
        flex:.10,
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
        
        justifyContent:'center',
        alignItems:'center'
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
        justifyContent:'flex-start'
    },
    bottomtxtcontainer:{
        flexDirection:'row',
        marginLeft:38,
        width:'100%',
        // backgroundColor:"yellow",
        height:height/14
    
    },
    progresscontainer:{
        justifyContent:'center',
        width:'100%',
        alignItems:'center',
        height:height/10,
        // backgroundColor:'yellow'
    },


    bottomtxt1:{
        marginLeft:15,
        color:'#2C3A99',
        fontWeight:'bold',
        fontSize:16,
        fontFamily:'Roboto-Regular',
    
    },
    valuecontainer:{
        // justifyContent:'center',
        // alignItems:'center',
        // marginLeft:15,
        marginBottom:15,
        
    },
    inuputval:{
        fontFamily:'Roboto-Regular',
        fontSize:16,
        borderBottomColor:"#2C3A99",
        borderBottomWidth:2,
        width:'80%',
        color:'#B1BABB',
        // backgroundColor:"yellow",
        marginLeft:38
    },

    headingcontainer:{
        // justifyContent:'center',
        width:'100%',
        alignItems:'center',
        height:height/7.5,
        // marginBottom:20,
        // backgroundColor:"yellow",
        // justifyContent:'center'
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
    dobtxtview:{
        marginLeft:38,
        marginBottom:20
    },
    dobtxt:{
        color:'#F19922',
        fontWeight:'bold',
    },
    nxtbtncontainer:{
        justifyContent:'flex-end',
        width:'100%',
        flexDirection:'row',
        // backgroundColor:"yellow",
        marginBottom:20
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




















