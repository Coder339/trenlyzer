import { StyleSheet, Text, View,Image, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
// import { colors, fonts, globalStyles } from '../../../assets/global/constants'
import Header from '../../../components/header'
import PublicApi from '../../../services/publicRequest'
import Loader from '../../../components/loader'
import { NSE_CHAIN_URL } from '../../../services/urls'
import { globalStyles } from '../../../styles/globalStyle'
import { colors } from '../../../styles/colors'

export default function Home() {
    const [stockData, setStockData] = useState([]) 
    const [filteredRecords, setFilteredRecords] = useState([])
    const [records, setRecords] = useState(null)
    const [loading, setLoading] = useState(false)

    const getFeeds=async()=>{
        setLoading(true)
        try {
            let fetchedData = await PublicApi(NSE_CHAIN_URL)
            console.log('fetchedData',fetchedData);
            if(fetchedData.status===200){
                setFilteredRecords(fetchedData.body.filtered.data)
                setRecords(fetchedData.body.records)
            }
            setLoading(false)
            
        } catch (error) {
            console.log('err',error);
            setLoading(false)
        }
        
    }

    useEffect(() => {
        getFeeds()
    }, [])

    const renderItem=({item,index})=>{
        return(
            <View style={styles.itemContainer}>
                <View style={{...styles.instanceContainer,borderRightWidth:0.5}}>
                    {item.CE &&
                    <Text style={globalStyles.regularLargeText}>{item.CE.strikePrice}</Text>
                    }
                </View>
                <View style={{...styles.instanceContainer,borderLeftWidth:0.5,borderRightWidth:0.5}}>
                    {item.CE &&
                    <Text style={globalStyles.regularLargeText}>{item.CE.lastPrice}</Text>
                    }
                </View>
                <View style={{
                    ...styles.instanceContainer,
                    borderLeftWidth:0.5,
                    backgroundColor:item.CE && item.CE.openInterest>20000 ? colors.primary : colors.backgroundColor
                    }}>
                        {item.CE &&
                        <Text style={globalStyles.regularLargeText}>{item.CE.openInterest}</Text>
                        }
                </View>
            </View>
        )
    }

    const footer=()=>{
        return(
            <View style={styles.footerContainer}>
                <Text style={{...globalStyles.regularSmallText,color:colors.grey6}}>SEBI REGISTERED</Text>
            </View>
        )
    }

    const header=()=>{
        return(
            <>
            {records &&
            <View style={styles.headerContainer}>
                <Text style={{...globalStyles.regularLargeText,color:colors.primary}}>BANKNIFTY</Text>
                <Text 
                    style={globalStyles.regularMediumText}>Underlying Value : 
                    <Text style={{...globalStyles.regularMediumText,color:colors.primary}}>
                        {records.underlyingValue}
                    </Text>
                </Text>
            </View>
            }
            <View style={styles.itemContainer}>
                <View style={{...styles.instanceContainer,borderRightWidth:0.5}}>
                    <Text style={globalStyles.boldLargeText}>SP</Text>
                </View>
                <View style={{...styles.instanceContainer,borderLeftWidth:0.5,borderRightWidth:0.5}}>
                    <Text style={globalStyles.boldLargeText}>LTP</Text>
                </View>
                <View style={{...styles.instanceContainer,borderLeftWidth:0.5}}>
                    <Text style={globalStyles.boldLargeText}>OI</Text>
                </View>
            </View>
            </>
        )
    }
    
    console.log('records',records);
    return (
    <View style={globalStyles.container}>
        <Loader visible={loading}/>
        <Header
            title='Stats'
            rightSvg={<Image 
                source={require('../../../assets/images/refresh.png')} 
                style={{width:22,height:22}}/>
            }
            onRightPress={()=>getFeeds()}
        />
        <View style={{...globalStyles.viewContainer,flex:1}}>
            {filteredRecords && filteredRecords.length>0 ?
            <FlatList
                data={filteredRecords}
                keyExtractor={(item,index)=>`${index}`}
                renderItem={renderItem}
                ListFooterComponent={footer}
                ListHeaderComponent={header}
            />
            :
            <View style={styles.catchProblem}>
                <Text style={globalStyles.boldMediumText}>{`{ Server Down } Please try after sometime`} </Text>
            </View>
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    instanceContainer:{
        flex:1,
        borderColor:colors.border,
        borderWidth:1,
        borderBottomWidth:0,
        alignItems:'center',
        height:24,
        justifyContent:'center'
    },
    catchProblem:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    footerContainer:{
        marginBottom:20,
        alignItems:'flex-end',
        borderTopWidth:1,
        borderColor:colors.border,
        paddingTop:6
    },
    headerContainer:{
        marginVertical:4,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})