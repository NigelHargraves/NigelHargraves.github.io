//audio to variables.
let C1 = document.getElementById("audio1");
let D1 = document.getElementById("audio2");
let E1 = document.getElementById("audio3");
let F1 = document.getElementById("audio4");
let G1 = document.getElementById("audio5");
let A1 = document.getElementById("audio6");
let B1 = document.getElementById("audio7");
let C2 = document.getElementById("audio8");
let D2 = document.getElementById("audio9");
let E2 = document.getElementById("audio10");
let F2 = document.getElementById("audio11");
let G2 = document.getElementById("audio12");
let A2 = document.getElementById("audio13");
let B2 = document.getElementById("audio14");
let C3 = document.getElementById("audio15");
let D3 = document.getElementById("audio16");
let E3 = document.getElementById("audio17");
let F3 = document.getElementById("audio18");
let G3 = document.getElementById("audio19");
let A3 = document.getElementById("audio20");
let B3 = document.getElementById("audio21");
let C4 = document.getElementById("audio22");
let D4 = document.getElementById("audio23");
let E4 = document.getElementById("audio24");
let F4 = document.getElementById("audio25");
let G4 = document.getElementById("audio26");
let A4 = document.getElementById("audio27");
let B4 = document.getElementById("audio28");
let C5 = document.getElementById("audio29");
let D5 = document.getElementById("audio30");
let E5 = document.getElementById("audio31");
let F5 = document.getElementById("audio32");
let G5 = document.getElementById("audio33");
let A5 = document.getElementById("audio34");
let B5 = document.getElementById("audio35");
let C6 = document.getElementById("audio36");
let D6 = document.getElementById("audio37");
let E6 = document.getElementById("audio38");
let F6 = document.getElementById("audio39");
let G6 = document.getElementById("audio40");
let A6 = document.getElementById("audio41");
let B6 = document.getElementById("audio42");


let C7 = document.getElementById("audio43");
let D7 = document.getElementById("audio44");
let E7 = document.getElementById("audio45");
let F7 = document.getElementById("audio46");
let G7 = document.getElementById("audio47");
let A7 = document.getElementById("audio48");
let B7 = document.getElementById("audio49");
let C8 = document.getElementById("audio50");
let D8 = document.getElementById("audio51");
let E8 = document.getElementById("audio52");
let F8 = document.getElementById("audio53");
let G8 = document.getElementById("audio54");
let A8 = document.getElementById("audio55");
let B8 = document.getElementById("audio56");
let C9 = document.getElementById("audio57");
let D9 = document.getElementById("audio58");
let E9 = document.getElementById("audio59");
let F9 = document.getElementById("audio60");
let G9 = document.getElementById("audio61");
let A9 = document.getElementById("audio62");
let B9 = document.getElementById("audio63");
let C10 = document.getElementById("audio64");
let D10 = document.getElementById("audio65");
let E10 = document.getElementById("audio66");
let F10 = document.getElementById("audio67");
let G10 = document.getElementById("audio68");
let A10 = document.getElementById("audio69");
let B10 = document.getElementById("audio70");
let C11 = document.getElementById("audio71");
let D11 = document.getElementById("audio72");
let E11 = document.getElementById("audio73");
let F11 = document.getElementById("audio74");
let G11 = document.getElementById("audio75");
let A11 = document.getElementById("audio76");
let B11 = document.getElementById("audio77");
let C12 = document.getElementById("audio78");
let D12 = document.getElementById("audio79");
let E12 = document.getElementById("audio80");
let F12 = document.getElementById("audio81");
let G12 = document.getElementById("audio82");
let A12 = document.getElementById("audio83");
let B12 = document.getElementById("audio84");

let CBass = document.getElementById("audio85");
let DBass = document.getElementById("audio86");
let EBass = document.getElementById("audio87");
let FBass = document.getElementById("audio88");
let GBass = document.getElementById("audio89");
let ABass = document.getElementById("audio90");
let BBass = document.getElementById("audio91");


