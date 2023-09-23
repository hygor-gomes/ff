import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300',
    date: '17/09/2023',
    type: 0,
  },
  {
    id: 2,
    label: 'Pix cliente',
    value: '2500',
    date: '17/09/2023',
    type: 1,
  },
  {
    id: 3,
    label: 'Salário',
    value: '7500,00',
    date: '17/09/2023',
    type: 0,
  }
]

export default function Home() {
  return (

  <View>

    <View style={styles.container}>
      <Header name="Raigor"/>
      <Balance saldo="9.250,00" gastos="-527,00"/>

      <Actions/>

      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} />}
        />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',   
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
