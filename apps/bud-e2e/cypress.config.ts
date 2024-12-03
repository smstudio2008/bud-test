import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run bud:serve:development',
        production: 'nx run bud:serve:production',
      },
      ciWebServerCommand: 'nx run bud:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
