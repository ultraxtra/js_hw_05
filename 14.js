// Створити об'єкт для керування медіаплеєром. Об'єкт повинен мати методи для додавання пісень, видалення пісень, переключення наступної та попередньої пісні та паузи/продовження відтворення. Також повинен бути метод для відображення поточної пісні та загальної тривалості плейлисту.

const mediaPlayer = {
  songs: [],
  currentSongIndex: 0,
  isPlaying: false,
  duration: 0,
  addSong() {},
  removeSong() {},
  play() {},
  pause() {},
  next() {},
  previous() {},
  displayCurrentSong() {},
  calculateDuration() {},
};

//Для перевірки
mediaPlayer.addSong('Bohemian Rhapsody', 'Queen', 355);
mediaPlayer.addSong('Stairway to Heaven', 'Led Zeppelin', 482);
mediaPlayer.addSong('Hotel California', 'The Eagles', 390);

mediaPlayer.calculateDuration(); // The total duration of the playlist is 1227 seconds.

mediaPlayer.play(); // Playing Bohemian Rhapsody by Queen.

mediaPlayer.next(); // Playing Stairway to Heaven by Led Zeppelin.

mediaPlayer.displayCurrentSong(); // Now playing: Stairway to Heaven by Led Zeppelin.

mediaPlayer.pause(); // Paused Stairway to Heaven.

mediaPlayer.previous(); // Playing Bohemian Rhapsody by Queen.

mediaPlayer.removeSong(1); // Hotel California by The Eagles has been removed from the playlist.
