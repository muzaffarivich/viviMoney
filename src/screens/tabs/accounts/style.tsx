import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/color';
import {windowHeight, windowWidth} from '../../../constants/size';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  inner: {},
  searchBox: {
    marginTop: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameBox: {
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 30,
  },
  nameBoxDollar: {
    fontSize: 24,
    paddingHorizontal: 2,
  },
  nameBoxText: {
    fontSize: 24,
    fontWeight: '500',
    paddingRight: 10,
    color: colors.white,
  },
  accountCard: {
    height: 200,
    marginVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    width: windowWidth - 40,
  },
  graphChief: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  graphBox: {
    width: 170,
    height: 56,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lingthBlack,
  },
  graphTex: {
    fontSize: 15,
    paddingLeft: 10,
    fontWeight: '600',
  },
  transaction: {
    marginTop: 20,
    width: windowWidth,
    height: windowHeight,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.white,
  },
});

export default styles;
