const domManipulator = (function(){
    const mainDiv = document.createElement('div');
    const weatherDiv = document.createElement('div');
        const tempDiv = document.createElement('div');
        const castDiv = document.createElement('div');
    const controlDiv = document.createElement('div');
        const mainButton = document.createElement('button');
        const mainForm = document.createElement('input');

    const setup = (function(){
        weatherDiv.append(tempDiv, castDiv);
        mainDiv.append(weatherDiv);
        controlDiv.append(mainButton, mainForm);
        mainDiv.append(controlDiv);
        controlDiv.id = "control";
        weatherDiv.id = "values";
        mainButton.innerText = "Update";
    }())
    
    const KtoF = function(kTemp){
        let fTemp = (kTemp -273.15)*9/5 +32;
        return fTemp;
    }

    const update = function(obj){
        tempDiv.innerText = KtoF(obj.main.temp);
        castDiv.innerText = obj.weather[0].description;
    }
    const getDomElements = function(){
        return mainDiv;
    }
    document.body.append(mainDiv);

    return{update, getDomElements}
})()


export default domManipulator;