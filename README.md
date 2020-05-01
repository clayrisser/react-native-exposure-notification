# react-native-exposure-notification

> access the covid-19 exposure notification api from react native

**If you are trying to integrate a react native app with the ios or android exposure
notification api, I would love to collaborate with you to help get your app out as fast
as possible. You can contact me at the link below.**

[![Nueve Solutions](https://user-images.githubusercontent.com/6234038/80830613-e0f3fc00-8c06-11ea-9bf1-8cd2b7306e99.png)](https://nuevesolutions.com/contactus)

[https://nuevesolutions.com/contactus](https://nuevesolutions.com/contactus)

## Setup

```sh
npm install --save react-native-exposure-notification
react-native link react-native-exposure-notification
```

## Usage

```js
import ExposureNotification from 'react-native-exposure-notification';
import exposureConfiguration from './exposureConfiguration'

ExposureNotification.start(exposureConfiguration);
```

## References

https://blog.google/documents/68/Android_Exposure_Notification_API_documentation_v1.2.pdf
