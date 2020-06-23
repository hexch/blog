export default ({ router, isServer }) => {
  if (isServer) return
  if (!window.firebase) return
  window.firebase.initializeApp({
    apiKey: "AIzaSyD82fA0__60heczcUJmkJuDipWEU_dKFf0",
    authDomain: "hexchblog.firebaseapp.com",
    databaseURL: "https://hexchblog.firebaseio.com",
    projectId: "hexchblog",
    storageBucket: "hexchblog.appspot.com",
    messagingSenderId: "722590938202",
    appId: "1:722590938202:web:b53bc2e380415a2e171463",
    measurementId: "G-7415JRVFV7"
  });
  window.firebase.analytics()
  router.afterEach(() => {
    window.firebase.analytics().logEvent('page_view');
  })
}