const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});

admin.initializeApp({
    //credential: admin.credential.cert(serviceAccount),
  
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://portfolio-afa01.firebaseio.com/",
    storageBucket: "gs://portfolio-afa01.firebaseio.com/"
  });

exports.getProjectsList = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        
        const databaseRef = admin.database().ref(`Projects`);

        var html='';
        var _=[];

        return new Promise(function(resolve,reject)
        {
            databaseRef.once('value').then(function(snapshot)
            {
    
              snapshot.forEach(function(dataSnapshot)
              {
    
                var name = dataSnapshot.child('name').val();
                var img = dataSnapshot.child('img').val();
                var start = dataSnapshot.child('start').val();
                var end = dataSnapshot.child('end').val();
                var comment = dataSnapshot.child('comment').val();
                var href = dataSnapshot.child('href').val();

                var data = { 
                    'name':name,
                    'img':img,
                    'start':start,
                    'end': end,
                    'comment': comment,
                    'href': href};

                _[_.length]=data;


              });
              html = JSON.stringify(_);  
              res.send(html);
            }); 

        });

    });
});