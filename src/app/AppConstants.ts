import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export class AppConstants {
    
    public static get defaultLogin(): any {
        return {
            "Email": "test@email.com",
            "Pass": "123456",
        }
    }

}