import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const DATA = [
  {
    id: '1',
    name: 'Túi giấy đựng bánh mì',
    shop: 'Shop Dương',
    image: require('./assets/screen1.jpg'),
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI...',
    shop: 'Shop LT Food',
    image: require('./assets/screen2.jpg'),
  },
  {
    id: '3',
    name: 'Xe cần câu đa năng',
    shop: 'Thế giới đồ chơi',
    image: require('./assets/screen3.png'),
  },
  {
    id: '4',
    name: 'Đồ chơi dân gian',
    shop: 'Thế giới đồ chơi',
    image: require('./assets/screen4.jpg'),
  },
  {
    id: '5',
    name: 'Linh dương dẻo',
    shop: 'Shop Minh Long Book',
    image: require('./assets/screen5.png'),
  },
  {
    id: '6',
    name: 'Hiệu lồng con trẻ',
    shop: 'Shop Minh Long Book',
    image: require('./assets/screen6.png'),
  },
  {
    id: '7',
    name: 'Đồ chơi trẻ em',
    shop: 'Shop Minh Long Book',
    image: require('./assets/screen7.jpg'),
  },
];

const ProductItem = ({ item }) => {
  const handleChat = () => {
    console.log('Chat với:', item.shop);
  };

  return (
    <View style={styles.item}>
      <Image
        source={item.image}
        style={styles.productImage}
      />

      <View style={styles.info}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>

        <Text style={styles.shopName} numberOfLines={1}>
          {item.shop}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.chatButton}
        onPress={handleChat}
        activeOpacity={0.7}
      >
        <Text style={styles.chatText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => console.log('Back')}
        >
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Chat</Text>

        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => console.log('Cart')}
        >
          <Text style={styles.cart}>🛒</Text>
        </TouchableOpacity>
      </View>

      {/* Nội dung */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Bạn có thể mặc với sản phẩm vừa xem. Dùng ngay chat với shop!
        </Text>

        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductItem item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Text style={styles.bottomIcon}>☰</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.bottomIcon}>⌂</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.bottomIcon}>↩</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  // HEADER
  header: {
    height: 50,
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  back: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 36,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  cart: {
    fontSize: 20,
  },

  // CONTENT
  content: {
    flex: 1,
    backgroundColor: '#eee',
  },

  description: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 9,
    fontSize: 11,
    color: '#555',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  list: {
    paddingHorizontal: 6,
    paddingTop: 4,
    paddingBottom: 5,
  },

  // ITEM
  item: {
    minHeight: 72,
    backgroundColor: '#fff',
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
  },

  productImage: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    marginRight: 8,
  },

  info: {
    flex: 1,
    justifyContent: 'center',
    minWidth: 0,
  },

  productName: {
    fontSize: 11,
    color: '#333',
    marginBottom: 6,
  },

  shopName: {
    fontSize: 10,
    color: '#777',
  },

  chatButton: {
    width: 48,
    height: 28,
    backgroundColor: '#ff1f1f',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    borderRadius: 2,
  },

  chatText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
  },

  // BOTTOM
  bottomBar: {
    height: 45,
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },

  bottomIcon: {
    color: '#064b8f',
    fontSize: 24,
  },
});