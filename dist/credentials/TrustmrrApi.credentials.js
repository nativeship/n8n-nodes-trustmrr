"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrustmrrApi = void 0;
class TrustmrrApi {
    constructor() {
        this.name = "trustmrrApi";
        this.displayName = "TrustMRR API";
        this.documentationUrl = "https://nativeship.io/nodes/@nativeship/n8n-nodes-trustmrr";
        this.icon = {
            light: "file:../nodes/Trustmrr/trustmrr.svg",
            dark: "file:../nodes/Trustmrr/trustmrr.dark.svg"
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
exports.TrustmrrApi = TrustmrrApi;
//# sourceMappingURL=TrustmrrApi.credentials.js.map