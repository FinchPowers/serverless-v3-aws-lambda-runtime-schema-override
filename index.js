const DEFAULT_RUNTIMES = [
  'dotnet6',
  'go1.x',
  'java11',
  'java17',
  'java21',
  'java8',
  'java8.al2',
  'nodejs14.x',
  'nodejs16.x',
  'nodejs18.x',
  'nodejs20.x',
  'provided',
  'provided.al2',
  'provided.al2023',
  'python3.10',
  'python3.11',
  'python3.12',
  'python3.7',
  'python3.8',
  'python3.9',
  'ruby2.7',
  'ruby3.2',
];

class ServerlessV3AwsLambdaRuntimeSchemaOverride {
  constructor(serverless, cliOptions, v3Utils) {
    //configValidationMode
    serverless.configSchemaHandler.schema.definitions.awsLambdaRuntime.enum =
      serverless.service.custom?.awsLambdaRuntimeSchemaOverride ?
      serverless.service.custom.awsLambdaRuntimeSchemaOverride :
      DEFAULT_RUNTIMES;
  }
}

module.exports = ServerlessV3AwsLambdaRuntimeSchemaOverride;
