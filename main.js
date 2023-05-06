function preload()
{

} 

function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/F79B7Et8k/model.json", modelLoaded);
}

function draw()
{
    image(video, 0, 0, 400, 400);
    classifier.classify(video, gotResult);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("para_result").innerHTML= results[0].label;
        document.getElementById("para_result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}