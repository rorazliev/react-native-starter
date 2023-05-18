import { SQLiteDatabase } from 'react-native-sqlite-storage';
import 'styled-components/native';

declare global {
  var database: SQLiteDatabase;
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
    };
  }
}
