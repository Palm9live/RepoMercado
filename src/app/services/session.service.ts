import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() {}

  async saveRole(role: string): Promise<void> {

    await Preferences.set({
      key: 'role',
      value: role
    });

  }

  async getRole(): Promise<string | null> {

    const { value } = await Preferences.get({
      key: 'role'
    });

    return value;

  }

  async clearSession(): Promise<void> {

    await Preferences.remove({
      key: 'role'
    });

  }

}
