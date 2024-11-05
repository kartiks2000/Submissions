
# Submissions

This repository contains code for a project built with Angular that demonstrates various components and functionality for the "Submissions" page and provides various functionalities like data export, filtering, etc. Follow the instructions below to clone the repository, set up the environment, and run the application.

## Clone the Repository

To clone this repository, use the following command:

```bash
git clone https://github.com/kartiks2000/Submissions.git
```

Go inside the working directory:

```bash
cd Submissions
```

## Important Note

The application can be deployed as a Dockerized container using the provided Dockerfile. This approach simplifies the deployment process, ensuring a consistent environment across different platforms.

For detailed instructions on how to build and run the Docker container, please refer to the end sections of this README.


## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** version **22.11.0**
- **Angular CLI** version **18.2.11**

You can check your installed versions using:

```bash
node -v
ng version
```

```bash
v22.11.0
```

```bash
Angular CLI: 18.2.11
Node: 22.11.0
Package Manager: npm 10.9.0
OS: darwin arm64

Angular: 18.2.10
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1802.11
@angular-devkit/build-angular   18.2.11
@angular-devkit/core            18.2.11
@angular-devkit/schematics      18.2.11
@angular/cdk                    18.2.11
@angular/cli                    18.2.11
@angular/google-maps            18.2.11
@schematics/angular             18.2.11
rxjs                            7.8.1
typescript                      5.5.4
zone.js                         0.14.10
```

## Setup the Repository

After cloning the repository, navigate to the project directory and install the required dependencies using:

```bash
npm install
```

## Run the Server

To start the development server, run:

```bash
ng serve
```

The application will be available at `http://localhost:4200`.

## Google Maps Functionality

To enable map functionality in the application, an API key for the Google Maps service is required.

### Setting Up the API Key

1. Obtain a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/).
2. Open the `index.html` file in the root of your project.
3. Locate the script tag for Google Maps and replace `YOUR_API_KEY` in the `src` property with your actual API key:

   ```html
   <script
      async
      defer
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
    ></script>
   ```

Make sure to keep your API key secure and restrict its usage to your application for security purposes.

## Features

- **Filter Functionality**: Users can filter data based on various criteria, including date, status, and text input. This allows for more precise data retrieval and enhances user experience.

- **Export Functionality**: The application provides an option to download the filtered data as a CSV file. This feature enables users to easily access and utilize their data outside the application.

## Components Used in the App

### SubmissionsComponent
*The Submissions component is the outer most component of the application (inside the root) which contains the sub components discussed further.*

### NavbarComponent
*The Navbar component displayed at the top of the application, which provides the functionality of a Navbar.*

### SearchComponent
*The Search component manages all the data and enables the users to set various values like date, text, status, etc., to filter data accordingly.*

### TableComponent
*The Table component contains the paginated table when the List toggle is clicked (which is also displayed by default).*

### MapScreenComponent
*The MapScreen component is rendered when the Map toggle is clicked. It contain two sub-components MapList and MapComponent.*

### MapListComponent
*Thef MapList component consists of each data in a boxed format and it also respects the filter functionality just like the table.*

### MapComponent
*The Map component contains the actual Map. The application integrates the Google Maps API.*

![Diagram](/repo_assets/Submissions_components_architecture.drawio.png)

## Screenshots

![Screenshot 1](/repo_assets/ss_1.png)
![Screenshot 2](/repo_assets/ss_2.png)
![Screenshot 3](/repo_assets/ss_3.png)
![Screenshot 4](/repo_assets/ss_4.png)

## Export Data

The `Export` button downloads the filtered data as a CSV file.

![Exported CSV](/repo_assets/ss_5.png)

## Linting

To check for linting errors, use the following command:

```bash
ng lint
```

![Linting Screenshot](/repo_assets/ss_6.png)

## Build the Project

To create a production build of the application, run:

```bash
ng build
```

Or

```bash
ng build --configuration production
```

![Build Screenshot](/repo_assets/ss_7.png)

This will generate the build artifacts in the `dist/` directory.



## Running the Application with Docker

To run the application using Docker, follow these steps:

1. **Build the Docker Image**: 

   Use the following command to build the Docker image. Replace `<image-name>` with your preferred name for the image (e.g., `submissions-app`):

   ```bash
   docker build -t <image-name> .
   ```

2. **Run the Docker Container**: 

   After building the image, run the container using the command below. Make sure to map port `5001` of your host to port `5001` of the container:

   ```bash
   docker run -p 5001:5001 <image-name>
   ```

### Caution

Before running the Docker container, ensure that port `5001` is not already in use by another application. You can check the current usage of the port with the following command:

```bash
lsof -i :5001
```

If you find that port `5001` is in use, consider either stopping the application using that port or modifying the port mapping in the `docker run` command (e.g., `-p 5005:5001` to run on port `5005` instead).
