
https://teachablemachine.withgoogle.com/models/8LpqXNcAB/
function startClassification() {
    navigater.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8LpqXNcAB/model.json', modelReady);
    

}
function modelReady() {
    classifier.classify(gotResult);
}