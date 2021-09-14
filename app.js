// UNSPLASH API
const count = 10;
const apiKey = 'U4mfoauS94G06NctgUbPr2C654pjPLSBG_glbwzAtVU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}
`;

// get photos from unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On Load
getPhotos();
