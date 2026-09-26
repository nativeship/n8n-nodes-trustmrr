"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrustmrrApiApi = void 0;
class TrustmrrApiApi {
    constructor() {
        this.name = "trustmrrApiApi";
        this.displayName = "TrustMRR API";
        this.documentationUrl = "https://nativeship.io/nodes/@nativeship/n8n-nodes-trustmrr";
        this.icon = {
            light: "file:../nodes/TrustmrrApi/trustmrrApi.svg",
            dark: "file:../nodes/TrustmrrApi/trustmrrApi.dark.svg"
        };
        this.properties = [
            {
                displayName: "Access Token",
                name: "secret",
                type: "string",
                typeOptions: {
                    password: true
                },
                default: "",
                required: true
            }
        ];
        this.authenticate = {
            type: "generic",
            properties: {
                headers: {
                    Authorization: "=Bearer {{$credentials.secret}}"
                }
            }
        };
        this.test = {
            request: {
                baseURL: "https://trustmrr.com/api/v1",
                url: "/startups"
            }
        };
    }
}
exports.TrustmrrApiApi = TrustmrrApiApi;
//# sourceMappingURL=TrustmrrApiApi.credentials.js.map