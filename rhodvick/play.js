const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '📀'
}, async (_0x4d1a89, _0x5b694d, _0x124a43) => {
  const {
    ms: _0x51df4c,
    repondre: _0x1b689e,
    arg: _0x3d2efa
  } = _0x124a43;
  if (!_0x3d2efa[0]) {
    _0x1b689e("Please give Rhodvick a song name.");
    return;
  }
  try {
    let _0x59f7b2 = _0x3d2efa.join(" ");
    let _0x429f60 = [];
    const _0x2db9b7 = await yts(_0x59f7b2);
    _0x429f60 = _0x2db9b7.videos;
    if (_0x429f60 && _0x429f60.length > 0) {
      const _0xbac89d = _0x429f60[0].url;
      const _0x55687e = await fetch("https://api.davidcyriltech.my.id/download/ytmp3?url=" + encodeURIComponent(_0xbac89d) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x3cbc50 = await _0x55687e.json();
      if (_0x3cbc50.status === 200 && _0x3cbc50.success) {
        const _0x7e64a1 = _0x3cbc50.result.download_url;
        const _0x593aa8 = {
          'image': {
            'url': _0x429f60[0].thumbnail
          },
          'caption': "*RHODVICK MUSIC SEARCH*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x3cbc50.result.title + "\n│⿻ *Quality:* " + _0x3cbc50.result.type + "\n│⿻ *Duration:* " + _0x429f60[0].timestamp + "\n│⿻ *Viewers:* " + _0x429f60[0].views + "\n│⿻ *Uploaded:* " + _0x429f60[0].ago + "\n│⿻ *Artist:* " + _0x429f60[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0xbac89d + "\n\n╭────────────────◆\n│ *_POWERED BY RHODVICK TECH._*\n╰─────────────────◆"
        };
        await _0x5b694d.sendMessage(_0x4d1a89, _0x593aa8, {
          'quoted': _0x51df4c
        });
        await _0x5b694d.sendMessage(_0x4d1a89, {
          'audio': {
            'url': _0x7e64a1
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x51df4c
        });
        _0x1b689e("RHODVICK 𝙸𝚂 𝙼𝚈 𝙾𝚆𝙽𝙴𝚁🍀");
      } else {
        _0x1b689e("Failed to download audio. Please try again later.");
      }
    } else {
      _0x1b689e("No audio found.");
    }
  } catch (_0x20d4cf) {
    console.error("Error from API:", _0x20d4cf);
    _0x1b689e("no possible audio found ❌.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '💿'
}, async (_0xc0514c, _0x25aef0, _0xd17cc7) => {
  const {
    ms: _0x147abd,
    repondre: _0x31a384,
    arg: _0xe72e83
  } = _0xd17cc7;
  if (!_0xe72e83[0]) {
    _0x31a384("Please insert a song name.");
    return;
  }
  try {
    let _0x18510e = _0xe72e83.join(" ");
    let _0xdac956 = [];
    const _0x35af96 = await yts(_0x18510e);
    _0xdac956 = _0x35af96.videos;
    if (_0xdac956 && _0xdac956.length > 0) {
      const _0x1e16bd = _0xdac956[0].url;
      const _0x29ffb7 = await fetch("https://api.davidcyriltech.my.id/download/ytmp3?url=" + encodeURIComponent(_0x1e16bd) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x41aa60 = await _0x29ffb7.json();
      if (_0x41aa60.status === 200 && _0x41aa60.success) {
        const _0xb466ed = _0x41aa60.result.download_url;
        const _0x40a706 = {
          'image': {
            'url': _0xdac956[0].thumbnail
          },
          'caption': "*RHODVICK TECH MUSIC*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x41aa60.result.title + "\n│⿻ *Quality:* " + _0x41aa60.result.type + "\n│⿻ *Duration:* " + _0xdac956[0].timestamp + "\n│⿻ *Viewers:* " + _0xdac956[0].views + "\n│⿻ *Uploaded:* " + _0xdac956[0].ago + "\n│⿻ *Artist:* " + _0xdac956[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x1e16bd + "\n\n╭────────────────◆\n│ *_𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 RHODVICK TECH._*\n╰─────────────────◆"
        };
        await _0x25aef0.sendMessage(_0xc0514c, _0x40a706, {
          'quoted': _0x147abd
        });
        await _0x25aef0.sendMessage(_0xc0514c, {
          'document': {
            'url': _0xb466ed
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x147abd
        });
        _0x31a384("Download Success...");
      } else {
        _0x31a384("Failed to download audio. Please try again later.");
      }
    } else {
      _0x31a384("No audio found.");
    }
  } catch (_0x22fb56) {
    console.error("Error from API:", _0x22fb56);
    _0x31a384("An error occurred while searching or downloading the audio.");
  }
});
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x181018, _0x4b0aa3, _0x762c4e) => {
  const {
    ms: _0x47a84d,
    repondre: _0x2888b3,
    arg: _0x147e4f
  } = _0x762c4e;
  if (!_0x147e4f[0]) {
    _0x2888b3("Please insert a song/video name.");
    return;
  }
  try {
    let _0x538e4c = _0x147e4f.join(" ");
    let _0x826413 = [];
    const _0x5d2ed7 = await yts(_0x538e4c);
    _0x826413 = _0x5d2ed7.videos;
    if (_0x826413 && _0x826413.length > 0) {
      const _0x377040 = _0x826413[0].url;
      const _0x58cc62 = await fetch("https://api.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x377040) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x469d44 = await _0x58cc62.json();
      if (_0x469d44.status === 200 && _0x469d44.success) {
        const _0x42417b = _0x469d44.result.download_url;
        const _0x485255 = {
          'image': {
            'url': _0x826413[0].thumbnail
          },
          'caption': "*RHODVICK 𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x469d44.result.title + "\n│⿻ *Quality:* " + _0x469d44.result.type + "\n│⿻ *Duration:* " + _0x826413[0].timestamp + "\n│⿻ *Viewers:* " + _0x826413[0].views + "\n│⿻ *Uploaded:* " + _0x826413[0].ago + "\n│⿻ *Artist:* " + _0x826413[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x377040 + "\n\n╭────────────────◆\n│ *_𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 RHODVICK TECH._*\n╰─────────────────◆"
        };
        await _0x4b0aa3.sendMessage(_0x181018, _0x485255, {
          'quoted': _0x47a84d
        });
        await _0x4b0aa3.sendMessage(_0x181018, {
          'video': {
            'url': _0x42417b
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x47a84d
        });
        _0x2888b3("Download Success...");
      } else {
        _0x2888b3("Failed to download the video. Please try again later.");
      }
    } else {
      _0x2888b3("No videos found.");
    }
  } catch (_0x5835a3) {
    console.error("Error from API:", _0x5835a3);
    _0x2888b3("An error occurred while searching or downloading the video.");
  }
});
zokou({
  'nomCom': "videodoc",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x422862, _0x545fa2, _0x18b00e) => {
  const {
    ms: _0x5b6714,
    repondre: _0x1679ed,
    arg: _0x5c2755
  } = _0x18b00e;
  if (!_0x5c2755[0]) {
    _0x1679ed("Please insert a song/video name.");
    return;
  }
  try {
    let _0x1fc540 = _0x5c2755.join(" ");
    let _0x1c03ba = [];
    const _0x12d17c = await yts(_0x1fc540);
    _0x1c03ba = _0x12d17c.videos;
    if (_0x1c03ba && _0x1c03ba.length > 0) {
      const _0x2b2678 = _0x1c03ba[0].url;
      const _0x35b468 = await fetch("https://api.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x2b2678) + "&apikey=" + "gifted_api_kt5gd63gjd8");
      const _0x5805e9 = await _0x35b468.json();
      if (_0x5805e9.status === 200 && _0x5805e9.success) {
        const _0x3651c3 = _0x5805e9.result.download_url;
        const _0x220bf1 = {
          'image': {
            'url': _0x1c03ba[0].thumbnail
          },
          'caption': "*RHODVICK 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗*\n\n╭───────────────◆\n│⿻ *Title:* " + _0x5805e9.result.title + "\n│⿻ *Quality:* " + _0x5805e9.result.type + "\n│⿻ *Duration:* " + _0x1c03ba[0].timestamp + "\n│⿻ *Viewers:* " + _0x1c03ba[0].views + "\n│⿻ *Uploaded:* " + _0x1c03ba[0].ago + "\n│⿻ *Artist:* " + _0x1c03ba[0].author.name + "\n╰────────────────◆\n⦿ *Direct YtLink:* " + _0x2b2678 + "\n\n╭────────────────◆\n│ *𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 RHODVICK TECH*\n╰─────────────────◆"
        };
        await _0x545fa2.sendMessage(_0x422862, _0x220bf1, {
          'quoted': _0x5b6714
        });
        await _0x545fa2.sendMessage(_0x422862, {
          'document': {
            'url': _0x3651c3
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x5b6714
        });
        _0x1679ed("Download Success...");
      } else {
        _0x1679ed("Failed to download the video. Please try again later.");
      }
    } else {
      _0x1679ed("No videos found.");
    }
  } catch (_0x4aaa1d) {
    console.error("Error from API:", _0x4aaa1d);
    _0x1679ed("An error occurred while searching or downloading the video.");
  }
});
