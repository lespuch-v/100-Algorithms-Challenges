function rearrangement_characters(arr1, arr2){
    const a1 = []
    const a2 = []

    for(let i = 0; i < arr1.length; i++){
        a1.push(arr1[i]) 
    }
    for(let i = 0; i < arr2.length; i++){
        a2.push(arr2[i])
    }
    const nweA = a1.sort()
    const nweB = a2.sort()

    let isSame = (a1.length === a2.length) && a1.every(function(element, index) {
        return element === a2[index]
    })
    
    

    return isSame

}

console.log(rearrangement_characters("xyza", "zyxa"))
console.log(rearrangement_characters("xyz", "zyp"))

let student_name = ['Karthik', 'Saideep', 'Balu', 'Shweta', 'Diya'];
student_name.sort();
console.log(student_name)