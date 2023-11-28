import { AppModule } from './app/AppModule';
import { platformBrowserDynamic } from './main';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
