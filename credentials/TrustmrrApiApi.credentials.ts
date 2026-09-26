import { type IAuthenticateGeneric, type Icon, type ICredentialTestRequest, type ICredentialType, type INodeProperties } from "n8n-workflow";

// Generated with ts-morph
export class TrustmrrApiApi implements ICredentialType {
  name = "trustmrrApiApi";
  displayName = "TrustMRR API";
  documentationUrl = "https://nativeship.io/nodes/@nativeship/n8n-nodes-trustmrr";
  icon: Icon = {
        light: "file:../nodes/TrustmrrApi/trustmrrApi.svg",
        dark: "file:../nodes/TrustmrrApi/trustmrrApi.dark.svg"
    };
  properties: INodeProperties[] = [
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
  authenticate: IAuthenticateGeneric = {
        type: "generic",
        properties: {
            headers: {
                Authorization: "=Bearer {{$credentials.secret}}"
            }
        }
    };
  test: ICredentialTestRequest = {
        request: {
            baseURL: "https://trustmrr.com/api/v1",
            url: "/startups"
        }
    };
}
