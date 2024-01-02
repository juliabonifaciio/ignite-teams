import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupsGetAll() {
  try {
    const storedGroups = await AsyncStorage.getItem(GROUP_COLLECTION);

    if (storedGroups) {
      return JSON.parse(storedGroups);
    } else {
      return []; 
    }
  } catch (error) {
    throw error;
  }
}