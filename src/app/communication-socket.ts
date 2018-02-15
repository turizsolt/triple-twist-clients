import { InjectionToken } from '@angular/core';

export const COMMUNICATION_SOCKET = new InjectionToken<CommunicationSocket>('CommunicationSocket');

export interface CommunicationSocket {
  emit(eventType:string, data: any);
  on(eventType:string, fn:((data:any) => void));
  removeListener(eventType:string, fn?: Function);
}
