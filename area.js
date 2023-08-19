// get input value from this function (common function)
function getInputValue(inputId){
    const inputField = document.getElementById(inputId)
    const InputValueString = inputField.value
    const inputValue = parseFloat(InputValueString)
    inputField.value = ''
    return inputValue
}

// Set InnerText of Element (ReUseable function)
function setInnerTextOfElement(elementSpan, areaa){
    const elementyIdToGetAreaSpan = document.getElementById(elementSpan)
    elementyIdToGetAreaSpan.innerText = areaa.toFixed(2)
}

// ____________________________________

// Get area of Triangle
document.getElementById('caulate-btn').addEventListener('click',function(){

    const baseInt = getInputValue('base-input')
    const heightInt = getInputValue('height-input')

     if(isNaN(baseInt) || isNaN(heightInt)){
        alert('Please enter number')
        return
    }

    const area = 0.5 * baseInt * heightInt
    const areaDisplayValue = setInnerTextOfElement('area',area)

})


// Area of getRectengulAreaById()
document.getElementById('caulate-btn-react').addEventListener('click',function(){

    const width = getInputValue('width-input')
    const legnth = getInputValue('legnth-input')

    if(isNaN(width) || isNaN(legnth)){
        alert('Please enter number')
        return
    }

    const areaOfRect =  width * legnth
    const areaDisplayValueOfRect = setInnerTextOfElement('area-rect',areaOfRect)

})

// get area of Parallelogram

document.getElementById('parallelogram-btn').addEventListener('click',function(){
    
     const base = getInputValue('base-inputValue')
     const height = getInputValue('height-inputValue')

     if(isNaN(base) || isNaN(height)){
        alert('Please enter number')
        return
    }
     let areaOfParallelogram = base * height
     const displayValueOfParallelogram = setInnerTextOfElement('area-parallelogram', areaOfParallelogram)
      
})


// rhombus area
function getRhombusArea(){

    const baseInputValueRhombhus = getInputValue('base-inputValue-rhombhus')
    const heightInputValueRhombhus = getInputValue('height-inputValue-rhombhus') 

    if(isNaN(baseInputValueRhombhus) || isNaN(heightInputValueRhombhus)){
        alert('Please enter number')
        return
    } 

    const areaOfRhombus = 0.5 * baseInputValueRhombhus * heightInputValueRhombhus
    const displayvalueOfRhombus = setInnerTextOfElement('area-rhombus',areaOfRhombus)
    
}

// PentagonArea
function getPentagonArea(){
    const baseInputValuePentagon = getInputValue('base-inputValue-pentagon')
    const heightInputValuePentagon = getInputValue('height-inputValue-pentagon')

    if(isNaN(baseInputValuePentagon) || isNaN(heightInputValuePentagon)){
        alert('Please enter number')
        return
    }
    const areaPentagon = 0.5 * baseInputValuePentagon * heightInputValuePentagon
    const displayValueOfPentagon = setInnerTextOfElement('area-pentagon',areaPentagon)

}

// Ellipse Area
function ellipseArea(){
    const baseInputValueEllipse = getInputValue('base-inputValue-ellipse')
    const heightInputValueEllipse = getInputValue('height-inputValue-ellipse')

    if(isNaN(baseInputValueEllipse) || isNaN(heightInputValueEllipse)){
        alert('Please enter number')
        return
    }
    
    const ellipseArea = 3.1416 * baseInputValueEllipse * heightInputValueEllipse  
    const displayValueOfEllipse = setInnerTextOfElement('ellipseArea',ellipseArea)

}