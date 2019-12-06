// Trying to implement the AWS S3 bucket to upload and list all the files into the app
/*
const AWS = require('aws-sdk');
const Busboy = require('busboy');

const BUCKET_NAME = 'books-elibrary';
const IAM_USER_KEY = '';
const IAM_USER_SECRET = '';

(asycn function() {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: config.aws.accessKey,
            secretAccessKey: config.aws.secretKey,
            region: 'us-east-1'
        });
        const s3 = new aws.S3();
        const response = await s3.listObjectsV2({
            Bucket: 'books-elibrary'
        });
        console.log(response);
    }

    catch(e) {
        console.log('Theres an error', e);
    }

    debugger;
})();

function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    Bucket: BUCKET_NAME
  });
  s3bucket.createBucket(function () {
      var params = {
        Bucket: BUCKET_NAME,
        Key: file.name,
        Body: file.data
      };
      s3bucket.upload(params, function (err, data) {
        if (err) {
          console.log('error in callback');
          console.log(err);
        }
        console.log('success');
        console.log(data);
      });
  });
}
*/