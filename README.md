# Tracker App React Native Application

Welcome to the **Tracker App** repository! This README provides instructions on how to clone, set up, and run the Tracker App React Native application on your local development environment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

**Environment setup**: https://reactnative.dev/docs/environment-setup

## Clone the Repository

First, clone this repository to your local machine using Git:

```
git clone https://github.com/Bharathkdev/trackerApp
```

## Navigate to the App Folder

Change your working directory to the app folder:

```
cd trackerApp/
```

## Install Dependencies

You can use npm or yarn to install the project dependencies.

### Using Yarn:

```
yarn install
``` 

### Using npm:

```
npm install
```

## iOS Specific Steps

### Install iOS Dependencies

Before running the app on an iOS simulator or device, you'll need to install iOS dependencies using CocoaPods. Run the following commands:

```
cd ios/
pod install
```

This will install the required dependencies for the iOS portion of your app.

## Running the App

You can run the application on either an Android or iOS emulator, or on a physical device if it's connected to your development machine.

### Android

To run the app on an Android emulator or device, use one of the following commands:

### Using Yarn:

```
yarn android
```

### Using React Native CLI:

```
npx react-native run-android
```

### iOS

To run the app on an iOS simulator or device, use one of the following commands:

### Using Yarn:

```
yarn ios
```

### Using React Native CLI:

```
npx react-native run-ios
```
## Troubleshooting

If you face any error while installing pods using pod install make sure your pod version is up-to-date. Run the following command:

```
cd ios/
pod install --repo-update
```
