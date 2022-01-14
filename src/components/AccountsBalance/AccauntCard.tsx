import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/color';
import LinearGradient from 'react-native-linear-gradient';
import {windowWidth} from '../../constants/size';
import {
  ArrowDownIcon,
  RightArrowIcon,
  RoundsIcon,
  SendIcon,
} from '../../assets/icon/icon';

const AccauntCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardBox}>
        <LinearGradient
          style={styles.linerGradient}
          colors={['#E7F44A', '#E1FC52']}>
          <View style={styles.box}>
            <View style={styles.cardBoxNumber}>
              <View style={styles.numberBox}>
                <Text style={styles.numberOne}>$680</Text>
                <Text style={styles.numberTwo}>.02</Text>
              </View>
              <View style={styles.detailsBox}>
                <Text style={styles.detailsText}>Details</Text>
                <ArrowDownIcon size={35} color="#E1FC52" />
              </View>
            </View>
            <Text style={styles.boxText}>Available Balance</Text>
            <View style={styles.head}></View>
            <View style={styles.bottomBox}>
              <View style={styles.transferBox}>
                <SendIcon />
                <Text style={styles.bottomText}>Transfer</Text>
              </View>
              <View style={styles.transferBox}>
                <RightArrowIcon size={22} />
                <Text style={styles.bottomText}>Pay</Text>
              </View>
              <View></View>
              <RoundsIcon />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default AccauntCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardBox: {
    height: 200,
    marginHorizontal: 20,
    width: windowWidth - 40,
  },
  linerGradient: {
    flex: 1,
    borderRadius: 10,
  },
  box: {
    flex: 1,
    marginVertical: 20,
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  cardBoxNumber: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberBox: {
    flexDirection: 'row',
  },
  numberOne: {
    fontSize: 32,
    fontWeight: '500',
    color: colors.black,
  },
  numberTwo: {
    opacity: 0.64,
    fontSize: 20,
    paddingTop: 14,
    fontWeight: '500',
    color: colors.lengthBlack,
  },
  boxText: {
    fontSize: 13,
    opacity: 0.64,
    fontWeight: '500',
    lineHeight: 13,
    color: colors.lengthBlack,
  },
  detailsBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailsText: {
    fontSize: 13,
    fontWeight: '500',
    opacity: 0.64,
    color: colors.lengthBlack,
  },
  bottomBox: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transferBox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomText: {
    fontSize: 13,
    fontWeight: '600',
    paddingHorizontal: 5,
    color: colors.lengthBlack,
  },
  head: {
    height: 50,
  },
});
