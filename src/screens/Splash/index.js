import React, { useEffect } from 'react'

import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import Icon from './../../components/Icon'

import { styles } from './styles'

export default (props) => {

    useEffect(() => { 
        return props.navigation.addListener('focus', () => {
            setTimeout(() => {
                props.navigation.navigate('Home')
            }, 2000)
        });
      }, [props.navigation]);

    return ( 
        <LinearGradient start={{x: 0.4, y: 0.6}} end={{x: 1, y: 1}} style={styles.container} colors={['#D51D58', '#A70045']}>
            <Animatable.View animation="pulse" iterationCount="infinite" >
                <Icon icon="logo" width={210} height={177} />
            </Animatable.View>
        </LinearGradient>
    )
}