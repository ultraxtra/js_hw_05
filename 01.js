// Створити об'єкт для керування медіаплеєром. Об'єкт повинен мати методи для додавання пісень, видалення пісень, переключення наступної та попередньої пісні та паузи/продовження відтворення. Також повинен бути метод для відображення поточної пісні та загальної тривалості плейлисту.

const mediaPlayer = {
  songs: [],
  currentSongIndex: 0,
  isPlaying: false,
  duration: 0,
  curentSong:0,
  addSong() {
    this.songs.push({track:arguments[0],author:arguments[1],duration:arguments[2]});
    this.duration+=arguments[2];
  },
  removeSong(index) {
    this.songs.slice(index,1);
    console.log(`${this.songs[index].track} by ${this.songs[index].author} has been removed from the playlist.`)
  },
  play() {
    console.log(`Playing ${this.songs[this.curentSong].track} by ${this.songs[this.curentSong].author}`);
  },
  pause() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log("Paused song");
    }
  },
  next() {
    if(this.curentSong<this.songs.length)
    this.curentSong ++;
    console.log(`Playing ${this.songs[this.curentSong ].track} by ${this.songs[this.curentSong ].author}`);
  },
  previous() {
    if(this.curentSong>0){
      this.curentSong --;
      console.log(`Playing ${this.songs[this.curentSong].track} by ${this.songs[this.curentSong].author}`);
    }
  },
  displayCurrentSong() {
    console.log(`Now playing: ${this.songs[this.curentSong].track} by ${this.songs[this.curentSong].author}`);
  },
  calculateDuration() {
console.log(`The total duration of the playlist is ${this.duration} seconds.`);
  },
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