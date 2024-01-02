import AsyncStorage from "@react-native-async-storage/async-storage";

export const GROUP_COLLECTION = '@ignite-teams:groups';

export async function groupCreate(newGroup: string) {
    try {
        await AsyncStorage.setItem(GROUP_COLLECTION, newGroup);
    } catch(error) {
        throw error;
    }
}