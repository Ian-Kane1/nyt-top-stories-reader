# New York Times Top Stories Reader

## Overview

This application displays New York Times top story information, called from an NYT API. 

## NYT API Key Required

An API key is required in order for this application to successfully communicate with the NYT API.

- Documentation for New York Times APIs can be found at https://developer.nytimes.com/apis
- This application uses the **Top Stories** API.
  - Top Stories - https://developer.nytimes.com/docs/top-stories-product/1/overview

### Place your API key within the **nyt.js** file, on line **75**, within the parentheses of:

```js
const apiKey = '' // insert your API key here
```