import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'


const HomeSearch = (props) => {
    return (
      <View>
          {/* input box */}
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>
          

           <View style={styles.timeContainer}>
            <AntDesign name={'clockcircle'} size={16} color={'#535353'}/>
            <Text>Now</Text>
            <MaterialIcons name={'keyboard-arrow-down'} size={16}></MaterialIcons>
          </View>

         </View>

          {/* previous destination */}
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <AntDesign name={'clockcircle'} size={16} color={'#ffffff'}/>
            </View>
            <Text style={styles.destinationText}>Spin NightClub</Text>
          </View>

          {/* Home destination */}
          <View style={styles.row}>
            <View style={[styles.iconContainer, {backgroundColor: '#218CFF'}]}>
              <Entypo name={'home'} size={16} color={'#ffffff'}/>
            </View>
            <Text style={styles.destinationText}>Spin NightClub</Text>
          </View>


      </View>
    );
};

export default HomeSearch;