// Firebase config (ganti dengan config kamu)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

const videoList = document.getElementById('videoList');

async function loadVideos() {
  try {
    const listRef = storage.ref('videos');
    const res = await listRef.listAll();
    videoList.innerHTML = '';
    if (res.items.length === 0) {
      videoList.innerHTML = '<p>Tidak ada video tersedia.</p>';
    }
    res.items.forEach(async (itemRef) => {
      const url = await itemRef.getDownloadURL();
      const card = document.createElement('div');
      card.className = 'video-card';
      card.innerHTML = `<video controls src="${url}"></video><p>${itemRef.name}</p>`;
      videoList.appendChild(card);
    });
  } catch (err) {
    videoList.innerHTML = `<p style="color:red;">Gagal memuat video: ${err.message}</p>`;
  }
}

loadVideos();
