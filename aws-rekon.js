//Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//PDX-License-Identifier: MIT-0 (For details, see httgit remote add origin https://github.com/wiichooo/aws-tests.gitps://github.com/awsdocs/amazon-rekognition-developer-guide/blob/master/LICENSE-SAMPLECODE.)
require('dotenv').config();
const AWS = require('aws-sdk')
const bucket = process.env.BUCKET // the bucketname without s3://
const photo  = 'contacts.jpg' // the name of file
//const config = new 
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  //accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION
})
const client = new AWS.Rekognition();
// const params = {
//   Image: {
//     S3Object: {
//       Bucket: bucket,
//       Name: photo
//     },
//   },
//   Attributes: ['ALL']
// }
var params = {
  SourceImage: { /* required */
   // Bytes: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
    S3Object: {
      Bucket: bucket,
      Name: photo,
     // Version: 'STRING_VALUE'
    }
  },
  TargetImage: { /* required */
  //  Bytes: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
    S3Object: {
      Bucket: bucket,
      Name: photo,
  //    Version: 'STRING_VALUE'
    }
  },
  //QualityFilter: NONE | AUTO | LOW | MEDIUM | HIGH,
  SimilarityThreshold: 90
};
client.compareFaces(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
// client.detectFaces(params, function(err, response) {
//   if (err) {
//     console.log(err, err.stack); // an error occurred
//   } else {
//     console.log(`Detected faces for: ${photo}`)
//     response.FaceDetails.forEach(data => {
//       let low  = data.AgeRange.Low
//       let high = data.AgeRange.High
//       console.log(`The detected face is between: ${low} and ${high} years old`)
//       console.log("All other attributes:")
//       console.log(`  BoundingBox.Width:      ${data.BoundingBox.Width}`)
//       console.log(`  BoundingBox.Height:     ${data.BoundingBox.Height}`)
//       console.log(`  BoundingBox.Left:       ${data.BoundingBox.Left}`)
//       console.log(`  BoundingBox.Top:        ${data.BoundingBox.Top}`)
//       console.log(`  Age.Range.Low:          ${data.AgeRange.Low}`)
//       console.log(`  Age.Range.High:         ${data.AgeRange.High}`)
//       console.log(`  Smile.Value:            ${data.Smile.Value}`)
//       console.log(`  Smile.Confidence:       ${data.Smile.Confidence}`)
//       console.log(`  Eyeglasses.Value:       ${data.Eyeglasses.Value}`)
//       console.log(`  Eyeglasses.Confidence:  ${data.Eyeglasses.Confidence}`)
//       console.log(`  Sunglasses.Value:       ${data.Sunglasses.Value}`)
//       console.log(`  Sunglasses.Confidence:  ${data.Sunglasses.Confidence}`)
//       console.log(`  Gender.Value:           ${data.Gender.Value}`)
//       console.log(`  Gender.Confidence:      ${data.Gender.Confidence}`)
//       console.log(`  Beard.Value:            ${data.Beard.Value}`)
//       console.log(`  Beard.Confidence:       ${data.Beard.Confidence}`)
//       console.log(`  Mustache.Value:         ${data.Mustache.Value}`)
//       console.log(`  Mustache.Confidence:    ${data.Mustache.Confidence}`)
//       console.log(`  EyesOpen.Value:         ${data.EyesOpen.Value}`)
//       console.log(`  EyesOpen.Confidence:    ${data.EyesOpen.Confidence}`)
//       console.log(`  MouthOpen.Value:        ${data.MouthOpen.Value}`)
//       console.log(`  MouthOpen.Confidence:   ${data.MouthOpen.Confidence}`)
//       console.log(`  Emotions[0].Type:       ${data.Emotions[0].Type}`)
//       console.log(`  Emotions[0].Confidence: ${data.Emotions[0].Confidence}`)
//       console.log(`  Landmarks[0].Type:      ${data.Landmarks[0].Type}`)
//       console.log(`  Landmarks[0].X:         ${data.Landmarks[0].X}`)
//       console.log(`  Landmarks[0].Y:         ${data.Landmarks[0].Y}`)
//       console.log(`  Pose.Roll:              ${data.Pose.Roll}`)
//       console.log(`  Pose.Yaw:               ${data.Pose.Yaw}`)
//       console.log(`  Pose.Pitch:             ${data.Pose.Pitch}`)
//       console.log(`  Quality.Brightness:     ${data.Quality.Brightness}`)
//       console.log(`  Quality.Sharpness:      ${data.Quality.Sharpness}`)
//       console.log(`  Confidence:             ${data.Confidence}`)
//       console.log("------------")
//       console.log("")
//     }) // for response.faceDetails
//   } // if
// });