import { enablePromise, openDatabase } from 'react-native-sqlite-storage';
import { DATABASE_LOCATION, DATABASE_NAME } from '@app/constants';

enablePromise(true);

export const connect = async () => {
  globalThis.database = await openDatabase({
    name: DATABASE_NAME,
    location: DATABASE_LOCATION,
  });
};

export const disconnect = async () => {
  await globalThis.database.close();
};

export const migrate = async () => {};

export const generate = async () => {};
