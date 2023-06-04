import { enablePromise, openDatabase } from 'react-native-sqlite-storage';

enablePromise(true);

export const connect = async () => {
  globalThis.database = await openDatabase({
    name: 'com.rorazliev.example.app',
    location: 'default',
  });
};

export const disconnect = async () => {
  await globalThis.database.close();
};

export const migrate = async () => {};

export const generate = async () => {};
