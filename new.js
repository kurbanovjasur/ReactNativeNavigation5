import * as React from 'react';
import {Text, Image, View, StyleSheet,TouchableOpacity, FlatList, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import {AirbnbRating,} from 'react-native-ratings';
import ReadMore from 'react-native-read-more-text';


const AirbnbRatingCustome = ({score}) => {
    return (
        <AirbnbRating
            count={5}
            defaultRating={4}
            size={12}
            showRating={false}
        />
    )
};

const TextGeneral = ({style, title}) => {
    return (
        <Text style={style}>{title}</Text>
    )
};



const DATA = [
    {
        id: 1,
        img: 'https://images.unsplash.com/photo-1542379653-b928db1b4956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
        rating: 4,
        name: 'Jorge Fernández',
        status: 'TAKE ME OUT',
        date: '20.02.2020',
        description:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled'
    },
    {
        id: 2,
        img: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        rating: 0,
        name: 'Sami Takarautio',
        status: 'Adventurer',
        date: '25.02.2020',
        description:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled'
    },
    {
        id: 3,
        img: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        rating: 5,
        name: 'Simon Hernaldo',
        status: 'Adventurer',
        date: '21.02.2020',
        description:
            'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled'
    }
];

const TextVi = ({uri, status, date, rating, name, desc}) => {
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'blue'}}>
                    <Image source={{uri}} style={styles.clientImage}/>
                </View>
                <View style={styles.ratingWithDate}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        backgroundColor: 'pink',
                        justifyContent: 'space-between'
                    }}>
                        <AirbnbRating count={5} defaultRating={rating} size={12} showRating={false}/>
                        <TextGeneral style={styles.clientReviewTime} title={date}/>
                    </View>
                    <View>
                        <TextGeneral style={styles.clientName} title={name}/>
                        <TextGeneral style={styles.clientServiceUse} title={status}/>
                        <ReadMore numberOfLines={3}
                                  renderTruncatedFooter={this._renderTruncatedFooter}
                                  renderRevealedFooter={this._renderRevealedFooter}>
                            <Text numberOfLines={3} style={styles.clientReview}>{desc}</Text>
                        </ReadMore>
                    </View>
                </View>

            </View>
        </View>
    )
};

function Item({ title }) {
    return (
        <TouchableOpacity>
            <Text style={{color:'red'}}>{title}</Text>
        </TouchableOpacity>
    );
}

export default class App extends React.Component {

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{color: 'rgba(34, 34, 34, 0.45)'}} onPress={handlePress}>Читать
                больше</Text>
        );
    };

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{color: 'rgba(34, 34, 34, 0.45)', fontSize: 14}}
                  onPress={handlePress}>Меньше</Text>
        );
    };

    render() {
        return (
            <View style={{marginTop: 50, padding: 20,}}>
                <FlatList
                    data={DATA}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({item}) =>(
                        <TextVi name={item.name}
                                uri={item.img}
                                rating={item.rating}
                                status={item.status}
                                date={item.date}
                                desc={item.description} />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    ratingWithDate: {
        flex: 4,
        backgroundColor: 'green',
        justifyContent: 'space-between'
    },
    clientImage: {
        height: 45,
        width: 45,
        borderRadius: 45 / 2,
        marginRight: 14,
        paddingTop: 24,
    },
    clientName: {
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 20,
        color: '#222222'
    },
    clientServiceUse: {
        fontWeight: "300",
        fontSize: 12,
        lineHeight: 32,
        color: 'rgba(34,34,34,0.45)'
    },
    clientReview: {
        width: '100%',
        fontWeight: "300",
        fontSize: 14,
        lineHeight: 16,
        color: '#222222',
        backgroundColor: 'red'
    }
});
