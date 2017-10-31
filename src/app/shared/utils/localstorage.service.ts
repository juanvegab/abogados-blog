/**
 * TODO: Consider to use LocalForage or a similar library to store the data
 */
import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  /**
   * Save data in localstorage
   * @param name {string} - name of item
   * @param data {any}- Object to be saved
   */
  set(name: string, data: any): void {
    try {
      localStorage.setItem(name, JSON.stringify(data));
    } catch (e) {
      console.error('LocalStorage Service: Item could\'t be saved');
    }
  }

  /**
   * Get value from localstorage
   * @param name {string} - get item from localstorage
   */
  get(name: string): any {
    try {
      const data = localStorage.getItem(name) || '';
      return data && data.length ? JSON.parse(data) : '';
    } catch (e) {
      console.warn('LocalStorage Service: Item not found');
    }
    return null;
  }

  /**
   * Remove item from localstorage
   * @param name {string} - get item from localstorage
   */
  remove(name: string): void {
    try {
      localStorage.removeItem(name);
    } catch (e) {
      console.error('LocalStorage Service: Item couldn\'t be removed');
    }
  }

}
