export const ruleSet = {
    version: "1.0",
    parameters: {
        Region: {
            builtIn: "AWS::Region",
            required: false,
            documentation: "The AWS region used to dispatch the request.",
            type: "String",
        },
        UseDualStack: {
            builtIn: "AWS::UseDualStack",
            required: true,
            default: false,
            documentation: "When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",
            type: "Boolean",
        },
        UseFIPS: {
            builtIn: "AWS::UseFIPS",
            required: true,
            default: false,
            documentation: "When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",
            type: "Boolean",
        },
        Endpoint: {
            builtIn: "SDK::Endpoint",
            required: false,
            documentation: "Override the endpoint used to send this request",
            type: "String",
        },
        UseGlobalEndpoint: {
            builtIn: "AWS::STS::UseGlobalEndpoint",
            required: true,
            default: false,
            documentation: "Whether the global endpoint should be used, rather then the regional endpoint for us-east-1.",
            type: "Boolean",
        },
    },
    rules: [
        {
            conditions: [
                {
                    fn: "aws.partition",
                    argv: [
                        {
                            ref: "Region",
                        },
                    ],
                    assign: "PartitionResult",
                },
            ],
            type: "tree",
            rules: [
                {
                    conditions: [
                        {
                            fn: "booleanEquals",
                            argv: [
                                {
                                    ref: "UseGlobalEndpoint",
                                },
                                true,
                            ],
                        },
                        {
                            fn: "booleanEquals",
                            argv: [
                                {
                                    ref: "UseFIPS",
                                },
                                false,
                            ],
                        },
                        {
                            fn: "booleanEquals",
                            argv: [
                                {
                                    ref: "UseDualStack",
                                },
                                false,
                            ],
                        },
                        {
                            fn: "not",
                            argv: [
                                {
                                    fn: "isSet",
                                    argv: [
                                        {
                                            ref: "Endpoint",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    type: "tree",
                    rules: [
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "ap-northeast-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "ap-south-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "ap-southeast-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "ap-southeast-2",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "aws-global",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "ca-central-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "eu-central-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "eu-north-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "eu-west-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "eu-west-2",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "eu-west-3",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "sa-east-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "us-east-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "us-east-2",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "us-west-1",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "us-west-2",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [],
                            endpoint: {
                                url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "{Region}",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                    ],
                },
                {
                    conditions: [
                        {
                            fn: "isSet",
                            argv: [
                                {
                                    ref: "Endpoint",
                                },
                            ],
                        },
                        {
                            fn: "parseURL",
                            argv: [
                                {
                                    ref: "Endpoint",
                                },
                            ],
                            assign: "url",
                        },
                    ],
                    type: "tree",
                    rules: [
                        {
                            conditions: [
                                {
                                    fn: "booleanEquals",
                                    argv: [
                                        {
                                            ref: "UseFIPS",
                                        },
                                        true,
                                    ],
                                },
                            ],
                            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
                            type: "error",
                        },
                        {
                            conditions: [],
                            type: "tree",
                            rules: [
                                {
                                    conditions: [
                                        {
                                            fn: "booleanEquals",
                                            argv: [
                                                {
                                                    ref: "UseDualStack",
                                                },
                                                true,
                                            ],
                                        },
                                    ],
                                    error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
                                    type: "error",
                                },
                                {
                                    conditions: [],
                                    endpoint: {
                                        url: {
                                            ref: "Endpoint",
                                        },
                                        properties: {},
                                        headers: {},
                                    },
                                    type: "endpoint",
                                },
                            ],
                        },
                    ],
                },
                {
                    conditions: [
                        {
                            fn: "booleanEquals",
                            argv: [
                                {
                                    ref: "UseFIPS",
                                },
                                true,
                            ],
                        },
                        {
                            fn: "booleanEquals",
                            argv: [
                                {
                                    ref: "UseDualStack",
                                },
                                true,
                            ],
                        },
                    ],
                    type: "tree",
                    rules: [
                        {
                            conditions: [
                                {
                                    fn: "booleanEquals",
                                    argv: [
                                        true,
                                        {
                                            fn: "getAttr",
                                            argv: [
                                                {
                                                    ref: "PartitionResult",
                                                },
                                                "supportsFIPS",
                                            ],
                                        },
                                    ],
                                },
                                {
                                    fn: "booleanEquals",
                                    argv: [
                                        true,
                                        {
                                            fn: "getAttr",
                                            argv: [
                                                {
                                                    ref: "PartitionResult",
                                                },
                                                "supportsDualStack",
                                            ],
                                        },
                                    ],
                                },
                            ],
                            type: "tree",
                            rules: [
                                {
                                    conditions: [],
                                    endpoint: {
                                        url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                        properties: {},
                                        headers: {},
                                    },
                                    type: "endpoint",
                                },
                            ],
                        },
                        {
                            conditions: [],
                            error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                            type: "error",
                        },
                    ],
                },
                {
                    conditions: [
                        {
                            fn: "booleanEquals",
                            argv: [
                                {
                                    ref: "UseFIPS",
                                },
                                true,
                            ],
                        },
                    ],
                    type: "tree",
                    rules: [
                        {
                            conditions: [
                                {
                                    fn: "booleanEquals",
                                    argv: [
                                        true,
                                        {
                                            fn: "getAttr",
                                            argv: [
                                                {
                                                    ref: "PartitionResult",
                                                },
                                                "supportsFIPS",
                                            ],
                                        },
                                    ],
                                },
                            ],
                            type: "tree",
                            rules: [
                                {
                                    conditions: [],
                                    type: "tree",
                                    rules: [
                                        {
                                            conditions: [
                                                {
                                                    fn: "stringEquals",
                                                    argv: [
                                                        "aws-us-gov",
                                                        {
                                                            fn: "getAttr",
                                                            argv: [
                                                                {
                                                                    ref: "PartitionResult",
                                                                },
                                                                "name",
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                            endpoint: {
                                                url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: {},
                                                headers: {},
                                            },
                                            type: "endpoint",
                                        },
                                        {
                                            conditions: [],
                                            endpoint: {
                                                url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}",
                                                properties: {},
                                                headers: {},
                                            },
                                            type: "endpoint",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            conditions: [],
                            error: "FIPS is enabled but this partition does not support FIPS",
                            type: "error",
                        },
                    ],
                },
                {
                    conditions: [
                        {
                            fn: "booleanEquals",
                            argv: [
                                {
                                    ref: "UseDualStack",
                                },
                                true,
                            ],
                        },
                    ],
                    type: "tree",
                    rules: [
                        {
                            conditions: [
                                {
                                    fn: "booleanEquals",
                                    argv: [
                                        true,
                                        {
                                            fn: "getAttr",
                                            argv: [
                                                {
                                                    ref: "PartitionResult",
                                                },
                                                "supportsDualStack",
                                            ],
                                        },
                                    ],
                                },
                            ],
                            type: "tree",
                            rules: [
                                {
                                    conditions: [],
                                    endpoint: {
                                        url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}",
                                        properties: {},
                                        headers: {},
                                    },
                                    type: "endpoint",
                                },
                            ],
                        },
                        {
                            conditions: [],
                            error: "DualStack is enabled but this partition does not support DualStack",
                            type: "error",
                        },
                    ],
                },
                {
                    conditions: [],
                    type: "tree",
                    rules: [
                        {
                            conditions: [
                                {
                                    fn: "stringEquals",
                                    argv: [
                                        {
                                            ref: "Region",
                                        },
                                        "aws-global",
                                    ],
                                },
                            ],
                            endpoint: {
                                url: "https://sts.amazonaws.com",
                                properties: {
                                    authSchemes: [
                                        {
                                            name: "sigv4",
                                            signingName: "sts",
                                            signingRegion: "us-east-1",
                                        },
                                    ],
                                },
                                headers: {},
                            },
                            type: "endpoint",
                        },
                        {
                            conditions: [],
                            endpoint: {
                                url: "https://sts.{Region}.{PartitionResult#dnsSuffix}",
                                properties: {},
                                headers: {},
                            },
                            type: "endpoint",
                        },
                    ],
                },
            ],
        },
    ],
};
