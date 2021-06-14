import React from 'react'
import { View, Text,Button,TouchableOpacity,StyleSheet,Image,SafeAreaView } from 'react-native'

const Splash = ({navigation})=> {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container}>
                <Text style={styles.text}>Anant Sewa Group</Text>
                <Text style={styles.text}>Application</Text>
            </View>
            <View style={styles.text2container}>
                <TouchableOpacity onPress={()=>navigation.navigate('Stage2')}>
                    <Text style={styles.text2}>NEXT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Splash



const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#23287D',

    },
    container:{
        flex:.90,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#23287D',
    },
    text:{
        color:'#FFFFFF',
        fontSize:34,
        textTransform:'capitalize',
        fontFamily:'Merienda-Regular'
    },
    text2:{
        color:'#FFFFFF',
        fontSize:18,
        textTransform:'uppercase',
    },
    text2container:{
        flex:0.10,
        // flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        backgroundColor:'#23287D',
        margin:20,
        fontFamily:'Roboto-Regular'
    }
})





















