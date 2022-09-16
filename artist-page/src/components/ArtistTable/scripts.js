const artistName = document.querySelector('.artist_name');
const artistImage = document.querySelector('.artist_image');

const fetchArtist = async (artist) => {
    const APIResponse = await fetch(`https://api.spotify.com/v1/artists/${artist}`);
  
    if (APIResponse.status === 200) {
      const data = await APIResponse.json();
      return data;
    }
  }
  //https://api.spotify.com/v1/artists/{0rvPh6OKwXsdaQwNCqhpNb}
  
  let searchArtist = "0rvPh6OKwXsdaQwNCqhpNb";

  const renderArtist = async (artist) => {

    artistName.innerHTML = 'Loading...';
    artistImage.innerHTML = '';
  
    const data = await fetchArtist(artist);
  
    if (data) {
      artistImage.style.display = 'block';
      artistName.innerHTML = 'Ainda nada';
      artistImage.src = 'colocar o link aqui';
  
      searchArtist = 'o id';
  
    } 
  }

  renderArtist(searchArtist);