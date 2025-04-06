import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          drawerType: 'slide', 
          overlayColor: 'transparent',
          drawerStyle: {
            width: 240,
            backgroundColor: 'transparent',
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Home',
            title: 'overview',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="user/[id]"
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}