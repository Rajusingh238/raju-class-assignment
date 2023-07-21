  
  // Shorten Url (Destination Url) → Short Url
function shortenUrl(destinationUrl) {
  // Generate a random short URL.
  var shortUrl = generateRandomShortUrl();

  // Check if the short URL already exists.
  if (shortUrlExists(shortUrl)) {
    // Generate a new short URL.
    shortUrl = generateRandomShortUrl();
  }

  // Save the short URL and destination URL in the database.
  saveUrl(shortUrl, destinationUrl);

  // Return the short URL.
  return shortUrl;
}

// Update short url (Short Url, Destination Url) → Boolean
function updateShortUrl(shortUrl, destinationUrl) {
  // Check if the short URL exists.
  if (!shortUrlExists(shortUrl)) {
    return false;
  }

  // Update the destination URL in the database.
  updateUrl(shortUrl, destinationUrl);

  // Return true.
  return true;
}

// Get Destination Url (Short Url) → Destination Url
function getDestinationUrl(shortUrl) {

  // Check if the short URL exists.
  if (!shortUrlExists(shortUrl)) {
    return null;
  }

  // Get the destination URL from the database.
  var destinationUrl = getUrl(shortUrl);

  // Return the destination URL.
  return destinationUrl;
}

// Update Expiry (Short Url, Days to add in expity) →Boolean
function updateExpiry(shortUrl, daysToAdd) {
  // Check if the short URL exists.
  if (!shortUrlExists(shortUrl)) {
    return false;
  }

  // Update the expiry date in the database.
  updateExpiry(shortUrl, daysToAdd);

  // Return true.
  return true;
}

// Redirect the user to the destination URL.
function redirect(res, destinationUrl) {
  res.redirect(destinationUrl);
}