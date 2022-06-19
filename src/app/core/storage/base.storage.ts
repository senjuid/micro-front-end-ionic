import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';


interface PreferenceSpec {
  key: string;
}

export enum Preference {
  Auth,
  Saas,
  CompanySetting,
  TokenNotification,
  Language,
  GDCheckRoot,
  GDWhiteListPackage,
  GDAttWorkLocation,
  NavParams,
  GDAttendanceOffline,
  GDError,
  GDGuideMenu,
  GDOnWebView,
  GDSwitchAccountList,
  GDSwitchAccountTemp,
  Polling,
  GDMenu,
  GDToken,
  GDFavoriteMenu,
  AppMode,
  GDLogoCompany
}

@Injectable({
  providedIn: 'root'
})
export class BaseStorage {
  private gdPolling = 'polling';

  private getStorageSpec(spec: Preference): PreferenceSpec {
    switch (spec) {
      case Preference.Auth:
        return { key: 'SFGoAuth' };
      case Preference.Saas:
        return { key: 'SFGoStorage' };
      case Preference.CompanySetting:
        return { key: 'GDAttendanceSetting' };
      case Preference.TokenNotification:
        return { key: 'fcmToken' };
      case Preference.Language:
        return { key: 'language' };
      case Preference.GDAttendanceOffline:
        return { key: 'GDAttendanceOffline' };
      case Preference.GDError:
        return { key: 'GDError' };
      case Preference.GDGuideMenu:
        return { key: 'GDGuideMenu' };
      case Preference.GDOnWebView:
        return { key: 'GDOnWebView' };
      case Preference.GDSwitchAccountList:
        return { key: 'GDSwitchAccountList' };
      case Preference.GDSwitchAccountTemp:
        return { key: 'GDSwitchAccountTemp' };
      case Preference.GDCheckRoot:
        return { key: 'GDCheckRoot' };
      case Preference.GDWhiteListPackage:
        return { key: 'whiteListPackage' };
      case Preference.GDAttWorkLocation:
        return { key: 'attWorkLocation' };
      case Preference.Polling:
        return { key: 'polling' };
      case Preference.GDMenu:
        return { key: 'GDMenu' };
      case Preference.GDToken:
        return { key: 'GDToken' };
      case Preference.GDFavoriteMenu:
        return { key: 'GDFavoriteMenu' };
      case Preference.AppMode:
        return { key: 'AppMode' };
      case Preference.GDLogoCompany:
        return { key: 'GDLogoCompany' };
    }
  }

  async getGreatdayStorage<T>(spec: Preference): Promise<T> {
    const storageSpect = this.getStorageSpec(spec);
    const { value } = await Storage.get({ key: storageSpect.key });
    return JSON.parse(value) as T;
  }

  async setGreatdayStorage(spec: Preference, value: any) {
    return await Storage.set({
      key: this.getStorageSpec(spec).key,
      value: JSON.stringify(value)
    });
  }

  async getGreatdayDynamicStorage<T>(storageName: string): Promise<T> {
    const { value } = await Storage.get({ key: storageName, });
    return JSON.parse(value) as T;
  }

  async setGreatdayDynamicStorage(storageName: string, value: any) {
    await Storage.set({
      key: storageName,
      value: JSON.stringify(value)
    });
  }

  async removeGreatdayStorage(spec: Preference) {
    return await Storage.remove({
      key: this.getStorageSpec(spec).key
    });

  }

  async removeGreatdayDynamicStorage(storageName: string) {
    await Storage.remove({
      key: storageName
    });
  }

  async clearGreatdayStorage() {
    try {
      const guide = await this.getGreatdayStorage(Preference.GDGuideMenu);
      const switchAccountList = await this.getGreatdayStorage(Preference.GDSwitchAccountList);
      const switchAccountTemp = await this.getGreatdayStorage(Preference.GDSwitchAccountTemp);

      // clear all storage data
      await Storage.clear();

      // re-save
      await this.setGreatdayStorage(Preference.GDGuideMenu, guide);
      await this.setGreatdayStorage(Preference.GDSwitchAccountList, switchAccountList);
      await this.setGreatdayStorage(Preference.GDSwitchAccountTemp, switchAccountTemp);

      return true;
    } catch (error) {
      return false;
    }
  }

  getPolling(): Promise<any> {
    return new Promise(async resolve => {
      try {
        // await Storage.ready();
        const auth = await Storage.get({ key: this.gdPolling });
        resolve(auth);
      } catch (error) {
        resolve(null);
      }
    });
  }

  setPolling(data: any): Promise<any> {
    return new Promise(async resolve => {
      try {
        // await Storage.ready();
        await Storage.set({ key: this.gdPolling, value: JSON.stringify(data) });
        resolve(true);
      } catch (error) {
        resolve(null);
      }
    });
  }

}
