import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from './main';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
