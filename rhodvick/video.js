const { zokou } = require("../framework/zokou");
const yts = require('yt-search');
const yt = require("../framework/scrap"); // Importing download functions
const { downloadVideo } = yt; // Importing the downloadVideo function

// Define the command with aliases
zokou({
  nomCom: "video",
  aliases: ["videodoc", "ytmp4", "film", "mp4"],
  categorie: "Search",
  reaction: "🎥"
}, async (originMessage, zk, commandOptions) => {
  const { arg, ms, respond } = commandOptions;

  // Check if a query is provided
  if (!arg[0]) {
    respond("Please provide a video name.");
    return;
  }

  const query = arg.join(" ");
  try {
    // Perform the video search
    const search = await yts(query);
    const videos = search.videos;

    // Check if videos are found
    if (videos && videos.length > 0 && videos[0]) {
      const video = videos[0];

      // Prepare the message info
      let messageInfo = {
        image: { url: video.thumbnail },
        caption: `*RHODVICK MD VIDEO DOWNLOAD*
    |__________________________|
    |-᳆ *Title*  : ${video.title}
    |-᳆ *Time* : ${video.timestamp}
    |-᳆ *Ago* : ${video.ago}
    |-᳆ *Views* : ${video.views}
    |-᳆ *Link* : ${video.url}
    |__________________________|`
      };

      // Send video details message
      zk.sendMessage(originMessage, messageInfo,  {
        disappearingMessagesInChat: true,
        ephemeralExpiration: 5 // Message disappears after 5 seconds
      },  { quoted: ms });

      // Define the video format (default to 360p)
      const format = '360p';

      // Download the video
      const videoUrl = await downloadVideo(video.url, format);

      if (!videoUrl) {
        respond('Rhodvick cant download your video,An error occurred while downloading the video.');
        return;
      }

      // Send the video as a message (in case of playback)
      await zk.sendMessage(originMessage, { video: { url: videoUrl }, caption: "*✦RHODVICK-MD✦*", gifPlayback: false }, { quoted: ms });

      // Send the video as a document (with correct MIME type for video)
      await zk.sendMessage(originMessage, { document: { url: videoUrl }, mimetype: 'video/mp4', caption: "*✦RHODVICK-MD✦*", gifPlayback: false }, { quoted: ms });

    } else {
      respond('No video found.');
    }
  } catch (error) {
    console.error('Error during search or video download:', error);
    respond('An error occurred during the search or download process.');
  }
});
