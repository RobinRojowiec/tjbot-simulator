// initialize virtual tj bot
var tj = new TJBot(["camera","led"], {}, {
  visual_recognition: {
    iam_apikey: process.env.VISUAL_RECOGNITION_IAM_APIKEY,
    iam_url: process.env.VISUAL_RECOGNITION_URL,
    classifier_id: process.env.CLASSIFIER_ID
  }
});

// let tj light shine
tj.shine("gray")

tj.see(objects => {
  // list of found classes
  var classes = objects["images"][0]["classifiers"][0]["classes"]
  // log classes
  console.log(classes)
  
  for(var index in classes){
    // get current class
    var object_class = classes[index]["class"]
	
    // trigger action based on class
    switch(object_class){
      case "person":
        tj.shine("green");
      default:
        break;
    }
  }
});
