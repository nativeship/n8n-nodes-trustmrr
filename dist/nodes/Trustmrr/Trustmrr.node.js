"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trustmrr = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class Trustmrr {
    constructor() {
        this.description = {
            displayName: "TrustMRR",
            name: "trustmrr",
            icon: {
                light: "file:trustmrr.svg",
                dark: "file:trustmrr.dark.svg"
            },
            group: [],
            version: [
                1
            ],
            subtitle: "={{((JSON.parse(\"{\\\"startups\\\":{\\\"getStartup\\\":\\\"getStartup: startup\\\",\\\"listStartups\\\":\\\"getManyStartups: startup\\\"}}\"))[$parameter[\"resource\"]] || {})[$parameter[\"operation\"]] || ($parameter[\"operation\"] + \": \" + $parameter[\"resource\"])}}",
            description: "Access verified startup revenue, MRR, growth metrics, and acquisition listings from TrustMRR",
            documentationUrl: "https://trustmrr.com/docs/api",
            hints: [
                {
                    message: "Operation \"listStartups\" looks paginated, but no explicit safe Pagination Contract is available. The generated operation remains single-page until an explicit bounded Pagination Contract is provided.",
                    type: "warning",
                    location: "inputPane",
                    whenToDisplay: "always"
                }
            ],
            defaults: {
                name: "TrustMRR"
            },
            usableAsTool: true,
            inputs: [
                n8n_workflow_1.NodeConnectionTypes.Main
            ],
            outputs: [
                n8n_workflow_1.NodeConnectionTypes.Main
            ],
            credentials: [
                {
                    name: "trustmrrApi",
                    required: true
                }
            ],
            requestDefaults: {
                baseURL: "https://trustmrr.com/api/v1",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            },
            properties: [
                {
                    displayName: "Resource",
                    name: "resource",
                    type: "options",
                    noDataExpression: true,
                    default: "startups",
                    options: [
                        {
                            name: "Startup",
                            value: "startups"
                        }
                    ]
                },
                {
                    displayName: "Operation",
                    name: "operation",
                    type: "options",
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                "startups"
                            ]
                        }
                    },
                    default: "getStartup",
                    options: [
                        {
                            name: "Get",
                            value: "getStartup",
                            action: "Get startup",
                            description: "Retrieves full profile details, tech stack, co-founders, and insights for a specific startup by slug",
                            routing: {
                                request: {
                                    method: "GET",
                                    url: "=/startups/{{$parameter[\"slug\"]}}"
                                }
                            }
                        },
                        {
                            name: "Get Many",
                            value: "listStartups",
                            action: "Get many startups",
                            description: "Returns a paginated list of startups with verifieretrieves a paginated list of startups with verified revenue, growth, and listing filtersd revenue",
                            routing: {
                                request: {
                                    method: "GET",
                                    url: "=/startups"
                                }
                            }
                        }
                    ]
                },
                {
                    displayName: "Slug",
                    name: "slug",
                    type: "string",
                    default: "",
                    required: true,
                    description: "URL-friendly startup identifier from the list endpoint",
                    displayOptions: {
                        show: {
                            resource: [
                                "startups"
                            ],
                            operation: [
                                "getStartup"
                            ]
                        }
                    }
                },
                {
                    displayName: "Additional Fields",
                    name: "additionalFields",
                    type: "collection",
                    placeholder: "Add Field",
                    default: {},
                    displayOptions: {
                        show: {
                            resource: [
                                "startups"
                            ],
                            operation: [
                                "listStartups"
                            ]
                        }
                    },
                    options: [
                        {
                            displayName: "Category",
                            name: "category",
                            type: "options",
                            default: "ai",
                            description: "Filter by startup category",
                            options: [
                                {
                                    name: "Ai",
                                    value: "ai"
                                },
                                {
                                    name: "Analytics",
                                    value: "analytics"
                                },
                                {
                                    name: "Community",
                                    value: "community"
                                },
                                {
                                    name: "Content Creation",
                                    value: "content-creation"
                                },
                                {
                                    name: "Crypto Web3",
                                    value: "crypto-web3"
                                },
                                {
                                    name: "Customer Support",
                                    value: "customer-support"
                                },
                                {
                                    name: "Design Tools",
                                    value: "design-tools"
                                },
                                {
                                    name: "Developer Tools",
                                    value: "developer-tools"
                                },
                                {
                                    name: "Ecommerce",
                                    value: "ecommerce"
                                },
                                {
                                    name: "Education",
                                    value: "education"
                                },
                                {
                                    name: "Entertainment",
                                    value: "entertainment"
                                },
                                {
                                    name: "Fintech",
                                    value: "fintech"
                                },
                                {
                                    name: "Games",
                                    value: "games"
                                },
                                {
                                    name: "Green Tech",
                                    value: "green-tech"
                                },
                                {
                                    name: "Health Fitness",
                                    value: "health-fitness"
                                },
                                {
                                    name: "Iot Hardware",
                                    value: "iot-hardware"
                                },
                                {
                                    name: "Legal",
                                    value: "legal"
                                },
                                {
                                    name: "Marketing",
                                    value: "marketing"
                                },
                                {
                                    name: "Marketplace",
                                    value: "marketplace"
                                },
                                {
                                    name: "Mobile Apps",
                                    value: "mobile-apps"
                                },
                                {
                                    name: "News Magazines",
                                    value: "news-magazines"
                                },
                                {
                                    name: "No Code",
                                    value: "no-code"
                                },
                                {
                                    name: "Productivity",
                                    value: "productivity"
                                },
                                {
                                    name: "Real Estate",
                                    value: "real-estate"
                                },
                                {
                                    name: "Recruiting",
                                    value: "recruiting"
                                },
                                {
                                    name: "Saas",
                                    value: "saas"
                                },
                                {
                                    name: "Sales",
                                    value: "sales"
                                },
                                {
                                    name: "Security",
                                    value: "security"
                                },
                                {
                                    name: "Social Media",
                                    value: "social-media"
                                },
                                {
                                    name: "Travel",
                                    value: "travel"
                                },
                                {
                                    name: "Utilities",
                                    value: "utilities"
                                }
                            ],
                            routing: {
                                send: {
                                    type: "query",
                                    property: "category"
                                }
                            }
                        },
                        {
                            displayName: "Funding Status",
                            name: "fundingStatus",
                            type: "options",
                            default: "bootstrapped",
                            description: "Filter by funding type; startups without a known status are excluded",
                            options: [
                                {
                                    name: "Bootstrapped",
                                    value: "bootstrapped"
                                },
                                {
                                    name: "Vc Funded",
                                    value: "vc-funded"
                                }
                            ],
                            routing: {
                                send: {
                                    type: "query",
                                    property: "fundingStatus"
                                }
                            }
                        },
                        {
                            displayName: "Limit",
                            name: "limit",
                            type: "number",
                            default: 50,
                            description: "Max number of results to return",
                            typeOptions: {
                                minValue: 1
                            },
                            routing: {
                                send: {
                                    type: "query",
                                    property: "limit"
                                }
                            }
                        },
                        {
                            displayName: "Max Growth",
                            name: "maxGrowth",
                            type: "number",
                            default: 0,
                            description: "Maximum 30-day revenue growth as a decimal; 0.5 means 50% growth",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "maxGrowth"
                                }
                            }
                        },
                        {
                            displayName: "Max Mrr",
                            name: "maxMrr",
                            type: "number",
                            default: 0,
                            description: "Maximum monthly recurring revenue in usd cents",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "maxMrr"
                                }
                            }
                        },
                        {
                            displayName: "Max Price",
                            name: "maxPrice",
                            type: "number",
                            default: 0,
                            description: "Maximum asking price in usd cents",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "maxPrice"
                                }
                            }
                        },
                        {
                            displayName: "Max Revenue",
                            name: "maxRevenue",
                            type: "number",
                            default: 0,
                            description: "Maximum last-30-days revenue in usd cents",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "maxRevenue"
                                }
                            }
                        },
                        {
                            displayName: "Min Growth",
                            name: "minGrowth",
                            type: "number",
                            default: 0,
                            description: "Minimum 30-day revenue growth as a decimal; 0.1 means 10% growth",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "minGrowth"
                                }
                            }
                        },
                        {
                            displayName: "Min Mrr",
                            name: "minMrr",
                            type: "number",
                            default: 0,
                            description: "Minimum monthly recurring revenue in usd cents",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "minMrr"
                                }
                            }
                        },
                        {
                            displayName: "Min Price",
                            name: "minPrice",
                            type: "number",
                            default: 0,
                            description: "Minimum asking price in usd cents",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "minPrice"
                                }
                            }
                        },
                        {
                            displayName: "Min Revenue",
                            name: "minRevenue",
                            type: "number",
                            default: 0,
                            description: "Minimum last-30-days revenue in usd cents",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "minRevenue"
                                }
                            }
                        },
                        {
                            displayName: "On Sale",
                            name: "onSale",
                            type: "boolean",
                            default: false,
                            description: "Whether filter by sale status; omit to include both listed and unlisted startups",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "onSale"
                                }
                            }
                        },
                        {
                            displayName: "Page",
                            name: "page",
                            type: "number",
                            default: 1,
                            description: "One-based page number. no overall record-count ceiling is documented.",
                            typeOptions: {
                                minValue: 1
                            },
                            routing: {
                                send: {
                                    type: "query",
                                    property: "page"
                                }
                            }
                        },
                        {
                            displayName: "Sort",
                            name: "sort",
                            type: "options",
                            default: "revenue-desc",
                            description: "Sort order. defaults to revenue-desc, or best-deal when onsale=true.",
                            options: [
                                {
                                    name: "Best Deal",
                                    value: "best-deal"
                                },
                                {
                                    name: "Growth Asc",
                                    value: "growth-asc"
                                },
                                {
                                    name: "Growth Desc",
                                    value: "growth-desc"
                                },
                                {
                                    name: "Listed Asc",
                                    value: "listed-asc"
                                },
                                {
                                    name: "Listed Desc",
                                    value: "listed-desc"
                                },
                                {
                                    name: "Multiple Asc",
                                    value: "multiple-asc"
                                },
                                {
                                    name: "Multiple Desc",
                                    value: "multiple-desc"
                                },
                                {
                                    name: "Price Asc",
                                    value: "price-asc"
                                },
                                {
                                    name: "Price Desc",
                                    value: "price-desc"
                                },
                                {
                                    name: "Revenue Asc",
                                    value: "revenue-asc"
                                },
                                {
                                    name: "Revenue Desc",
                                    value: "revenue-desc"
                                }
                            ],
                            routing: {
                                send: {
                                    type: "query",
                                    property: "sort"
                                }
                            }
                        },
                        {
                            displayName: "Team Size",
                            name: "teamSize",
                            type: "options",
                            default: "1",
                            description: "Founder-provided team-size range. startups without a known team size are excluded. encode 51+ as %2b when constructing a URL manually.",
                            options: [
                                {
                                    name: "1",
                                    value: "1"
                                },
                                {
                                    name: "11 25",
                                    value: "11-25"
                                },
                                {
                                    name: "2 5",
                                    value: "2-5"
                                },
                                {
                                    name: "26 50",
                                    value: "26-50"
                                },
                                {
                                    name: "51+",
                                    value: "51+"
                                },
                                {
                                    name: "6 10",
                                    value: "6-10"
                                }
                            ],
                            routing: {
                                send: {
                                    type: "query",
                                    property: "teamSize"
                                }
                            }
                        },
                        {
                            displayName: "X Handle",
                            name: "xHandle",
                            type: "string",
                            default: "",
                            description: "Filter by the founder's x handle, without the @ symbol",
                            routing: {
                                send: {
                                    type: "query",
                                    property: "xHandle"
                                }
                            }
                        }
                    ]
                }
            ]
        };
    }
}
exports.Trustmrr = Trustmrr;
//# sourceMappingURL=Trustmrr.node.js.map