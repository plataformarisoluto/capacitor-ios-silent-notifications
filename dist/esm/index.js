import { registerPlugin } from '@capacitor/core';
// eslint-disable-next-line @typescript-eslint/naming-convention
export const IosSilentNotifications = registerPlugin('IosSilentNotifications', {
    web: async () => import('./plugin').then((module) => new module.IosSilentNotifications()),
    ios: async () => import('./plugin').then((module) => new module.IosSilentNotifications()),
    android: async () => import('./plugin').then((module) => new module.IosSilentNotifications()),
});
