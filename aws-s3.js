require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const fileName = 'DSCN0747.JPG';
const fileName2 = 'DSCN0821.JPG';
const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: process.env.BUCKET, // pass your bucket name
         Key: 'DSCN0747.JPG', // file will be saved as testBucket/contacts.csv
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
//   fs.readFile(fileName2, (err, data) => {
//     if (err) throw err;
//     const params = {
//         Bucket: process.env.BUCKET, // pass your bucket name
//         Key: 'DSCN0821.JPG', // file will be saved as testBucket/contacts.csv
//         Body: JSON.stringify(data, null, 2)
//     };
//     s3.upload(params, function(s3Err, data) {
//         if (s3Err) throw s3Err
//         console.log(`File uploaded successfully at ${data.Location}`)
//     });
//  });
};

uploadFile();