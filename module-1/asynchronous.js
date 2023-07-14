const respSong = {
  title: "song title",
  artists: [{ name: "artist name 1" }],
  duration: 200,
};

const fetchSong = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const getChange = Math.random();
      if (getChange <= 0.2) {
        resolve(respSong);
      } else {
        reject(respSong);
      }
    }, 2000)
  );
};

const getSongWithPromise = () => {
  fetchSong()
    .then((result) => {
      console.log(`Successfully fetched with promise: ${result.title}`);
    })
    .catch((err) => {
      console.log(`Failed to fetch song with promise: ${JSON.stringify(err)}`);
    });
};

const getSongWithAsyncAwait = async () => {
  try {
    const result = await fetchSong();
    console.log(`Successfully fetched with async await: ${result.title}`);
  } catch (err) {
    console.log(
      `Failed to fetch song with async await: ${JSON.stringify(err)}`
    );
  }
};

getSongWithPromise();
getSongWithAsyncAwait();
