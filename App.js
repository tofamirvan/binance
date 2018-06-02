import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import { Container, Content, Grid, Col, Icon, Thumbnail, Button, Tabs, Tab, TabHeading } from 'native-base'
import Swiper from 'react-native-swiper'  

const Divider =(
  <View
      style={{
          borderBottomColor: '#313d46',
          borderBottomWidth: 1,
      }}
  />
)

export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={{ height : 200 }}>
            <Swiper
                  showsPagination={false}
                  autoplay={true}
                  autoplayTimeout={7}
                  style={styles.bannerWrapper}
                >
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('./assets/images/banner1.gif') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('./assets/images/banner2.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('./assets/images/banner3.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('./assets/images/banner4.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('./assets/images/banner5.gif') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('./assets/images/banner6.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('./assets/images/banner7.png') }/>
                  </View>
                  <View style={styles.banners}>
                    <Image style={styles.bannerSlide} source={ require('./assets/images/banner8.png') }/>
                  </View>
                </Swiper>
          </View>
          <View style={styles.row}>
            <Swiper style={styles.timelineWrapper}
            dotColor='#555'
            activeDotColor='yellow'
            >
                <View style={styles.timelineWrapper}>
                  <Grid>
                    <Col style={styles.timelineGrid}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        BNB / BTC
                      </Text>
                      <Text style={{ color : 'red', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : 'green', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                    <Col style={styles.timelineGrid}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        EOS / BTC
                      </Text>
                      <Text style={{ color : 'green', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : 'red', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                    <Col style={[styles.timelineGrid, {borderRightWidth: 0}]}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        TRX / BTC 
                      </Text>
                      <Text style={{ color : 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : 'red', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                  </Grid>
                </View>
                <View style={styles.timelineWrapper}>
                  <Grid>
                    <Col style={styles.timelineGrid}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        ZEN / BTC
                      </Text>
                      <Text style={{ color : 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : 'green', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                    <Col style={styles.timelineGrid}>
                      <Text style={{ color : 'grey', textAlign: 'center' }}>
                        ETH / BTC
                      </Text>
                      <Text style={{ color : 'green', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>0,00018874</Text>
                      <Text style={{ color : 'green', textAlign: 'center', fontWeight: 'bold', fontSize: 12 }}>+7.21%</Text>
                    </Col>
                    <Col style={[styles.timelineGrid, {borderRightWidth: 0}]}>
                      <Text style={{ color : 'grey', textAlign: 'center', justifyContent: 'center' }}>
                        More >>
                      </Text>
                    </Col>
                  </Grid>
                </View>
              </Swiper>
              {Divider}
              <Grid style={{ padding : 5 }}>
                <Col style={{width: 30}}>
                  <Icon style={{ color : 'white', }} name='ios-volume-up'>
                  </Icon>
                </Col>
                <Col>
                  <Swiper
                  autoplay={true}
                  autoplayTimeout={5}
                  showsPagination={false}
                  horizontal={false}
                  vertical={true}
                  style={styles.annoucmentWrapper}
                >
                  <View style={styles.annoucmentWrapper} numberOflines={1}>
                      <Text style={styles.annoucmentItem}>
                      <Text style={{ color : 'white'}}>Binance Lists Theta Token (THETA)</Text>
                    </Text>
                  </View>
                  <View style={styles.annoucmentWrapper} numberOflines={1}>
                      <Text style={styles.annoucmentItem}>
                      <Text style={{ color : 'white'}}>EOS MAinnet Swap Update</Text>
                    </Text>
                  </View>
                  <View style={styles.annoucmentWrapper} numberOflines={1}>
                      <Text style={styles.annoucmentItem}>
                      <Text style={{ color : 'white'}}>Biance Lists IoText (IOTEXT)</Text>
                    </Text>
                  </View>
                  <View style={styles.annoucmentWrapper} numberOflines={1}>
                      <Text style={styles.annoucmentItem}>
                      <Text style={{ color : 'white'}}>Binance Adds XRP/BNB, TUSD/UST and more again</Text>
                    </Text>
                  </View>

                </Swiper>
                </Col>
              </Grid>
          </View>
          <View style={[styles.row, { padding: 15}] }>
            <Grid>
              <Col>
                <Text style={{color : 'white', textAlign: 'center'}}><Thumbnail source={ require('./assets/images/h1.png') } />{'\n'}Support</Text>
              </Col>
              <Col>
                <Text style={{color : 'white', textAlign: 'center'}}><Thumbnail source={ require('./assets/images/h2.png') } />{'\n'}Favorites</Text>
              </Col>
              <Col>
                <Text style={{color : 'white', textAlign: 'center'}}><Thumbnail source={ require('./assets/images/h3.png') } />{'\n'}Deposit</Text>
              </Col>
              <Col>
                <Text style={{color : 'white', textAlign: 'center'}}><Thumbnail source={ require('./assets/images/h3.png') } />{'\n'}Withdraw</Text>
              </Col>
            </Grid>
          </View>
          <View style={[styles.row, { padding: 7}]}>
            <Icon type='Foundation' style={{ color : 'white',
                fontSize: 18,
                position: 'absolute',
                left: 17,
                top: 7
            }} name='crown' />
            <Text style={{ color : 'white', marginLeft: 30 }}>
              <Text>BTC 24h Volume Top</Text>
            </Text>
              <Icon type='SimpleLineIcons' style={{ color: '#999', 
                fontSize: 13,
                textAlign : 'right',
                position: 'absolute',
                right: 17,
                top: 10
              }} 
              name='arrow-right' />            
          </View>
          <View style={{ backgroundColor : '#1f2833', }}>
            <Grid style={[styles.hTable, {padding : 10}]}>
              <Col><Text style={[styles.hTableCol, {textAlign:'left'}]}>Pair</Text></Col>
              <Col><Text style={[styles.hTableCol, {textAlign:'center'}]}>Last Price</Text></Col>
              <Col><Text style={[styles.hTableCol, {textAlign:'right'}]}>Volume(BTC)</Text></Col>
            </Grid>
            <Grid style={[styles.hTable, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>EOS<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : 'green',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 45.122</Text>
                </Col>
            </Grid>
            <Grid style={[styles.hTable, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>IOTX<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : 'red',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 4.120</Text>
                </Col>
            </Grid>
            <Grid style={[styles.hTable, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>ETH<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : 'green',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 15.508</Text>
                </Col>
            </Grid>
            <Grid style={[styles.hTable, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>ONT<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : 'white',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 12.208</Text>
                </Col>
            </Grid>
            <Grid style={[styles.hTable, {padding: 10}]}>
                <Col>
                  <Text style={styles.textH}>TRX<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {color : 'green',}]}>0,0016082</Text>
                </Col>
                <Col>
                  <Text style={[styles.textH, {textAlign: 'right'}]}> 5.502</Text>
                </Col>
            </Grid>
          </View>
          <Tabs locked>
            <Tab
             tabStyle={{ backgroundColor: '#1f2833' }}
             activeTextStyle={{ color: 'yellow' }}
             style={{ backgroundColor: '#1f2833' }} heading={
              <TabHeading style={{ backgroundColor: '#1f2833' }}
                activeTextStyle={{ color:'yellow' }}
              >
                <Icon name='line-chart' type='FontAwesome'></Icon><Text> Gainers</Text>
              </TabHeading>
            }>
              <View style={{ backgroundColor : '#1f2833', }}>
                <Grid style={[styles.hTable, {padding : 10}]}>
                  <Col><Text style={[styles.hTableCol, {textAlign:'left'}]}>Pair</Text></Col>
                  <Col><Text style={[styles.hTableCol, {textAlign:'center'}]}>Last Price</Text></Col>
                  <Col><Text style={[styles.hTableCol, {textAlign:'right'}]}>Volume(BTC)</Text></Col>
                </Grid>
                <Grid style={[styles.hTable, {padding: 10}]}>
                    <Col>
                      <Text style={styles.textH}>THETA<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                    </Col>
                    <Col>
                      <Text style={[styles.textH, {color : 'white',}]}>0,0016082</Text>
                    </Col>
                    <Col>
                      <Button success style={{ paddingLeft: 10,paddingRight: 10, alignSelf:'center' }}>
                        <Text style={[styles.textH,{textAlign: 'center'}]}> +17.62%</Text>
                      </Button>
                    </Col>
                </Grid>
                <Grid style={[styles.hTable, {padding: 10}]}>
                    <Col>
                      <Text style={styles.textH}>GVT<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                    </Col>
                    <Col>
                      <Text style={[styles.textH, {color : 'red',}]}>0,0016082</Text>
                    </Col>
                    <Col>
                      <Button success style={{ paddingLeft: 10,paddingRight: 10, alignSelf:'center' }}>
                        <Text style={[styles.textH,{textAlign: 'center'}]}> +17.62%</Text>
                      </Button>
                    </Col>
                </Grid>
                <Grid style={[styles.hTable, {padding: 10}]}>
                    <Col>
                      <Text style={styles.textH}>MDA<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                    </Col>
                    <Col>
                      <Text style={[styles.textH, {color : 'red',}]}>0,0016082</Text>
                    </Col>
                    <Col>
                      <Button success style={{ paddingLeft: 10,paddingRight: 10, alignSelf:'center' }}>
                        <Text style={[styles.textH,{textAlign: 'center'}]}> +17.62%</Text>
                      </Button>
                    </Col>
                </Grid>
                <Grid style={[styles.hTable, {padding: 10}]}>
                    <Col>
                      <Text style={styles.textH}>KNC<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                    </Col>
                    <Col>
                      <Text style={[styles.textH, {color : 'green',}]}>0,0016082</Text>
                    </Col>
                    <Col>
                      <Button success style={{ paddingLeft: 10,paddingRight: 10, alignSelf:'center' }}>
                        <Text style={[styles.textH,{textAlign: 'center'}]}> +17.62%</Text>
                      </Button>
                    </Col>
                </Grid>
                <Grid style={[styles.hTable, {padding: 10}]}>
                    <Col>
                      <Text style={styles.textH}>STORJ<Text style={{ fontSize:  12, color : '#444', fontWeight: 'normal' }}> / BTC</Text></Text>
                    </Col>
                    <Col>
                      <Text style={[styles.textH, {color : 'green',}]}>0,0016082</Text>
                    </Col>
                    <Col>
                      <Button success style={{ paddingLeft: 10,paddingRight: 10, alignSelf:'center' }}>
                        <Text style={[styles.textH,{textAlign: 'center'}]}> +17.62%</Text>
                      </Button>
                    </Col>
                </Grid>
              </View>
            </Tab>
            <Tab
             tabStyle={{ backgroundColor: '#1f2833' }}
             activeTextStyle={{ backgroundColor: 'yellow' }}
             style={{ backgroundColor: '#1f2833' }} heading={
              <TabHeading style={{ backgroundColor: '#1f2833' }}>
                <Icon name='line-graph' type='Entypo'></Icon><Text> Losers</Text>
              </TabHeading>
            }>
              <View><Text>asdsa</Text></View>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    )
  }
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#12161c'
  },
  bannerWrapper: {
    height: 200
  },
  banners: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',

  },
  bannerSlide: {
    width: '100%',
    height: 200,
  },
  timeline: {
    height: 150,
    backgroundColor: '#1f2833',
    width: '100%'
  },
  timelineWrapper: {
    height: 135,
    backgroundColor : '#1f2833',
    marginBottom: 5
  },
  timelineGrid: {
    borderRightWidth: 1,
    borderRightColor: '#313d46',
    marginTop : 25,
    marginBottom : 40,
    
  },
  annoucmentWrapper: {
    height: 30,
    flex: 1,
    marginTop: 2,
  },
  annoucmentItem: {
    flex: 1,
    width: '100%',
    height: 30,
    fontSize: 14,
  },
  hTable: {
    backgroundColor: '#1a212a'
  },
  hTableCol: {
    textAlign: 'center',
    color : '#444'
  },
  textH: {
    color : 'white',
    fontWeight: 'bold', 
    fontSize: 16,
  },
  row: {
    backgroundColor : '#1f2833',
    paddingLeft: 17,
    paddingRight: 17,
    marginTop: 5,
  }
})