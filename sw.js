const CACHE_NAME = "STORIES_CACHE-v3"

self.addEventListener("install", function(){
  //Guardar archivos iniciales
  caches.open(CACHE_NAME).then(function(cache){
    cache.addAll(["/index.html", "/dist/js/bundle.js"])
  });
});

self.addEventListener("activate", function(ev){
  ev.waitUntil(
    caches.keys().then(function(keys){
      let promises = keys.map(cacheName => {
        if(CACHE_NAME !== cacheName) return caches.delete(cacheName);
      });

      return Promise.all(promises);
    })
  )
});

self.addEventListener("fetch", function(ev){
  ev.respondWith(
    caches.match(ev.request)
      .then(function(response){
        return searchInChacheOrMakeRequest(ev.request);
      }).catch(function(err){
        if(ev.request.mode == "navigate")
          return caches.match(ev.request);
    })
  );
});

function searchInChacheOrMakeRequest(request){
  const cachePromise = caches.open(CACHE_NAME);
  const matchPromise = cachePromise.then(function(cache){
    return cache.match(request);
  });

  return Promise.all([cachePromise, matchPromise]).then(function([cache, cacheResponse]){

    const fetchPromise = fetch(request).then(function(fetchResponse){
      cache.put(request, fetchResponse.clone());

      return fetchResponse;
    });

    return cacheResponse || fetchPromise;
  });

}
