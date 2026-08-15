import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.barino.app',
  appName: 'بارینو',
  server: {
    url: 'http://10.0.2.2:3001',
    cleartext: true
  }
};

export default config;