let CChord = document.getElementById("audio92");
let Dsus4Chord = document.getElementById("audio93");
let EmChord = document.getElementById("audio94");
let FChord = document.getElementById("audio95");
let GChord = document.getElementById("audio96");
let Gsus4Chord = document.getElementById("audio97");
let AmChord = document.getElementById("audio98");
let Asus2Chord = document.getElementById("audio99");

let drumBass = document.getElementById("audio100");

function setVolume() {
    let noteVolume = 0.25;
    let bassVolume = 0.4;
    let noteVolume2 = 0.1;
    let chordVolume = 0.5;

    drumBass.volume = 0.1;

    CChord.volume = chordVolume;
    Dsus4Chord.volume = chordVolume;
    EmChord.volume = chordVolume;
    FChord.volume = chordVolume;
    GChord.volume = chordVolume;
    Gsus4Chord.volume = chordVolume;
    AmChord.volume = chordVolume;
    Asus2Chord.volume = chordVolume;




    CBass.volume = bassVolume;
    DBass.volume = bassVolume;
    EBass.volume = bassVolume;
    FBass.volume = bassVolume;
    GBass.volume = bassVolume;
    ABass.volume = bassVolume;
    BBass.volume = bassVolume;



    C1.volume = noteVolume;
    D1.volume = noteVolume;
    E1.volume = noteVolume;
    F1.volume = noteVolume;
    G1.volume = noteVolume;
    A1.volume = noteVolume;
    B1.volume = noteVolume;
    C2.volume = noteVolume;
    D2.volume = noteVolume;
    E2.volume = noteVolume;
    F2.volume = noteVolume;
    G2.volume = noteVolume;
    A2.volume = noteVolume;
    B2.volume = noteVolume;
    C3.volume = noteVolume;
    D3.volume = noteVolume;
    E3.volume = noteVolume;
    F3.volume = noteVolume;
    G3.volume = noteVolume;
    A3.volume = noteVolume;
    B3.volume = noteVolume;
    C4.volume = noteVolume2;
    D4.volume = noteVolume2;
    E4.volume = noteVolume2;
    F4.volume = noteVolume2;
    G4.volume = noteVolume2;
    A4.volume = noteVolume2;
    B4.volume = noteVolume2;
    C5.volume = noteVolume2;
    D5.volume = noteVolume2;
    E5.volume = noteVolume2;
    F5.volume = noteVolume2;
    G5.volume = noteVolume2;
    A5.volume = noteVolume2;
    B5.volume = noteVolume2;
    C6.volume = noteVolume2;
    D6.volume = noteVolume2;
    E6.volume = noteVolume2;
    F6.volume = noteVolume2;
    G6.volume = noteVolume2;
    A6.volume = noteVolume2;
    B6.volume = noteVolume2;




    C7.volume = noteVolume;
    D7.volume = noteVolume;
    E7.volume = noteVolume;
    F7.volume = noteVolume;
    G7.volume = noteVolume;
    A7.volume = noteVolume;
    B7.volume = noteVolume;
    C8.volume = noteVolume;
    D8.volume = noteVolume;
    E8.volume = noteVolume;
    F8.volume = noteVolume;
    G8.volume = noteVolume;
    A8.volume = noteVolume;
    B8.volume = noteVolume;
    C9.volume = noteVolume;
    D9.volume = noteVolume;
    E9.volume = noteVolume;
    F9.volume = noteVolume;
    G9.volume = noteVolume;
    A9.volume = noteVolume;
    B9.volume = noteVolume;
    C10.volume = noteVolume2;
    D10.volume = noteVolume2;
    E10.volume = noteVolume2;
    F10.volume = noteVolume2;
    G10.volume = noteVolume2;
    A10.volume = noteVolume2;
    B10.volume = noteVolume2;
    C11.volume = noteVolume2;
    D11.volume = noteVolume2;
    E11.volume = noteVolume2;
    F11.volume = noteVolume2;
    G11.volume = noteVolume2;
    A11.volume = noteVolume2;
    B11.volume = noteVolume2;
    C12.volume = noteVolume2;
    D12.volume = noteVolume2;
    E12.volume = noteVolume2;
    F12.volume = noteVolume2;
    G12.volume = noteVolume2;
    A12.volume = noteVolume2;
    B12.volume = noteVolume2;

}