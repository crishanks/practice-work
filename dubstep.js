function songDecoder(song){
    let result = [];
    const isolatedWUB = song.split('WUB');
    isolatedWUB.forEach((word) => {
      if (word !== '') {
        result.push(word);
      }
    });
    return result.join(' ').trim();
  }

  songDecoder("WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB")//'JKD WBIRAQKF YE WV'