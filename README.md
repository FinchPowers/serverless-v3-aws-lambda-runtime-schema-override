# serverless-v3-aws-lambda-runtime-schema-override

This is a plugin to override the default schema of the AWS Lambda runtime in the Serverless
Framework v3. Since version 3 is unmaintained, this plugin can be used to circumvent the lack of
updates to the runtime schema while keeping `configValidationMode` set to `error`.

This can be done by simply installing this plugin and adding it to the list of plugins to use in the
serverless configuration.

```yml
plugins:
  - serverless-v3-aws-lambda-runtime-schema-override
```

At the time of writing, this pluging has the currently supported runtimes baked in. Should it fall
behind, it can still be used to manually override the schema by providing a runtimes list under
`custom.awsLambdaRuntimeSchemaOverride`.

```yml
custom:
  awsLambdaRuntimeSchemaOverride:
  - dotnet6
  - go1.x
  - java17
  - java21
  - nodejs18.x
  - nodejs20.x
  - provided
  - provided.al2
  - provided.al2023
  - python3.10
  - python3.11
  - python3.12
  - ruby2.7
  - ruby3.2
```

Note that only the runtimes that are being used need to be included in the list.

# Notes

## `sls invoke local` will not work with non core runtimes.

`sls invoke local` is unaffected by this plugin. This is because the plugin overrides the [runtime
schema](https://github.com/serverless/serverless/blob/ee7fe48457cb3eb28d58b9f0507073ed1679a086/lib/plugins/aws/provider.js#L616),
but the local invocation uses a baked in list that may prove challenging to override. [Here is an
example within serverless
3.38.0](https://github.com/serverless/serverless/blob/de62c71e30855eff688f032ff10b9ad22de13afc/lib/plugins/aws/invoke-local/index.js#L256).
