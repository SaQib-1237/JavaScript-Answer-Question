
let index = 1;

while (index <= 1){

        


        // Question One

const fruits = ['Mango', '"Apple"', 'Banana', 'Orange', 'Tomato'];

console.log(index + ")", "Second Element Of Array", fruits[1]);

        index ++;



            // Question Two

        // Change  the Third Element With Manago
fruits[2] = '|Mango|';

console.log(index + ")", "Adding Third Position ", fruits);

        index ++;



            // Question Three

const colors = [];

        // Print Empty Array

console.log(index + ")" ,"Empty Array " , colors);

colors.push ('Black', 'Blue', '|Yellow|')

console.log("Adding Colors in Epty Arary ", colors)

        index ++;

            // Question Four

 let deletedVAlule = colors.pop ();

console.log(index + ")", "Deleted Last Item ", deletedVAlule);

        index ++;

                // Question No Five..

fruits.unshift('|Frist Elelment"', '"Second Element|');

console.log(index + ")", "Added First Two Elelment in Fruits Array");
console.log(fruits);
        index ++;

                // Question NO Six..


const gym = ['|Raad|', 'Doumble', 'BetterFly', 'FlyDoumble', 'ChestPush'];

let gymDelete = gym.shift();

console.log(index + ")", 'Ubdate Gym Remove First Thing of Gym ', gymDelete);

        index ++;

                // Question No Seven...

const fourElement = ['Element ONe ', ' Element Two ', ' Element Three ', ' Element Four'];

console.log(index + ")", 'Lenegth Of Array Element ', fourElement.length);

        index ++;

                // Question No Eight..

let extractValue = fourElement.slice(2)

console.log(index + ")", 'Removeing Last Elemeent Of ARray Using Slice ', extractValue);

        index ++;

                // Question No Nine..

let hostel = [2, 4, 6, 8, 10, 12 ,14];

let evenVal = hostel.slice (2, 5);

console.log (index + ")", 'Even Value Of ARray ', evenVal);

        index ++;

                // Question No Ten

 console.log(index + ")", 'Before Splicng ', hostel)

 hostel.splice (3 , 2, 90, 100);

 console.log ('After Splicng Element Replaced With "90" & "100" ', hostel);
        
        index ++;

console.log("--------------------------------------------------------------------------------------");


        // ----------------------------------------------------------------------
                          // Push, Pop, Shift, and Unshift
        // ----------------------------------------------------------------------

const cites = ['Kohat', 'Peshawar', 'Islamabad'];

console.log(index + ")", "Before Pusshing Array ",  cites);

cites.push('Karachi');

console.log("After Pusshing Array ",  cites);

        index ++;

                // Question NO 12

let deletedCity = cites.pop();

console.log(index + ")", 'Deleting Cites At The End Usig POP -> ', deletedCity);

console.log("Ubdated Array is ", cites);

        index ++;

                // Question No Thirteen

const pageColor =  ["Red", "Blue", "Pink"];

console.log(index + ")", "Adding Color At the Start Using Unshift");

pageColor.unshift("White", "Black");

console.log("Ubdated Array is  -> ", pageColor);

        index ++;

                // Question No Fourteen

let firstColor = pageColor.shift();

console.log(index + ")", "First Color Deleted -> ", firstColor);

console.log("Ubdated Arras is -> ", pageColor);

        index ++;

                //Question No Fifteen

pageColor.push("Purple", "Green");

console.log(index + ")", "Adding Two New Name In Array Using Push ", pageColor);

        index ++;

                // Questuion No Sixteen

const arrlen = ['Pakistan', 'Canada', 'America', 'Forign', 'Indai'];

console.log(index + ")", "Before Pop The Length Of Array is -> ", arrlen.length);

let arrdel = arrlen.pop();

console.log("After Pop The Length Of Array is -> ", arrlen.length);

        index ++;

                // Question No Seventeeen

const arrSeventeen = ["ElementOne", "ElementTwo", "ElementThree",];

console.log(index + ")", "Original Array is -> ", arrSeventeen);

let newAray = arrSeventeen.shift()

console.log( "Using Shift Ubdated Array is -> ", arrSeventeen)

        index ++;

                // Question No Eighteen

arrSeventeen.unshift(100);

console.log(index + ")", "Adding Number In Array -> ", arrSeventeen)

        index ++;

                // Question No NineTeen

const numArr = [100, 200, 300];

console.log(index + ")", "Before UnShift -> ", numArr);

numArr.unshift(50);

console.log("After Adding First Element Using Unshift -> ", numArr);

        index ++;

                // Question No Twenty

let RemoveNum = numArr.shift();

console.log(index + ")" , "Deleted First Element ", numArr);

        index ++;

console.log("--------------------------------------------------------------------------------------");



            // ----------------------------------------------------------------------
                                  // Slice and Splice
            // ----------------------------------------------------------------------
       

        //     Question No TwentyOne

const smit = [20, 40, 60, 80, 100, 120, 140, 160];

console.log(index + ")", "Before Slicing the Array is -> ", smit);

let newSmit = smit.slice(0, 3);

console.log("First Three Element Sliced -> ", newSmit);

console.log("After Slicing -> ", smit);

        index ++;

        // Question No TwentyTwo

newSmit = smit.slice(2,4);

console.log(index + ")", "Sliced Element From 2 to 4 -> " ,newSmit);

        index ++ ;

        // Question No TwetyThree

console.log(index + ")","Before Splicing The Array is ->", smit);

smit.splice(1, 2);

console.log("After Splicing The Array is ->", smit);

        index ++ ; 

        // Question NO TwentyFour

const fruitarr = ["Apple", "Mango", "Tomato", "Banana"];

console.log(index + ")", "Before Splicing -> ", fruitarr);

fruitarr.splice(2, 0, "Lemon", "Orange");

console.log( "After Splicing Adding New Fruits At Second Index -> ", fruitarr);


        index ++ ;

        // Question No TwentyFive

fruitarr.splice(4, 2);

console.log(index + ")", "Modified Array Deleted Last Fruit Using Splice ", fruitarr);

        index ++;

        // Question No TwentySix

fruitarr.splice(0 , 0, "Strawbery", "StrawberyUbdated", "StrawberyNew");

console.log(index + ")", "Adding Three Element At The Begening Using Splice ", fruitarr);

        index ++ ;

        // Question No TwentySeven

let lastEl = fruitarr.slice(3,7);

console.log(index + ")", "Getting Last Four Element Using Slice Method -> ", lastEl);

        index ++;

        // Question No TwentyEight

console.log(index + ")", "Origial Array Remains Unchanged When i Used Slice Original Array -> ", fruitarr);

        index ++;

        // Question No twentyNine

const spArr = [10, 20, 30, 40, 50, 60];

console.log(index + ")", "Original Array -> ", spArr);

spArr.splice(2, 1);

console.log("Modifeid Array Remove Middle Element Using Splice -> ",spArr);

        index ++;

        // Question No Thirty

spArr.splice(2, 2, 100, 200)

console.log(index + ")", "Replace TWo Element Using Splice -> ", spArr);

index ++;

console.log("--------------------------------------------------------------------------------------");


                 // ----------------------------------------------------------------------
                                        // Pass by Reference
                 // ----------------------------------------------------------------------



                //  Question No 31

let originalArray = ['RozaONe', 'RozaTwo', 'RozaThree', 'RozaFour'];

let newArray = originalArray;

originalArray.push('RozaFive');

console.log(index + ")", "Original Array -> ", originalArray);

console.log("Modified Array -> ", newArray);

        index ++;

        // Question No 32

function addElement (){

        originalArray.push('RozaSix', 'RozaSeven');

        console.log("After Function Call -> ", originalArray)
}

console.log(index + ")", "Before Function Call Original Array is -> ", originalArray);

addElement();

        index ++;

                // Question No 33

 function newarr (arrOne) {
        arrOne.unshift('One');
        console.log("Modified Array Adding First Element -> ", arrOne);
}


const myArray = ['Two', 'Three', 'Four', 'Five'];

console.log(index + ")", "Unmodified Array Is -> ", myArray);

newarr(myArray);

        index ++;

        // Question 34

const firstArr = [1, 3, 5, 7, 9];

let secondArr = firstArr;

console.log(index + ")", "Before Modified First Array is", firstArr);

secondArr.pop();

console.log("Second Array is ", secondArr);

console.log(index + ")", " First Array is", firstArr);

        index ++;

        // Question No 35

const thirty = [30, 32, 34, 36, 38];

let thirtyModi = thirty;

let thirtyModiTwo = thirty;

console.log(index + ")", "Pointing Thirty Array -> ", thirtyModi);

console.log("Other Array Pointing Thirty Array -> ", thirtyModiTwo);

thirtyModi.splice(0, 1);

console.log("Pointing Thirty Array First Variable Modified -> ", thirtyModi);

console.log("Other Array  -> ", thirtyModiTwo);

        index ++;

        // Question NO 36

function universities (uni){
        let deletedDepart = uni.shift()
        console.log("Deleted Departent -> ", deletedDepart);
        console.log ("Modified Array is -> ", uni)
}

const university = ['DVM', 'DVS', 'CS', 'IT', 'AI', 'BBA'];

console.log(index + ")", "Before Modified Array is -> ", university);

universities (university);

        index ++;

                // Question No 37

let uniOne = university;

let uniTwo = university;

console.log(index + ")", 'Original Array is -> ', university);

uniOne.push("MBBS");

console.log( 'Modifeid Array -> ', uniOne);

console.log( 'Other Array -> ', uniTwo);

        index ++;

                // Question No 38

function humnanArr (hma){
        
        let newArr = hma.pop();
        console.log("deleted Item -> ", newArr);

        console.log('Modified Array is -> ', hma);
}

const human = ['Muslim', 'NonMuslim', "Other"];

console.log(index + ")", "Original Array is -> ", human);

humnanArr(human);

        index ++;

        // Question No 39

function changeLen (len){

        len.length = 2;  // Changes in Array Length
}
const lenArr = [20, 30, 40, 50, 60];

console.log(index + ")", "befroe Function Call", lenArr);

changeLen(lenArr);

console.log("Length Is Effected When INside A Function Arrsy Lnght is Modified -> ", len);

index ++;
                // Question No 40

const arrayOne = ["TaskOne ", "TaskTwo", "TaskThree", "TaskFour", "TaskFive"];

const arrayTwo = ["TaskOne ", "TaskTwo", "TaskThree", "TaskFour", "TaskFive"];

console.log(index + ")", "not strictly equal because they are different objects in memory. -> ", arrayOne === arrayTwo);

console.log("--------------------------------------------------------------------------------------");


}
