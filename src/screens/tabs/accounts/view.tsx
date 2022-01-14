import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {
  ArrowRightIcon,
  BudgetingIcon,
  GraphIcon,
  NotificationsIcon,
} from '../../../assets/icon/icon';
import {images} from '../../../assets/images';
import AccauntCard from '../../../components/AccountsBalance/AccauntCard';
import SearchInput from '../../../components/general/Search';
import Transaction from '../../../components/general/Transaction';
import styles from './style';

const Accountsview = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.searchBox}>
            <SearchInput />
            <NotificationsIcon size={32} />
          </View>
          <View style={styles.nameBox}>
            <Image style={styles.image} source={images.girl} />
            <Text style={styles.nameBoxDollar}>$</Text>
            <Text style={styles.nameBoxText}>willcormack</Text>
            <ArrowRightIcon size={30} />
          </View>
          <View style={styles.accountCard}>
            <AccauntCard />
          </View>
          <View style={styles.graphChief}>
            <View style={styles.graphBox}>
              <GraphIcon size={22} />
              <Text style={styles.graphTex}>Analytics</Text>
            </View>
            <View style={styles.graphBox}>
              <BudgetingIcon size={22} />
              <Text style={styles.graphTex}>Budgeting</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.transaction}>
          <Transaction />
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Accountsview;
