<img src = "https://github.com/melonproject/branding/blob/master/facebook/Facebook%20cover%20blue%20on%20white.png" width = "100%">

# decentralized-portal

Front-end application of the decentralized Melon portal. 


## Installation

1. Clone this repository
    ```
    git clone git@github.com:melonproject/decentralized-portal.git
    cd decentralized-portal

    ```

2. Install dependencies:
    ```
    npm install
    ```

## Getting started

After installation is complete

**Right now, the Melon.js library is injected with a local link, not through npm (see instructions in Melon.js repo, under Link Dev Build section: https://github.com/melonproject/melon.js)**.

Go to the above `decentralized-portal` directory, open a terminal and launch the react application:

```
npm start
```

## Ipfs deployment

Build the react application:

```
npm build
```

React-script will create automatically the /build directory with a /static folder containing the .js and .css files. Since ipfs cannot handle relative paths, we need to get rid of the static folder and move all the files in the subfolders to the build directory. Next, change all the references of the files in index.html.

With the ipfs daemon running, deploy the app:

```
ipfs add -r build
```
