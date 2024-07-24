import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

const MFE_APP_HIGH_CHART_URL = "http://localhost:4300/remoteEntry.js";
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => {
            return loadRemoteModule({
                remoteEntry: MFE_APP_HIGH_CHART_URL,
                remoteName: "mfeApp",
                exposedModule: "./AppComponent"
            }).then((m) => m.AppComponent).catch(error => console.log('error is ===> ', error));
        }
    }
];
