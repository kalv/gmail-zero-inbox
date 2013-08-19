# Gmail Zero Inbox

Chrome extension to show a photo of the day with a caption every day
when you clear out your inbox.

## What photo

I'm using a service called [Image a day
API](http://github.com/kalv/image-a-day) I built to fetch the photo of the day from Bing.
Couldn't call the Bing URL directly because of lovely cross origin
policy.

## Installation
Manually for now. So if you are a chrome developer you will know how to
load an unpacked extension. Simply clone this repo and then install the
extension from `chrome://extensions`.

Then get your inbox to zero to see the image.


## Current limitations

- Very alpha, don't know how much the class naming changes for gmail
- Gmail tabs inbox doesn't work yet - haven't added the correct css
class selectors to add the image
- Chrome only
