import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new lambda.Function(this, 'cdk02lambda', {
      code: lambda.Code.fromAsset(path.join(__dirname, 'functions')),
      handler: 'hello.handler',
      runtime: lambda.Runtime.NODEJS_12_X,
    });
  }
}
